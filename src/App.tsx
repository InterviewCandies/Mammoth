import React, {useState, useContext} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import EditMode from "./pages/EditMode";
import SelectMode from "./pages/SelectMode";
import Layout from "./components/common/Layout";
import {ThemeProvider} from "styled-components";
import ThemeModel from "./types/ThemeModel";
import {darkTheme, lightTheme} from "./theme";
import {GlobalStyles} from "./global";
import useDarkMode from "./hooks/useDarkMode";
import {Checkbox} from "@material-ui/core";

function App() {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode: ThemeModel = theme === 'light' ? lightTheme : darkTheme;

    return (
    <ThemeProvider theme={themeMode}>
        <>
            <GlobalStyles/>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/select" component={SelectMode}/>
                        <Route path="/edit" component={EditMode}/>
                        <Route path="/" component={EditMode} />
                        <Redirect to="/"/>
                    </Switch>
                </Layout>
            </Router>
        </>
    </ThemeProvider>
    );
}

export default App;
