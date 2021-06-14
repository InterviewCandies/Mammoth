import React from "react"
import {Button, ButtonGroup, Container, Grid, makeStyles, Select} from "@material-ui/core";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import EditMenu from "../components/common/EditMenu";
import CategoryEditor from "../components/CategoryEditor";
import TagsEditor from "../components/TagsEditor";
import DescriptionEditor from "../components/DescriptionEditor";
import PriceEditor from "../components/PriceEditor";
import TaxEditor from "../components/TaxEditor";
import QuantityEditor from "../components/QuantityEditor";
import DiscountEditor from "../components/DiscountEditor";
import SupplierEditor from "../components/SupplierEditor";
import DisplayEditor from "../components/DisplayEditor";
import DeliveryEditor from "../components/DeliveryEditor";
import OptionsEditor from "../components/OptionsEditor";
import {Route} from "react-router-dom";
const useStyles = makeStyles(() => ({
    root : {
        marginTop: "2rem"
    }
}))
function EditMode () {
    const classes = useStyles();

    return <div className={classes.root}>
            <Grid container>
                <Grid item md={3}>
                    <EditMenu></EditMenu>
                </Grid>
                <Grid item md={9} style={{paddingLeft: "4rem"}}>
                    <Route path={'/edit/category'} component={CategoryEditor}></Route>
                    <Route path={'/edit/tags'} component={TagsEditor}></Route>
                    <Route path={'/edit/description'} component={DescriptionEditor}></Route>
                    <Route path={'/edit/price'} component={PriceEditor}></Route>
                    <Route path={'/edit/tax'} component={TaxEditor}></Route>
                    <Route path={'/edit/quantity'} component={QuantityEditor}></Route>
                    <Route path={'/edit/discount'} component={DiscountEditor}></Route>
                    <Route path={'/edit/display'} component={DisplayEditor}></Route>
                    <Route path={'/edit/supplier'} component={SupplierEditor}></Route>
                    <Route path={'/edit/delivery'} component={DeliveryEditor}></Route>
                    <Route path={'/edit/options'} component={OptionsEditor}></Route>
                </Grid>
            </Grid>
    </div>
}

export default EditMode;