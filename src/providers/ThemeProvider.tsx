import React, {ReactChildren, ReactElement, useState} from "react"
import {createMuiTheme, MuiThemeProvider, ThemeOptions} from "@material-ui/core";

function ThemeProvider({isDarkMode, children} : {isDarkMode: boolean, children : ReactElement}) {
    const theme: ThemeOptions = {
        palette: {
            type: isDarkMode ? "dark" : "light"
        }
    }
    const muiTheme = createMuiTheme(theme)

    return <MuiThemeProvider theme={muiTheme}>
        {children}
    </MuiThemeProvider>
}
export default ThemeProvider;