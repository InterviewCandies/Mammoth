import {Collapse, Grid, makeStyles, MenuItem} from "@material-ui/core";
import CHeading from "../common/CHeading";
import CSelect from "../common/CSelect";
import CLabel from "../common/CLabel";
import CButton from "../common/CButton";
import CCheckbox from "../common/CCheckbox";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import CTextarea from "../common/CTextarea";
import CTable from "../common/CTable";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSnackbar} from "notistack";
import useUpdateProducts from "../../hooks/useUpdateProducts";

const useStyles = makeStyles(() => ({
    right: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))



function DeliveryEditor() {
    const classes = useStyles();
    const [show, setShow] = useState<boolean[]>([]);
    const [shippingMethod, setShippingMethod] = useState<string>("01");
    const [shippingScope, setShippingScope] = useState<string>("A");
    const [shippingFeeType, setShippingFeeType] = useState<string>("T");
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [shippingInfo, setShippingInfo] = useState<string>('');
    const {enqueueSnackbar} = useSnackbar();
    const {updateProducts} = useUpdateProducts();
    const columns = [
        {
            name: "productName",
            label: t('productName'),
        },
        {
            label: t('shippingInfo'),
            name: "shippingInfo",
        },
        {
            label: t('shippingMethod'),
            name: "shippingMethod",
        },
        {
            label: t('shippingScope'),
            name: "shippingScope",
        },
        {
            label: t('shippingFeeType'),
            name: "shippingFeeType",
        },
    ]
    const selectedProducts = useAppSelector(state => state.products.products.filter(product => state.products.selection.includes(product.id)));

    const handleChange = (index: number) => {
        setShow(prevState => {
            const newState = {...prevState};
            newState[index] = !newState[index];
            return newState;
        })
    }

    const handleEditShippingInfo = () => {
        if (shippingInfo) {
            updateProducts(selectedProducts, 'shippingInfo', () => shippingInfo);
        }
        else  enqueueSnackbar(t('updated'), {variant: "success"});
    }

    const handleEditShippingMethod = () => {
        updateProducts(selectedProducts, 'shippingMethod', () => shippingMethod);
    }

    const handleEditShippingScope = () => {
        updateProducts(selectedProducts, 'shippingScope', () => shippingScope);
    }

    const handleEditShippingFeeType = () => {
        updateProducts(selectedProducts, 'shippingFeeType', () => shippingFeeType);
    }

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('delivery')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid container item xs={12} justify={"space-between"} alignItems={"center"}>
                <CLabel>{t('shippingInfo')}</CLabel>
                <CCheckbox checked={show[0]} onChange={() => handleChange(0)} ></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={show[0]}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                           <CTextarea value={shippingInfo} onChange={e => setShippingInfo(e.target.value)}></CTextarea>
                        </Grid>
                        <Grid item xs={12} className={classes.right} >
                            <CButton onClick={() => handleEditShippingInfo()}>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid container item xs={12} justify={"space-between"} alignItems={"center"}>
                <CLabel>{t('shippingMethod')}</CLabel>
                <CCheckbox checked={show[1]} onChange={() => handleChange(1)} ></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={show[1]}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CSelect value={shippingMethod} onChange={(value)=> setShippingMethod(value)} style={{width:"100%"}}>
                                <MenuItem value={"01"}>01: Regular delivery</MenuItem>
                                <MenuItem value={"02"}>02: Fast service (document only)</MenuItem>
                                <MenuItem value={"03"}>03: Regular mail (document only)</MenuItem>
                                <MenuItem value={"04"}>04: Delivery in person</MenuItem>
                                <MenuItem value={"05"}>05: Delivery in person with bike or truck (within several hours)</MenuItem>
                                <MenuItem value={"06"}>06: Other</MenuItem>
                                <MenuItem value={"07"}>07: Cargo delivery</MenuItem>
                                <MenuItem value={"08"}>08: Pickup at a store</MenuItem>
                                <MenuItem value={"09"}>09: Delivery does not necessary</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item xs={12} className={classes.right} >
                            <CButton onClick={() => handleEditShippingMethod()}>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} container justify={"space-between"}>
                <CLabel>{t('shippingScope')}</CLabel>
                <CCheckbox checked={show[2]} onChange={()=> handleChange(2)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={show[2]}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CSelect value={shippingScope} onChange={(value) => setShippingScope(value)} style={{width:"100%"}}>
                                <MenuItem value={"A"}>A: Domestic only</MenuItem>
                                <MenuItem value={"B"}>B: Export only</MenuItem>
                                <MenuItem value={"C"}>C: Can deliver both inland and overseas</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item xs={12} className={classes.right} >
                            <CButton onClick={() => handleEditShippingScope()}>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} container justify={"space-between"}>
                <CLabel>{t('shippingFeeType')}</CLabel>
                <CCheckbox checked={show[3]} onChange={()=>handleChange(3)}></CCheckbox>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={show[3]}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CSelect value={shippingFeeType} onChange={(value) => setShippingFeeType(value)} style={{width:"100%"}}>
                                <MenuItem value={"T"}>T: Free shipping</MenuItem>
                                <MenuItem value={"R"}>R: Fixed rate</MenuItem>
                                <MenuItem value={"M"}>M: Charge according to purchase amount</MenuItem>
                                <MenuItem value={"D"}>D: Use different shipping charges per different purchase amount</MenuItem>
                                <MenuItem value={"W"}>W: Use different shipping charges by product weight</MenuItem>
                                <MenuItem value={"C"}>C: Use different shipping charges by quantity</MenuItem>
                                <MenuItem value={"N"}>N: Use different shipping charges per different quantity</MenuItem>
                            </CSelect>
                        </Grid>
                        <Grid item xs={12} className={classes.right} >
                            <CButton onClick={() => handleEditShippingFeeType()}>{t('apply')}</CButton>
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
export default DeliveryEditor;