import {useState} from "react";
import {Collapse, Grid, MenuItem} from "@material-ui/core";
import CHeading from "../common/CHeading";
import CLabel from "../common/CLabel";
import CCheckbox from "../common/CCheckbox";
import CInput from "../common/CInput";
import CSelect from "../common/CSelect";
import CButton from "../common/CButton";
import {useTranslation} from "react-i18next";
import CTable from "../common/CTable";
import {useAppSelector} from "../../hooks";

function QuantityEditor() {
    const [showAction, setShowAction] = useState<number>(1);
    const [showPerOrder, setShowPerOrder] = useState<boolean[]>([]);
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
            name: "quantity",
            label: t('quantity'),
        },
        {
            name: "minimumQuantity",
            label: t('minimumQuantity'),
        },
        {
            name: "maximumQuantity",
            label: t('maximumQuantity'),
        },
    ]

    const handleChange = (index: number) => {
        setShowPerOrder(prevState => {
            const newState = {...prevState};
            newState[index] = !newState[index];
            return newState;
        })
    }

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('quantity')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={3}>
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
                        <CLabel style={{margin: '0 1rem 0 0.5rem'}}>{t('items')}</CLabel>
                        <Grid item>
                            <CButton>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
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
                        <CLabel style={{margin: '0 1rem 0 0.5rem'}}>{t('items')}</CLabel>
                        <Grid item>
                            <CButton>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
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
                        <CLabel style={{margin: '0 1rem 0 0.5rem'}}>{t('items')}</CLabel>
                        <Grid item>
                            <CButton>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>{t('minimumQuantity')}</CLabel>
                    <CCheckbox checked={showPerOrder[0]}  onChange={() => handleChange(0)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showPerOrder[0]}>
                    <Grid container item xs={12} alignItems={"center"}>
                        <CInput type={"number"}></CInput>
                        <CLabel style={{margin: '0 1rem 0 0.5rem'}}>{t('items')}</CLabel>
                        <Grid item>
                            <CButton>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={12}>
                <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                    <CLabel>{t('maximumQuantity')}</CLabel>
                    <CCheckbox checked={showPerOrder[1]}  onChange={() => handleChange(1)}></CCheckbox>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={showPerOrder[1]}>
                    <Grid container item xs={12} alignItems={"center"}>
                        <CInput type={"number"}></CInput>
                        <CLabel style={{margin: '0 1rem 0 0.5rem'}}>{t('items')}</CLabel>
                        <Grid item>
                            <CButton>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable title={t('selectedProducts')} columns={columns} data={selectedProducts}></CTable>
        </Grid>

    </Grid>
}

export default QuantityEditor;