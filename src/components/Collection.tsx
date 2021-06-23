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
import {deselectProduct, replaceSelectedProducts, selectProducts} from "../features/products";
import CLabel from "./common/CLabel";
import product from "../mocks/product";
import {createCollection, fetchCollection, updateCurrentCollection} from "../features/collection";
import {useModal} from "mui-modal-provider";
import CInputDialog from "./common/CInputDialog";
import {v4 as uuid} from "uuid";
import CollectionModel from "../types/CollectionModel";
import {useSnackbar} from "notistack";

const Text = styled.h4`
   color: ${({theme}) => theme.text };
   margin: 0;
`

type Props = {
    theme: ThemeModel
}

const useStyles = makeStyles<Theme, Props>((theme)=> ({
    root : {
        position: 'fixed',
        width:'30%',
      [theme.breakpoints.down('md')]: {
          position: 'relative',
          width:'100%',
      }
    },
    collection: {
        "& > *" : {
            marginBottom: theme.spacing(3)

        },
    },
    items: {
        backgroundColor: props => props.theme.body,
        color: props => props.theme.inputText,
        textTransform: "capitalize",
        marginTop: 0,
        fontWeight: 600,
        "&:focus": {
            backgroundColor: props => props.theme.button,
        },
        maxHeight:'300px',
        overflowY: "auto",
        "& > *" : {
            boxShadow: props => props.theme.boxShadowInside,
            margin: '0.5rem',
            backgroundColor: props => props.theme.input,
        }
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
    const selectedCollection = useAppSelector(state => state.collection.currentCollection);
    const collection = useAppSelector(state => state.collection.collection);
    const {showModal} = useModal();
    const {enqueueSnackbar} = useSnackbar();
    const selectedProductIds = useAppSelector(state => state.products.selection);

    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchCollection())
        }
        fetchData();
    }, []);

    const handleSelectCollection = (id: string) => {
        dispatch(updateCurrentCollection(id));
        dispatch(replaceSelectedProducts(collection.find(item => item.id == id)?.products || []));
    }

    const handleDeleteSelectedProduct = (id: string) => {
        dispatch(deselectProduct(id));
        enqueueSnackbar(t('deleted'), { variant: 'success'});
    }

    const handleAddCollection = () => {
        const modal = showModal(CInputDialog, {
            label: t('addCollection'),
            onOK: (value: string) => {
                const newColection: CollectionModel = { id: uuid(), name: value, products: [...selectedProductIds] };
                dispatch(createCollection(newColection));
                dispatch(updateCurrentCollection(newColection.id));
                enqueueSnackbar(t('added'), {variant: 'success'});
                modal.hide();
            },
            onCancel: () => {
                modal.hide();
            }
        })
    }

    return <Grid container direction={"column"} spacing={4} className={classes.root}>
        <Grid item xs={12}>
            <CBox>
                <Icon>
                    <PermMedia style={{color:theme.primary}}/>
                </Icon>
                <CHeading>{t('collection')}</CHeading>
            </CBox>
        </Grid>
        <Grid item xs={12} className={classes.collection}>
            <Grid item xs={12}><Text>{t('chooseFrom')}</Text></Grid>
            <Grid item xs={12}>
                <CSelect onChange={handleSelectCollection} value={selectedCollection} style={{width: '100%'}}>
                    {collection.map(item => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
                </CSelect>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid item xs={12} style={{marginBottom: muiTheme.spacing(2)}}>
                <Text>{t('selectedProducts')}</Text>
            </Grid>
            {
               selectedProducts.length ?
                   <Grid container spacing={2}>
                       <Grid item xs={12}>
                           <List className={classes.items}>
                               {selectedProducts.map(product =>
                                   <ListItem key={product.id}>
                                       <ListItemText>{product.productName}</ListItemText>
                                       <ListItemSecondaryAction>
                                           <IconButton edge="end" aria-label="delete" className={classes.icon}
                                                       onClick={() => handleDeleteSelectedProduct(product.id)}>
                                               <Cancel/>
                                           </IconButton>
                                       </ListItemSecondaryAction>
                                   </ListItem>)}
                           </List>
                       </Grid>
                        <Grid item xs={12} className={classes.right}>
                            <CButton onClick={handleAddCollection}>{t('addToCollection')}</CButton>
                        </Grid>
               </Grid> : null
            }
        </Grid>
    </Grid>
}

export default Collection;