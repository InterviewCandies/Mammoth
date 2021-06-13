import React, {useState, useContext} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import EditMode from "./pages/EditMode";
import SelectMode from "./pages/SelectMode";
import {Checkbox, Container, makeStyles, Select, Theme} from "@material-ui/core";
import Header from "./components/common/Header";
import AppProvider from "./providers/AppProvider";
import Layout from "./components/common/Layout";


function App() {
    return (
      <AppProvider>
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
      </AppProvider>
    );
}

export default App;
