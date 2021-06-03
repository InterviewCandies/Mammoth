import React, {ReactElement} from "react"
import Header from "./Header";
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    root: {
        padding: "4rem"
    }
}))

function Layout(props: {children: ReactElement}) {
    const classes = useStyles();

    return <div className={classes.root}>
        <Header></Header>
        {props.children}
    </div>
}

export default Layout;