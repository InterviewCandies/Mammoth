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
import {useSnackbar} from "notistack";
import useUpdateProducts from "../../hooks/useUpdateProducts";

function QuantityEditor() {
    const [showAction, setShowAction] = useState<number>(1);
    const [showPerOrder, setShowPerOrder] = useState<boolean[]>([]);
    const [minimumQuantity, setMinimumQuantity] = useState<number>(0);
    const [maximumQuantity, setMaxQuantity] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const {t} = useTranslation();
    const {enqueueSnackbar} = useSnackbar();
    const selectedProducts = useAppSelector(state => state.products.products.filter(product => state.products.selection.includes(product.id)));
    const dispatch = useAppDispatch();
    const {updateProducts} = useUpdateProducts();
    const columns = [
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

    const handleEditMinimumQuantity = () => {
        updateProducts(selectedProducts, 'minimumQuantity', () => minimumQuantity);
    }

    const handleEditMaximumQuantity = () => {
        updateProducts(selectedProducts, 'maximumQuantity', () => maximumQuantity);
    }

    const handleIncreaseQuantity = () => {
        updateProducts(selectedProducts, 'quantity', value => Number(value) + quantity);
        setQuantity(0);
    }

    const handleDecreaseQuantity = () => {
        updateProducts(selectedProducts, 'quantity', value => Math.max(0, Number(value) - quantity));
        setQuantity(0);
    }

    const handleReplaceQuantity = () => {
        updateProducts(selectedProducts, 'quantity', () => quantity);
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
                        <CInput type={"number"} value={quantity} onChange={e => setQuantity(Number(e.target.value))}></CInput>
                        <CLabel style={{margin: '0 1rem 0 0.5rem'}}>{t('items')}</CLabel>
                        <Grid item>
                            <CButton onClick={() => handleIncreaseQuantity()}>{t('apply')}</CButton>
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
                        <CInput type={"number"} value={quantity} onChange={e => setQuantity(Number(e.target.value))}></CInput>
                        <CLabel style={{margin: '0 1rem 0 0.5rem'}}>{t('items')}</CLabel>
                        <Grid item>
                            <CButton onClick={() => handleDecreaseQuantity()}>{t('apply')}</CButton>
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
                        <CInput type={"number"} value={quantity} onChange={e => setQuantity(Number(e.target.value))}></CInput>
                        <CLabel style={{margin: '0 1rem 0 0.5rem'}}>{t('items')}</CLabel>
                        <Grid item>
                            <CButton onClick={() => handleReplaceQuantity()}>{t('apply')}</CButton>
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
                        <CInput type={"number"} value={minimumQuantity} onChange={e => setMinimumQuantity(Number(e.target.value))}></CInput>
                        <CLabel style={{margin: '0 1rem 0 0.5rem'}}>{t('items')}</CLabel>
                        <Grid item>
                            <CButton onClick={() => handleEditMinimumQuantity()}>{t('apply')}</CButton>
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
                        <CInput type={"number"} value={maximumQuantity} onChange={e => setMaxQuantity(Number(e.target.value))}></CInput>
                        <CLabel style={{margin: '0 1rem 0 0.5rem'}}>{t('items')}</CLabel>
                        <Grid item>
                            <CButton onClick={() => handleEditMaximumQuantity()}>{t('apply')}</CButton>
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