import {Grid, makeStyles, MenuItem} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CLabel from "./common/CLabel";
import CSelect from "./common/CSelect";
import CButton from "./common/CButton";
import CInput from "./common/CInput";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(() => ({
    right: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))

function OptionsEditor() {
    const [materialAction, setMaterialAction] = useState<string>("add");
    const [productCondition, setProductCondition] = useState<string>("N");
    const classes = useStyles();
    const {t} = useTranslation();

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('options')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>{t('productCondition')}</CLabel>
            </Grid>
            <Grid item xs={12} spacing={3}>
                <Grid item xs={12}>
                    <CSelect  value={productCondition} onChange={(value) => setProductCondition(value)} style={{width: '100%'}}>
                        <MenuItem value={"N"}>N: New</MenuItem>
                        <MenuItem value={"B"}>B: Once returned to a seller's warehouse</MenuItem>
                        <MenuItem value={"U"}>U: Used</MenuItem>
                        <MenuItem value={"E"}>E: Displayed (Condition which already displayed at offline mall or sort of exhibition)</MenuItem>
                        <MenuItem value={"F"}>F: Refurbished</MenuItem>
                        <MenuItem value={"S"}>S: Damaged</MenuItem>
                    </CSelect>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.right}>
                <CButton>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>{t('material')}</CLabel>
            </Grid>
            <Grid container item xs={12} >
                <Grid item xs={2}>
                    <CSelect value={materialAction} onChange={(value) => setMaterialAction(value)} style={{width: '150px'}}>
                        <MenuItem value={"replace"}>{t('replace')}</MenuItem>
                        <MenuItem value={"add"}>{t('add')}</MenuItem>
                    </CSelect>
                </Grid>
                <Grid item xs={10}>
                    <CInput style={{width: "100%"}}></CInput>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.right}>
                <CButton>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CLabel>{t('selectedProducts')}</CLabel>
        </Grid>
    </Grid>;
}

export default OptionsEditor;