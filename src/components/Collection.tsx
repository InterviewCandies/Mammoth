import {
    Grid, IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    MenuItem,
    Theme, useTheme
} from "@material-ui/core";
import {Cancel, Delete} from "@material-ui/icons"
import styled from "styled-components";
import CSelect from "./common/CSelect";
import CButton from "./common/CButton";
import CHeading from "./common/CHeading";
import ThemeModel from "../types/ThemeModel";
import useDarkMode from "../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../theme";

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
        color: props => props.theme.buttonText,
        padding: "0.5rem",
        textTransform: "capitalize",
        fontWeight: 600,
        "&:focus": {
            backgroundColor: props => props.theme.button,
        }
    },
    icon: {
        color: props => props.theme.buttonText
    },
    right: {
        display: "flex",
        justifyContent:"flex-end"
    }
}))

function Collection() {
    const [theme,] = useDarkMode();
    const classes = useStyles({theme : theme === 'light' ? lightTheme : darkTheme});
    const muiTheme = useTheme();

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>Collection</CHeading>
        </Grid>
        <Grid item xs={12} className={classes.collection}>
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
        <Grid item xs={12}>
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
            </List>
        </Grid>
    </Grid>
}

export default Collection;