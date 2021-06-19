import {Button, Collapse, Grid} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CInput from "../common/CInput";
import CMultipleSelect from "../common/CMultipleSelect";
import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "styled-components";
import RootStateModel from "../../types/RootStateModel";
import categoryService from "../../services/Category";
import CAccordition from "../common/CAccordition";
import useDialog from "../../hooks/useDialog";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addFilter} from "../../features/filter";
import {fetchCategories} from "../../features/categories";


function CategoryFilter() {
    const categories = useAppSelector(state => state.categories.categories);
    const [currentCategories, setCurrentCategories] = useState<RootStateModel[]>([]);
    const [openDialog, closeDialog, CDialog] = useDialog();
    const [name, setName] = useState<string>("")
    const dispatch = useAppDispatch();

    const onAddCategory = async(name : string) => {
        await categoryService.create({id: name, name: name});
        closeDialog();
    }

    useEffect(()=> {
        async function fetchData() {
           await dispatch(fetchCategories());
        }
        fetchData();
    }, [])

    useEffect(() => {
        dispatch(addFilter({key: 'category', value: currentCategories}));
    }, [currentCategories])

    return  categories.length ?
        <>
            <CAccordition title={'category'}>
                <CMultipleSelect setValue={setCurrentCategories} options={categories} allowAdd onAdd={openDialog}></CMultipleSelect>
            </CAccordition>
            <CDialog>
                <h1>Hello</h1>
                <CInput value={name} onChange={(e) => {
                    e.stopPropagation();
                    setName(e.target.value)
                }}></CInput>
                <Button onClick={() => onAddCategory(name)}>Close</Button>
            </CDialog>
        </>: null
}

export default CategoryFilter;