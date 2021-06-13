import React from "react"
import {Button, ButtonGroup, Container, Grid, Select} from "@material-ui/core";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import EditMenu from "../components/common/EditMenu";
import CategoryEditor from "../components/CategoryEditor";

function EditMode () {
    return <div>
        <Layout>
            <Grid container>
                <Grid item md={3}>
                    <EditMenu></EditMenu>
                </Grid>
                <Grid item>
                   <CategoryEditor></CategoryEditor>
                </Grid>
            </Grid>
        </Layout>
    </div>
}

export default EditMode;