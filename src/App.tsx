import React, {useState, useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import EditMode from "./pages/EditMode";
import SelectMode from "./pages/SelectMode";
import Layout from "./components/common/Layout";
import {ThemeContext, ThemeProvider} from "styled-components";
import ThemeModel, {ThemeType} from "./types/ThemeModel";
import {darkTheme, lightTheme} from "./theme";
import {GlobalStyles} from "./global";
import useDarkMode from "./hooks/useDarkMode";
import ModalProvider from "mui-modal-provider";
import LoadingProvider from "./provider/LoadingProvider";
import {Provider} from "react-redux";
import {store} from "./store"
import {SnackbarProvider} from "notistack"
import {makeStyles, Theme} from "@material-ui/core";
import Page404 from "./pages/Page404";
import {ErrorBoundary} from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage";

interface Props {
    theme: ThemeModel
}

const useStyles = makeStyles<Theme, Props>(() => ({
    success: {
        backgroundColor: props => props.theme.input,
        color: props => props.theme.text,
        '& svg': {
            color: props => props.theme.success,
        }
    },
    error: {
        backgroundColor: props => props.theme.input,
        color: props => props.theme.text,
        '& svg': {
            color: props => props.theme.error,
        }
    }
}));

function Main({theme, toggleTheme}: {theme: ThemeType, toggleTheme: () => void}) {
    return  <Layout theme={theme} toggleTheme={toggleTheme}>
        <Switch>
            <Route path={"/select"} component={SelectMode}></Route>
            <Route path={"/edit"} component={EditMode}></Route>
            <Route path={"/"} component={SelectMode}></Route>
            <Redirect to={"/404"}></Redirect>
        </Switch>
    </Layout>
}

function App() {
    const [theme, toggleTheme] = useDarkMode();
    const mode = theme == 'light' ? lightTheme : darkTheme;
    const classes = useStyles({theme: mode});

    return (
        <ThemeProvider theme={mode}>
            <SnackbarProvider maxSnack={3} classes={{variantSuccess: classes.success, variantError: classes.error}}>
               <ErrorBoundary FallbackComponent={ErrorPage}>
                   <ModalProvider>
                    <Provider store={store}>
                        <LoadingProvider>
                            <>
                                <GlobalStyles/>
                                <Router>
                                    <Switch>
                                        <Route path={"/404"} component={Page404}></Route>
                                        <Route render={(props) => <Main theme={theme} toggleTheme={toggleTheme} {...props} />}/>
                                    </Switch>
                                </Router>
                            </>
                        </LoadingProvider>
                    </Provider>
                </ModalProvider>
               </ErrorBoundary>
            </SnackbarProvider>

        </ThemeProvider>
    );
}

export default App;
