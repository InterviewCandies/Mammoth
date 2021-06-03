import React from "react"
import {Button, ButtonGroup, Container, Grid, Select} from "@material-ui/core";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import EditMenu from "../components/common/EditMenu";

function EditMode () {
    return <div>
        <Layout>
            <EditMenu></EditMenu>
        </Layout>
    </div>
}

export default EditMode;