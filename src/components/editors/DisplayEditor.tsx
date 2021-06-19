import {Grid} from "@material-ui/core";
import CHeading from "../common/CHeading";
import CLabel from "../common/CLabel";
import CCheckbox from "../common/CCheckbox";
import {useState} from "react";
import CButton from "../common/CButton";
import {useTranslation} from "react-i18next";
import CTable from "../common/CTable";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {updateProducts} from "../../features/selection";

function DisplayEditor() {
    const [displayItems, setDisplayItems] = useState<boolean>(true);
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const selectedProducts = useAppSelector(state => state.select.selection);
    const columns = [
        {
            name: "id",
            label: "ID",
        },
        {
            name: "productName",
            label: t('productName'),
        },
        {
            name: "display",
            label: t('display'),
        },
    ]

    const handleEditDisplay = () => {
        dispatch(updateProducts({key: 'display', value: displayItems ? 'T' : 'F'}));
    }

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
                <CLabel style={{marginLeft: "0.75rem"}}>T : {t('true')}</CLabel>
            </Grid>
            <Grid container item xs={12} alignItems={"center"}>
                <CCheckbox checked={displayItems === false} onChange={()=> setDisplayItems(false)}></CCheckbox>
                <CLabel style={{marginLeft: "0.75rem"}}>F : {t('false')}</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CButton onClick={() => handleEditDisplay()}>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable title={t('selectedProducts')} columns={columns} data={selectedProducts}></CTable>
        </Grid>
    </Grid>
}

export default DisplayEditor;