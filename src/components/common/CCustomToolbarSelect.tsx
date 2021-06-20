import React, {useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import {Add} from "@material-ui/icons";
import ProductModel from "../../types/ProductModel";
import {useAppDispatch} from "../../hooks";
import {selectProducts} from "../../features/products";
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
        dispatch(selectProducts(products.map((product: ProductModel) => product.id)))
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