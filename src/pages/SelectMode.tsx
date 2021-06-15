import Layout from "../components/common/Layout";
import {useContext, useEffect, useState} from "react";
import CButton from "../components/common/CButton";
import CInput from "../components/common/CInput";
import CSelect from "../components/common/CSelect";
import {ButtonGroup, Collapse, FormControl, Grid, makeStyles, MenuItem, Select, Switch} from "@material-ui/core";
import useDarkMode from "../hooks/useDarkMode";
import CHeading from "../components/common/CHeading";
import styled from "styled-components";
import CCheckbox from "../components/common/CCheckbox";
import CLabel from "../components/common/CLabel";
import Collection from "../components/Collection";
import FilterTool from "../components/FilterTool";

const useStyles = makeStyles(()=>({
     root: {
         marginTop: "4rem"
     },
}))

function SelectMode() {
    const classes = useStyles();
    return <Grid container className={classes.root} spacing={5}>
        <Grid item xs={4}>
           <Collection></Collection>
        </Grid>
        <Grid item xs={8} style={{zIndex: 10}}>
            <FilterTool></FilterTool>
        </Grid>
    </Grid>
}

export default SelectMode