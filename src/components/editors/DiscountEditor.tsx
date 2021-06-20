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
import {useAppDispatch, useAppSelector} from "../../hooks";
import {decreaseDiscount, increaseDiscount, updateProducts} from "../../features/products";

function DiscountEditor() {
    const [showAction, setShowAction] = useState<number>(1);
    const [unit, setUnit] = useState<string>("VND");
    const [nextDiscount, setNextDiscount] = useState<number>(0);
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const selectedProducts = useAppSelector(state => state.products.products.filter(product => state.products.selection.includes(product.id)));
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
            name: "discount",
            label: t('discount'),
        },
    ]

    const handleIncreaseDiscount = () => {
        dispatch(increaseDiscount({type: unit, value: nextDiscount}));
        setNextDiscount(0);
    }

    const handleDecreaseDiscount = () => {
        dispatch(decreaseDiscount({type: unit, value: nextDiscount}));
        setNextDiscount(0);
    }

    const handleReplaceDiscount = () => {
        dispatch(updateProducts({key: 'discount', value: nextDiscount}));
        setNextDiscount(0);
    }

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('discount')}</CHeading>
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
                        <CInput type={"number"} value={nextDiscount} onChange={e => setNextDiscount(Number(e.target.value))}></CInput>
                        <Grid item style={{margin: '0.5rem'}}>
                            <CSelect value={unit} onChange={(value) => setUnit(value)} style={{minWidth: "80px"}}>
                                <MenuItem value={"%"}>%</MenuItem>
                                <MenuItem value={"VND"}>VND</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item>
                            <CButton onClick={() => handleIncreaseDiscount()}>{t('apply')}</CButton>
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
                        <CInput type={"number"} onChange={e => setNextDiscount(Number(e.target.value))} value={nextDiscount}></CInput>
                        <Grid item style={{margin: '0.5rem'}}>
                            <CSelect value={unit} onChange={(value) => setUnit(value)} style={{minWidth: "80px"}}>
                                <MenuItem value={"%"}>%</MenuItem>
                                <MenuItem value={"VND"}>VND</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item>
                            <CButton onClick={() => handleDecreaseDiscount()}>{t('apply')}</CButton>
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
                        <CInput type={"number"} value={nextDiscount} onChange={(e => setNextDiscount(Number(e.target.value)))}></CInput>
                        <Grid item style={{margin: '0.5rem'}}>
                            <CSelect value={unit} onChange={(value) => setUnit(value)} style={{minWidth: "80px"}}>
                                <MenuItem value={"VND"}>VND</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item>
                            <CButton onClick={() => handleReplaceDiscount()}>{t('apply')}</CButton>
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

export default DiscountEditor;