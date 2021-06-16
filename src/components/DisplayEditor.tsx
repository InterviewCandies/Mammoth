import {Grid} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CLabel from "./common/CLabel";
import CCheckbox from "./common/CCheckbox";
import {useState} from "react";
import CButton from "./common/CButton";
import {useTranslation} from "react-i18next";

function DisplayEditor() {
    const [displayItems, setDisplayItems] = useState<boolean>(true);
    const {t} = useTranslation();

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('display')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>{t('displayProducts')}</CLabel>
            </Grid>
            <Grid container item xs={12} alignItems={"center"}>
                <CCheckbox checked={displayItems === true} onChange={()=> setDisplayItems(true)}></CCheckbox>
                <CLabel style={{marginLeft: "0.75rem"}}>{t('yes')}</CLabel>
            </Grid>
            <Grid container item xs={12} alignItems={"center"}>
                <CCheckbox checked={displayItems === false} onChange={()=> setDisplayItems(false)}></CCheckbox>
                <CLabel style={{marginLeft: "0.75rem"}}>{t('no')}</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CButton>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CLabel>{t('selectedProducts')}</CLabel>
        </Grid>
    </Grid>
}

export default DisplayEditor;