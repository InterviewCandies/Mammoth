import {Button, ButtonGroup, Collapse, Grid, Icon, makeStyles, MenuItem, Switch, Select} from "@material-ui/core";
import CHeading from "./common/CHeading";
import CButton from "./common/CButton";
import CCheckbox from "./common/CCheckbox";
import CInput from "./common/CInput";
import CSelect from "./common/CSelect";
import CLabel from "./common/CLabel";
import useDarkMode from "../hooks/useDarkMode";
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

const useStyles = makeStyles((theme)=>({
    root: {
        "& > *" : {
            marginBottom: theme.spacing(5)
        },
    }
}))


const columns = [
    {
        name: "name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "company",
        label: "Company",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "city",
        label: "City",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "state",
        label: "State",
        options: {
            filter: true,
            sort: false,
        }
    },
];

const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];


function FilterTool() {
    const classes = useStyles();
    const [filterType, setFilterType] = useState<number>(0);
    const theme = useContext(ThemeContext)
    const {t} = useTranslation();
    const {turnOnLoading} = useContext(LoadingContext);

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
                <CButton style={{marginRight: "1rem", padding: "1rem 3rem"}} onClick={()=> turnOnLoading(true)}>{t('applyFilters')}</CButton>
                <CButton style={{padding: "1rem 3rem"}}>{t('resetFilters')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable columns={columns} data={data} title={"Result"}></CTable>
        </Grid>
    </div>
}

export default FilterTool;