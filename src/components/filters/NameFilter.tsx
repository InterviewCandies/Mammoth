import {Collapse, Grid} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CInput from "../common/CInput";
import {useTranslation} from "react-i18next";
import {useContext, useState} from "react";
import {ThemeContext} from "styled-components";
import CAccordition from "../common/CAccordition";

function NameFilter() {
    return  <CAccordition title={'productName'}>
        <CInput style={{width: "100%"}}></CInput>
    </CAccordition>
}

export default NameFilter;