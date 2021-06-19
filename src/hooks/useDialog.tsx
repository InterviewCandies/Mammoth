import {ReactElement, useContext, useState} from "react";
import {Button, Dialog, DialogContent, makeStyles, Theme, withStyles} from "@material-ui/core";
import ThemeModel from "../types/ThemeModel";
import {ThemeContext} from "styled-components";
import MuiDialogContent from "@material-ui/core/DialogContent"

interface Props {
    theme: ThemeModel
}

const useStyles = makeStyles<Theme, Props>(() => ({
    root: {
        backgroundColor: props => props.theme.paper,
        color: props => props.theme.inputText,
        minWidth: "500px"
    }
}))



function useDialog(): [()=>void, ()=>void, React.FC] {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useContext(ThemeContext);
    const classes = useStyles({theme});

    const closeDialog = () => {
        setOpen(false);
    }
    const openDialog = () => {
        setOpen(true);
    }

    const CDialog: React.FC = ({children}) => {
        return <Dialog open={open}>
            <DialogContent className={classes.root}>
                {children}
            </DialogContent>
        </Dialog>
    }

    return [openDialog, closeDialog, CDialog];
}

export default useDialog;
