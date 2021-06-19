import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "styled-components";
import RootStateModel from "../../types/RootStateModel";
import CMultipleSelect from "../common/CMultipleSelect";
import CAccordition from "../common/CAccordition";
import supplierService from "../../services/Supplier";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addFilter} from "../../features/filter";
import {fetchSuppliers} from "../../features/suppliers";

function SupplierFilter() {
    const [currentSuppliers, setCurrentSuppliers] = useState<RootStateModel[]>([]);
    const suppliers = useAppSelector(state => state.suppliers.suppliers);
    const dispatch = useAppDispatch();

    useEffect(()=> {
        async function fetchData() {
            const data = await supplierService.fetch();
            dispatch(fetchSuppliers());
        }
        fetchData();
    }, [])

    useEffect(() => {
        dispatch(addFilter({key: 'supplier', value: currentSuppliers}));
    }, [currentSuppliers])

    return  suppliers.length ? <CAccordition title={'supplier'}>
        <CMultipleSelect setValue={setCurrentSuppliers} options={suppliers}></CMultipleSelect>
    </CAccordition> : null;
}

export default SupplierFilter;