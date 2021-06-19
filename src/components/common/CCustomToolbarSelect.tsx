import React, {useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import BlockIcon from "@material-ui/icons/Block";
import { withStyles } from "@material-ui/core/styles";
import {DisplayData, MUIDataTableToolbarSelect} from "mui-datatables";
import {Add} from "@material-ui/icons";
import ProductModel from "../../types/ProductModel";
import {useAppDispatch} from "../../hooks";
import {selectProducts} from "../../features/selection";
import {ThemeContext} from "styled-components";

const defaultToolbarSelectStyles = {
    iconButton: {
    },
    iconContainer: {
        marginRight: "24px",
    },
};

function  CCustomToolbarSelect({selectedRows, data} :  {selectedRows: any, data: ProductModel[]}) {
    const dispatch = useAppDispatch();
    const theme = useContext(ThemeContext);

    const handleSelect = () => {
        const products = selectedRows.data.map((item: {dataIndex: number}) => data[item.dataIndex]);
        dispatch(selectProducts(products))
    };

    return <div>
            <Tooltip title={"Add to selection"}>
                <IconButton onClick={handleSelect}>
                   <Add style={{color: theme.buttonText}}></Add>
                </IconButton>
            </Tooltip>
        </div>
}

export default withStyles(defaultToolbarSelectStyles, { name: "CCustomToolbarSelect" })(CCustomToolbarSelect);