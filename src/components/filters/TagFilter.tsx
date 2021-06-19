import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "styled-components";
import RootStateModel from "../../types/RootStateModel";
import tagsService from "../../services/Tag";
import {Collapse, Grid} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CMultipleSelect from "../common/CMultipleSelect";
import CAccordition from "../common/CAccordition";
import {addFilter} from "../../features/filter";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchTags} from "../../features/tags";

function TagFilter() {
    const tags = useAppSelector(state => state.tags.tags);
    const [currentTags, setCurrentTags] = useState<RootStateModel[]>([]);
    const dispatch = useAppDispatch();

    useEffect(()=> {
        async function fetchData() {
           await dispatch(fetchTags());
        }
        fetchData();
    }, [])

    useEffect(() => {
        dispatch(addFilter({key: 'tags', value: currentTags}));
    }, [currentTags])

    return  tags.length ? <CAccordition title={'tags'}>
        <CMultipleSelect setValue={setCurrentTags} options={tags}></CMultipleSelect>
    </CAccordition> : null
}

export default TagFilter;