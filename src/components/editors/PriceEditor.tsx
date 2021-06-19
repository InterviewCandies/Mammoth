import {Collapse, Grid, MenuItem} from "@material-ui/core";
import CHeading from "../common/CHeading";
import CSelect from "../common/CSelect";
import CButton from "../common/CButton";
import {useState} from "react";
import CCheckbox from "../common/CCheckbox";
import CLabel from "../common/CLabel";
import CInput from "../common/CInput";
import {useTranslation} from "react-i18next";
import CTable from "../common/CTable";
import {useAppSelector} from "../../hooks";

function PriceEditor() {
    const [showAction, setShowAction] = useState<number>(1);
    const [unit, setUnit] = useState<string>('VND');
    const {t} = useTranslation();
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
            name: "price",
            label: t('price'),
        },
    ]

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('price')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>{t('increasedBy')}</CLabel>
                    <CCheckbox checked={showAction === 1} disabled={showAction !== 1 && showAction !== 0} onChange={() => setShowAction(show => show == 1 ? 0 : 1)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showAction === 1}>
                    <Grid container item xs={12} alignItems={"center"}>
                        <CInput type={"number"}></CInput>
                        <Grid item style={{margin: '0.5rem'}}>
                            <CSelect onChange={(value) => setUnit(value)} value={unit} style={{minWidth: '80px'}}>
                                <MenuItem value={"%"}>%</MenuItem>
                                <MenuItem value={"VND"}>VND</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item>
                            <CButton>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>{t('decreasedBy')}</CLabel>
                    <CCheckbox checked={showAction === 2} disabled={showAction !== 2 && showAction !== 0} onChange={() => setShowAction(show => show == 2 ? 0 : 2)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showAction === 2}>
                    <Grid container item xs={12} alignItems={"center"}>
                        <CInput type={"number"}></CInput>
                        <Grid item style={{margin: '0.5rem'}}>
                            <CSelect onChange={(value) => setUnit(value)} value={unit} style={{minWidth: '80px'}}>
                                <MenuItem value={"%"}>%</MenuItem>
                                <MenuItem value={"VND"}>VND</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item>
                            <CButton>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>{t('replacedBy')}</CLabel>
                    <CCheckbox checked={showAction === 3} disabled={showAction !== 3 && showAction !== 0} onChange={() => setShowAction(show => show == 3 ? 0 : 3)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showAction === 3}>
                    <Grid container item xs={12} alignItems={"center"}>
                        <CInput type={"number"}></CInput>
                        <Grid item style={{margin: '0.5rem'}}>
                            <CSelect onChange={(value) => setUnit(value)} value={unit} style={{minWidth: '80px'}}>
                                <MenuItem value={'%'}>%</MenuItem>
                                <MenuItem value={'VND'}>VND</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item>
                            <CButton>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
            <Grid item xs={12}>
                <CTable title={t('selectedProducts')} columns={columns} data={selectedProducts}></CTable>
            </Grid>
        </Grid>
    </Grid>
}

export default PriceEditor;