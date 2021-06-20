import {Dialog, DialogContent, DialogProps, DialogTitle, Grid, Icon, makeStyles, Theme} from "@material-ui/core";
import ThemeModel from "../../types/ThemeModel";
import {useContext, useState} from "react";
import {ThemeContext} from "styled-components";
import CLabel from "./CLabel";
import CButton from "./CButton";
import {useTranslation} from "react-i18next";
import {Info} from "@material-ui/icons";

interface Props {
    theme: ThemeModel
}

const useStyles = makeStyles<Theme, Props>((theme) => ({
    root: {
        backgroundColor: props => props.theme.body,
        color: props => props.theme.text,
        padding: "1.2rem",
        textAlign: "center"
    },
    paper: {
        "& .MuiDialog-paper" : {
            margin: 0,
            overflow: 'hidden',
        }
    }
}))


type ModalProps = DialogProps & {
    message: string;
    onOK: () => void;
}



const CMessageDialog: React.FC<ModalProps> = (props) => {
    const theme = useContext(ThemeContext);
    const classes = useStyles({theme});
    const {t} = useTranslation();

    return <Dialog {...props} className={classes.paper}>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12} container alignItems={"center"} >
                    <Info style={{marginRight:'0.5rem'}}/>
                    <CLabel>{props.message}</CLabel>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'end'}}>
                    <CButton onClick={props.onOK} style={{marginLeft: 'auto'}}>{t('ok')}</CButton>
                </Grid>
            </Grid>
    </Dialog>
}

export default CMessageDialog;