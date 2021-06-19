import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "styled-components";
import RootStateModel from "../../types/RootStateModel";
import brandService from "../../services/Brand";
import CMultipleSelect from "../common/CMultipleSelect";
import CAccordition from "../common/CAccordition";
import {useAppDispatch} from "../../hooks";
import {addFilter} from "../../features/filter";

function BrandFilter() {
    const [brands, setBrands] = useState<RootStateModel[]>([]);
    const [currentBrands, setCurrentBrands] = useState<RootStateModel[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function fetchData() {
            const data = await brandService.fetch();
            setBrands(data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        dispatch(addFilter({key: 'brand', value: currentBrands}))
    },[currentBrands])

    return  brands.length ? <CAccordition title={'brand'}>
        <CMultipleSelect setValue={setCurrentBrands} options={brands}></CMultipleSelect>
    </CAccordition> : null
}

export default BrandFilter;