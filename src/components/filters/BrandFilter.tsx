import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "styled-components";
import RootStateModel from "../../types/RootStateModel";
import categoryService from "../../services/Category";
import {Collapse, Grid} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CMultipleSelect from "../common/CMultipleSelect";
import CAccordition from "../common/CAccordition";

function BrandFilter() {
    const {t} = useTranslation();
    const [isShow, setShow] = useState<boolean>(false);
    const theme = useContext(ThemeContext);
    const [categories, setCategories] = useState<RootStateModel[]>([]);
    const [currentCategories, setCurrentCategories] = useState<RootStateModel[]>([])

    useEffect(()=> {
        async function fetchData() {
            const data = await categoryService.fetch();
            setCategories(data);
        }
        fetchData();
    }, [])


    return   categories.length ? <CAccordition title={'brand'}>
        <CMultipleSelect setValue={setCurrentCategories} options={categories}></CMultipleSelect>
    </CAccordition> : null
}

export default BrandFilter;