import {
    Grid, Icon, IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    MenuItem,
    Theme, useTheme
} from "@material-ui/core";
import {Cancel, CancelSharp, Delete, PermMedia, Remove, SearchOutlined} from "@material-ui/icons"
import styled, {ThemeContext} from "styled-components";
import CSelect from "./common/CSelect";
import CButton from "./common/CButton";
import CHeading from "./common/CHeading";
import ThemeModel from "../types/ThemeModel";
import useDarkMode from "../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../theme";
import {useContext, useEffect, useState} from "react";
import CBox from "./common/CBox";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../hooks";
import {deselectProduct, selectProducts} from "../features/products";
import CLabel from "./common/CLabel";
import product from "../mocks/product";
import {createCollection, fetchCollection} from "../features/collection";
import {useModal} from "mui-modal-provider";
import CInputDialog from "./common/CInputDialog";
import {v4 as uuid} from "uuid";

const Text = styled.h4`
   color: ${({theme}) => theme.text };
   margin: 0;
`

type Props = {
    theme: ThemeModel
}

const useStyles = makeStyles<Theme, Props>((theme)=> ({
    collection: {
        "& > *" : {
            marginBottom: theme.spacing(3)
        },
    },
    items: {
        backgroundColor: props => props.theme.input,
        color: props => props.theme.inputText,
        padding: "0.5rem",
        textTransform: "capitalize",
        fontWeight: 600,
        boxShadow: props => props.theme.boxShadowInside,
        "&:focus": {
            backgroundColor: props => props.theme.button,
        },
        maxHeight:'220px',
        overflowY: "auto"
    },
    icon: {
        color: props => props.theme.inputText,
        fontSize: "0.75rem"
    },
    right: {
        display: "flex",
        justifyContent:"flex-end",
        marginBottom: 0
    }
}))

function Collection() {
    const theme = useContext(ThemeContext)
    const classes = useStyles({theme});
    const muiTheme = useTheme();
    const selectedProducts = useAppSelector(state => state.products.products.filter(product => state.products.selection.includes(product.id)));
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const [selectedCollection, setSelectedCollection] = useState<string>('');
    const collection = useAppSelector(state => state.collection.collection);
    const {showModal} = useModal();
    const selectedProductIds = useAppSelector(state => state.products.selection);

    useEffect(() => {
        dispatch(fetchCollection())
    }, []);

    const handleSelectCollection = (value: string) => {
        setSelectedCollection(value);
        dispatch(selectProducts(collection.find(item => item.id == value)?.products || []));
    }

    const handleAddCollection = () => {
        const modal = showModal(CInputDialog, {
            label: 'Please enter a valid collection name',
            onOK: (value: string) => {
                dispatch(createCollection({id: uuid(), name: value, products: [...selectedProductIds]}));
                modal.hide();
            },
            onCancel: () => {
                modal.hide();
            }
        })
    }

    return <Grid container direction={"column"} spacing={4} style={{position: 'fixed'}}>
        <Grid item xs={3}>
            <CBox>
                <Icon>
                    <PermMedia style={{color:theme.primary}}/>
                </Icon>
                <CHeading>{t('collection')}</CHeading>
            </CBox>
        </Grid>
        <Grid item xs={3} className={classes.collection}>
            <Grid item xs={12}><Text>{t('chooseFrom')}</Text></Grid>
            <Grid item xs={12}>
                <CSelect onChange={handleSelectCollection} value={selectedCollection} style={{width: '100%'}}>
                    {collection.map(item => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
                </CSelect>
            </Grid>
            <Grid item xs={12} className={classes.right}>
                <CButton onClick={handleAddCollection}>{t('add')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={3}>
            <Grid item xs={12} style={{marginBottom: muiTheme.spacing(3)}}>
                <Text>{t('selectedProducts')}</Text>
            </Grid>
            {
               selectedProducts.length ? <List className={classes.items}>
                    {selectedProducts.map(product =>
                        <ListItem key={product.id}>
                            <ListItemText>{product.productName}</ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" className={classes.icon}
                                            onClick={() => dispatch(deselectProduct(product.id))}>
                                    <Cancel/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>)}
                </List> : null
            }
        </Grid>
    </Grid>
}

export default Collection;