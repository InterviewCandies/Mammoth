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
import {Cancel, Delete, PermMedia, SearchOutlined} from "@material-ui/icons"
import styled, {ThemeContext} from "styled-components";
import CSelect from "./common/CSelect";
import CButton from "./common/CButton";
import CHeading from "./common/CHeading";
import ThemeModel from "../types/ThemeModel";
import useDarkMode from "../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../theme";
import {useContext} from "react";
import CBox from "./common/CBox";

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
        }
    },
    items: {
        backgroundColor: props => props.theme.input,
        color: props => props.theme.inputText,
        padding: "0.5rem",
        textTransform: "capitalize",
        fontWeight: 600,
        "&:focus": {
            backgroundColor: props => props.theme.button,
        },
        maxHeight:'200px',
        overflowY: "scroll"
    },
    icon: {
        color: props => props.theme.inputText
    },
    right: {
        display: "flex",
        justifyContent:"flex-end"
    }
}))

function Collection() {
    const theme = useContext(ThemeContext)
    const classes = useStyles({theme});
    const muiTheme = useTheme();

    return <Grid container direction={"column"} spacing={4} style={{position: 'fixed'}}>
        <Grid item xs={3}>
            <CBox>
                <Icon style={{color: theme.primary}}>
                    <PermMedia/>
                </Icon>
                <CHeading>Collection</CHeading>
            </CBox>
        </Grid>
        <Grid item xs={3} className={classes.collection}>
            <Grid item xs={12}><Text>Choose from</Text></Grid>
            <Grid item xs={12}>
                <CSelect onChange={()=>{}} style={{width: "100%"}}>
                    <MenuItem>A</MenuItem>
                    <MenuItem>B</MenuItem>
                </CSelect>
            </Grid>
            <Grid item xs={12} className={classes.right}>
                <CButton>Add</CButton>
            </Grid>
        </Grid>
        <Grid item xs={3}>
            <Grid item xs={12} style={{marginBottom: muiTheme.spacing(3)}}>
                <Text>Selected products</Text>
            </Grid>
            <List className={classes.items}>
                <ListItem>
                    <ListItemText>element white dress</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" className={classes.icon}>
                            <Cancel></Cancel>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText>element white dress</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" className={classes.icon}>
                            <Cancel></Cancel>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText>element white dress</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" className={classes.icon}>
                            <Cancel></Cancel>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText>element white dress</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" className={classes.icon}>
                            <Cancel></Cancel>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText>element white dress</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" className={classes.icon}>
                            <Cancel></Cancel>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText>element white dress</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" className={classes.icon}>
                            <Cancel></Cancel>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Grid>
    </Grid>
}

export default Collection;