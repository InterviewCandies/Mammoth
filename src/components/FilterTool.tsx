import {
    Button,
    ButtonGroup,
    Collapse,
    Grid,
    Icon,
    makeStyles,
    MenuItem,
    Switch,
    Select,
    Tooltip, Chip
} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CButton from "./common/CButton";
import * as _ from "lodash"
import React, {useContext, useEffect, useReducer, useState} from "react";
import styled, {ThemeContext} from "styled-components";
import CSwitcher from "./common/CSwitcher";
import {Filter, FilterList, InvertColors, Lens, Opacity, Search, SearchOutlined, Subject} from "@material-ui/icons";
import CBox from "./common/CBox";
import {darkTheme, lightTheme} from "../theme";
import {useTranslation} from "react-i18next";
import DataTable from "./common/CTable";
import CTable from "./common/CTable";
import {LoadingContext} from "../provider/LoadingProvider";
import CategoryFilter from "./filters/CategoryFilter";
import NameFilter from "./filters/NameFilter";
import BrandFilter from "./filters/BrandFilter";
import SupplierFilter from "./filters/SupplierFilter";
import TagFilter from "./filters/TagFilter";
import PriceFilter from "./filters/PriceFilter";
import QuantityFilter from "./filters/QuantityFilter";
import DiscountFilter from "./filters/DiscountFilter";
import ImageFilter from "./filters/ImageFilter";
import DateFilter from "./filters/DateFilter";
import OptionFilter from "./filters/OptionFilter";
import productService from "../services/Product";
import product from "../mocks/product";
import ProductModel from "../types/ProductModel";
import {useAppDispatch, useAppSelector} from "../hooks";
import {fetchProducts} from "../features/products";
import RootStateModel from "../types/RootStateModel";
import {useSnackbar} from "notistack";

const useStyles = makeStyles((theme)=>({
    root: {
        "& > *" : {
            marginBottom: theme.spacing(5)
        },
    }
}))

const filtering = (item: ProductModel, type: string, value: unknown ) =>  {
    if (type == 'productName') {
        return item['productName'].toLocaleLowerCase().includes((value as string).toLocaleString());
    }
    else if (type == 'category' || type == 'brand' || type == 'supplier') {
        const target = (value as RootStateModel[]).map(item => item.id);
        return _.includes(target, item[type]);
    }
    else if (type == 'tags') {
        const target = (value as RootStateModel[]).map(item => item.id);
        return _.intersection(target, item[type]).length != 0;
    }
    else if (type == 'price' || type == 'quantity') {
        // @ts-ignore
        return  value.min <= item[type] && item[type] <= value.max;
    }
    else if (type == 'discount' || type == 'image') {
        return Boolean(item[type]) == value;
    }
    else if (type == 'uploadedDate') {
        // @ts-ignore
        return Date.parse(value.start) <= Date.parse(item[type]) && Date.parse(item[type]) <= Date.parse(value.end);
    }
    else if (type == 'options') {
        return _.intersection(item[type], value as []).length !=0;
    }
    return false;
}

const applyFilters = (item: ProductModel, filters: Record<string, unknown>, filterType: number = 0) => {
    for(let [key, value] of Object.entries(filters)) {
        if (!filtering(item, key, value)) {
            if (filterType === 1) return false;
        }
        else if (filterType === 0) return true;
    }

    return filterType === 1;
}

function FilterTool() {
    const classes = useStyles();
    const [filterType, setFilterType] = useState<number>(0);
    const theme = useContext(ThemeContext)
    const {t} = useTranslation();
    const {turnOnLoading} = useContext(LoadingContext);
    const products = useAppSelector(state => state.products.products);
    const isChecked = useAppSelector(state => state.filter.checkbox);
    const filter = useAppSelector(state => state.filter.filter);
    const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>(products);
    const forceUpdate = useReducer(() => ({}), {})[1] as () => void;
    const {enqueueSnackbar} = useSnackbar();
    const columns = [
        {
            name: "productName",
            label: t("productName"),
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "price",
            label: t("price"),
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "discount",
            label: t("discount"),
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "quantity",
            label: t('quantity'),
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "display",
            label: t("display"),
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "image",
            label: t('image'),
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "uploadedDate",
            label: t("uploadedDate"),
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex: number) => {
                    let val = filteredProducts[dataIndex].uploadedDate;
                    return new Date(val).toLocaleString();
                }
            }
        },
    ];

    const dispatch = useAppDispatch();

    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchProducts());
        }
        fetchData();
    }, [])

    const handleFilters = () => {
        turnOnLoading(true)
        setTimeout(() => {
            const activeFilters: Record<string, unknown> = {};
            for(let [key, value] of Object.entries(filter)) {
                if (isChecked[key]) activeFilters[key] = value;
            }
            if (Object.keys(activeFilters).length == 0)
                enqueueSnackbar(t('failedByEmptyFilters'), {variant: "error"});
            else {
                const filteredProducts = products.filter(item => applyFilters(item, activeFilters, filterType));
                setFilteredProducts(filteredProducts);
            }
            turnOnLoading(false)
        }, 1200)
    }

    return <div className={classes.root}>
        <Grid container justify={"space-between"}>
               <CBox>
                   <Icon>
                       <Subject style={{color:theme.primary}}/>
                   </Icon>
                   <CHeading>{t('filters')}</CHeading>
               </CBox>
                <ButtonGroup size={"small"}>
                    <Tooltip title={t("include") as string}>
                        <CButton active={filterType === 1} onClick={() =>  setFilterType(1)} style={{padding:'0.5rem 1rem'}}><Opacity/></CButton>
                    </Tooltip>
                    <Tooltip title={t('exact') as string}>
                        <CButton active={filterType === 0} onClick={() => setFilterType(0)}  style={{padding:'0.5rem 1rem'}}><Lens/></CButton>
                    </Tooltip>
                </ButtonGroup>
        </Grid>
        <NameFilter/>
        <CategoryFilter/>
        <PriceFilter/>
        <QuantityFilter/>
        <TagFilter/>
        <BrandFilter/>
        <SupplierFilter/>
        <DiscountFilter/>
        <ImageFilter/>
        <DateFilter/>
        <OptionFilter/>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CButton style={{marginRight: "1rem", padding: "1rem 3rem"}} onClick={()=> handleFilters()}>{t('applyFilters')}</CButton>
                <CButton style={{padding: "1rem 3rem"}} onClick={forceUpdate}>{t('resetFilters')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable columns={columns} data={filteredProducts} title={t('result')} selectable={true}></CTable>
        </Grid>
    </div>
}

export default FilterTool;