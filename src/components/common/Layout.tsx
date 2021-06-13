import React, {ReactElement, useContext} from "react"
import Header from "./Header";
import {Checkbox, makeStyles} from "@material-ui/core";
import {AppContext, AppContextModel} from "../../providers/AppProvider";
const useStyles = makeStyles(theme => ({
    root: {
        padding: "4rem"
    }
}))

function Layout(props: {children: ReactElement}) {
    const classes = useStyles();

    return <div className={classes.root}>
        {props.children}
    </div>
}

export default Layout;