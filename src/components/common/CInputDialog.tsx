import {Dialog, DialogContent, DialogProps, DialogTitle, Grid, makeStyles, Theme} from "@material-ui/core";
import ThemeModel from "../../types/ThemeModel";
import {useContext, useState} from "react";
import {ThemeContext} from "styled-components";
import CLabel from "./CLabel";
import CInput from "./CInput";
import CButton from "./CButton";
import {useTranslation} from "react-i18next";

interface Props {
    theme: ThemeModel
}

const useStyles = makeStyles<Theme, Props>(() => ({
    root: {
        backgroundColor: props => props.theme.body,
        color: props => props.theme.text,
        padding: "1.2rem",
    },
    paper: {
        "& .MuiDialog-paper" : {
            margin: 0,
            overflow: 'hidden',
        }
    }
}))


type ModalProps = DialogProps & {
    title?: string;
    label: string;
    onOK: (value: string) => void;
    onCancel: () => void;
}



const CInputDalog: React.FC<ModalProps> = (props) => {
    const theme = useContext(ThemeContext);
    const classes = useStyles({theme});
    const [value, setValue] = useState<string>('');
    const {t} = useTranslation();

    return <Dialog {...props} className={classes.paper}>
            <form>
                <Grid container spacing={3} className={classes.root}>
                    <Grid container item xs={12} spacing={3} style={{paddingRight: 0}}>
                        <Grid item xs={12}><CLabel>{props.label}</CLabel></Grid>
                        <Grid item xs={12}><CInput style={{width: '100%'}} value={value} onChange={e => setValue(e.target.value)} /></Grid>
                    </Grid>

                    <Grid container item xs={12} justify={"flex-end"}>
                        <CButton style={{marginRight:'0.75rem'}} onClick={e  => { e.preventDefault(); props.onOK(value); }}>
                            {t('ok')}
                        </CButton>
                        <CButton onClick={e  => { e.preventDefault(); props.onCancel(); }}>{t('cancel')}</CButton>
                    </Grid>
                </Grid>
            </form>
    </Dialog>
}

export default CInputDalog;