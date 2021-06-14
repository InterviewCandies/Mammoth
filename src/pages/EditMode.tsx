import React from "react"
import {Button, ButtonGroup, Container, Grid, makeStyles, Select} from "@material-ui/core";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import EditMenu from "../components/common/EditMenu";
import CategoryEditor from "../components/CategoryEditor";
import TagsEditor from "../components/TagsEditor";
const useStyles = makeStyles(() => ({
    root : {
        marginTop: "1rem"
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
                  <TagsEditor></TagsEditor>
                </Grid>
            </Grid>
    </div>
}

export default EditMode;