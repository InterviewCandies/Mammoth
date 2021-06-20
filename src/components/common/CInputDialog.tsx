import {Dialog, DialogContent, DialogProps, DialogTitle, Grid, makeStyles, Theme} from "@material-ui/core";
import ThemeModel from "../../types/ThemeModel";
import {useContext, useState} from "react";
import {ThemeContext} from "styled-components";
import CLabel from "./CLabel";
import CInput from "./CInput";
import CButton from "./CButton";

interface Props {
    theme: ThemeModel
}

const useStyles = makeStyles<Theme, Props>(() => ({
    root: {
        backgroundColor: props => props.theme.body,
        color: props => props.theme.text,
        minWidth: "500px",
        minHeight: '190px'
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

    return <Dialog {...props}>
        <DialogContent className={classes.root}>
            <form>
                <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={2} style={{paddingRight: 0}}>
                        <Grid item xs={12}><CLabel>{props.label}</CLabel></Grid>
                        <Grid item xs={12}><CInput style={{width: '100%'}} value={value} onChange={e => setValue(e.target.value)} /></Grid>
                    </Grid>

                    <Grid container item xs={12} justify={"flex-end"}>
                        <CButton style={{marginRight:'0.75rem'}} onClick={e  => { e.preventDefault(); props.onOK(value); }}>OK</CButton>
                        <CButton onClick={e  => { e.preventDefault(); props.onCancel(); }}>Cancel</CButton>
                    </Grid>
                </Grid>
            </form>
        </DialogContent>
    </Dialog>
}

export default CInputDalog;