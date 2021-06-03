import React, {ReactChildren, ReactElement, useState} from "react"
import {createMuiTheme, MuiThemeProvider, ThemeOptions} from "@material-ui/core";

function ThemeProvider({children} : {children : ReactElement}) {
    const [theme, setTheme] = useState<ThemeOptions>({
        palette: {
            type: "dark"
        }
    })
    const muiTheme = createMuiTheme(theme)

    return <MuiThemeProvider theme={muiTheme}>
        {children}
    </MuiThemeProvider>
}

export default ThemeProvider;