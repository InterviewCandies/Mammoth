import React from "react"
import {Button, ButtonGroup, Container, Grid, makeStyles, Select, Theme} from "@material-ui/core";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import EditMenu from "../components/common/EditMenu";
import CategoryEditor from "../components/editors/CategoryEditor";
import TagsEditor from "../components/editors/TagsEditor";
import DescriptionEditor from "../components/editors/DescriptionEditor";
import PriceEditor from "../components/editors/PriceEditor";
import TaxEditor from "../components/editors/TaxEditor";
import QuantityEditor from "../components/editors/QuantityEditor";
import DiscountEditor from "../components/editors/DiscountEditor";
import SupplierEditor from "../components/editors/SupplierEditor";
import DisplayEditor from "../components/editors/DisplayEditor";
import DeliveryEditor from "../components/editors/DeliveryEditor";
import OptionsEditor from "../components/editors/OptionsEditor";
import {Route} from "react-router-dom";
const useStyles = makeStyles((theme: Theme) => ({
    root : {
        marginTop: "2rem"
    },
    table : {
        paddingLeft: "4rem",
        [theme.breakpoints.down('md')]: {
            padding: "1rem 0"
        }
    }
}))
function EditMode () {
    const classes = useStyles();

    return <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item md={2} lg={3} xs={12}>
                    <EditMenu></EditMenu>
                </Grid>
                <Grid item md={10} lg={9} className={classes.table} xs={12}>
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