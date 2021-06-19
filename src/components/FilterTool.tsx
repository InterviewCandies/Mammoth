import {Button, ButtonGroup, Collapse, Grid, Icon, makeStyles, MenuItem, Switch, Select} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CButton from "./common/CButton";
import * as _ from "lodash"
import {useContext, useEffect, useState} from "react";
import styled, {ThemeContext} from "styled-components";
import CSwitcher from "./common/CSwitcher";
import {Filter, FilterList, Search, SearchOutlined, Subject} from "@material-ui/icons";
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

const useStyles = makeStyles((theme)=>({
    root: {
        "& > *" : {
            marginBottom: theme.spacing(5)
        },
    }
}))


const columns = [
    {
        name: "productName",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "price",
        label: "Price",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "discount",
        label: "Discount",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "quantity",
        label: "Quantity",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "category",
        label: "Category",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "display",
        label: "Display",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "image",
        label: "Image",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "uploadedDate",
        label: "Uploaded Date",
        options: {
            filter: false,
            sort: true,
        }
    },
];


const filtering = (item: ProductModel, type: string, value: unknown ) =>  {

    if (type == 'category' || type == 'brand' || type == 'supplier') {
        const target = (value as ProductModel[]).map(item => item.id);
        return _.includes(target, item[type]);
    }
    else if (type == 'tags') {
        const target = (value as ProductModel[]).map(item => item.id);
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

const applyFilters = (item: ProductModel, filters: Record<string, unknown>) => {
    for(let [key, value] of Object.entries(filters)) {
        if (!filtering(item, key, value)) return false;
    }
    return true;
}

function FilterTool() {
    const classes = useStyles();
    const [filterType, setFilterType] = useState<number>(0);
    const theme = useContext(ThemeContext)
    const {t} = useTranslation();
    const {turnOnLoading} = useContext(LoadingContext);
    const [products, setProducts] = useState<ProductModel[]>([]);
    const isChecked = useAppSelector(state => state.filter.checkbox);
    const filter = useAppSelector(state => state.filter.filter);
    const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>(products)

    useEffect(() => {
        const data = productService.fetch();
        setProducts(data);
    }, [])


    const handleFilters = () => {
        const activeFilters: Record<string, unknown> = {};
        for(let [key, value] of Object.entries(filter)) {
            if (isChecked[key]) activeFilters[key] = value;
        }
        const filteredProducts = products.filter(item => applyFilters(item, activeFilters));
        setFilteredProducts(filteredProducts);
    }

    return <div className={classes.root}>
        <Grid container justify={"space-between"}>
               <CBox>
                   <Icon>
                       <Subject style={{color:theme.primary}}/>
                   </Icon>
                   <CHeading>{t('filters')}</CHeading>
               </CBox>
                <ButtonGroup>
                    <CButton active={filterType === 0} onClick={() => setFilterType(0)}>{t('exact')}</CButton>
                    <CButton active={filterType === 1} onClick={() =>  setFilterType(1)}>{t('include')}</CButton>
                </ButtonGroup>
        </Grid>
        <NameFilter/>
        <CategoryFilter/>
        <BrandFilter/>
        <SupplierFilter/>
        <TagFilter/>
        <PriceFilter/>
        <QuantityFilter/>
        <DiscountFilter/>
        <ImageFilter/>
        <DateFilter/>
        <OptionFilter/>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CButton style={{marginRight: "1rem", padding: "1rem 3rem"}} onClick={()=> handleFilters()}>{t('applyFilters')}</CButton>
                <CButton style={{padding: "1rem 3rem"}}>{t('resetFilters')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable columns={columns} data={filteredProducts} title={"Result"}></CTable>
        </Grid>
    </div>
}

export default FilterTool;