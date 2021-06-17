import React, {useState, useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import EditMode from "./pages/EditMode";
import SelectMode from "./pages/SelectMode";
import Layout from "./components/common/Layout";
import {ThemeContext, ThemeProvider} from "styled-components";
import ThemeModel from "./types/ThemeModel";
import {darkTheme, lightTheme} from "./theme";
import {GlobalStyles} from "./global";
import useDarkMode from "./hooks/useDarkMode";
import {Checkbox} from "@material-ui/core";
import LoadingProvider from "./provider/LoadingProvider";

function App() {
    const [theme, toggleTheme] = useDarkMode();
    const mode = theme == 'light' ? lightTheme : darkTheme;

    return (
    <ThemeProvider theme={mode}>
        <LoadingProvider>
        <>
            <GlobalStyles/>
            <Router>
                    <Switch>
                        <Layout theme={theme} toggleTheme={toggleTheme}>
                            <>
                              <Route path={"/select"} component={SelectMode}></Route>
                              <Route path={"/edit"} component={EditMode}></Route>
                              <Redirect to={"/select"}></Redirect>
                            </>
                        </Layout>

                    </Switch>
            </Router>
        </>
        </LoadingProvider>
    </ThemeProvider>
    );
}

export default App;
