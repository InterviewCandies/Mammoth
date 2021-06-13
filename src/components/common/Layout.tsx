import React, {ReactElement, useContext} from "react"
import Header from "./Header";
import {Checkbox, makeStyles, Theme} from "@material-ui/core";
import {AppContext, AppContextModel} from "../../providers/AppProvider";
import THEME from "../../constants/colors";

type Props = {
    theme: 'light' | 'dark'
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
    root: {
        padding: '4rem',
        width: '100vw',
        height: '100vh',
        boxSizing: "border-box",
        backgroundColor: props => THEME[props.theme].backgroundColor,
        fontFamily: "'Roboto', sans-serif;"
    }
}))

function Layout(props: {children: ReactElement}) {
    const {theme} = useContext<AppContextModel>(AppContext)
    const classes = useStyles({theme});

    return <div className={classes.root}>
        <Header></Header>
        {props.children}
    </div>
}

export default Layout;