import {Collapse, Grid} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CInput from "../common/CInput";
import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "styled-components";
import CAccordition from "../common/CAccordition";
import {useAppDispatch} from "../../hooks";
import {addFilter} from "../../features/filter";

function NameFilter() {
    const dispatch = useAppDispatch();
    const [productName, setProductName] = useState<string>('');

    useEffect(() => {
        dispatch(addFilter({key: 'productName', value: productName}));
    }, [productName])

    return  <CAccordition title={'productName'}>
        <CInput style={{width: "100%"}} value={productName} onChange={e => setProductName(e.target.value)}></CInput>
    </CAccordition>
}

export default NameFilter;