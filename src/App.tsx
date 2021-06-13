import React, {useState, useContext} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import EditMode from "./pages/EditMode";
import SelectMode from "./pages/SelectMode";
import "./App.css"
import ThemeProvider from "./providers/ThemeProvider";
import {Checkbox, Select} from "@material-ui/core";
import Header from "./components/common/Header";
import AppProvider from "./providers/AppProvider";
function App() {
  return (
      <AppProvider>
          <Router>
              <Header></Header>
              <Switch>
                  <Route path="/select" component={SelectMode}/>
                  <Route path="/edit" component={EditMode}/>
                  <Route path="/" component={EditMode} />
                  <Redirect to="/"/>
              </Switch>
          </Router>
      </AppProvider>
  );
}

export default App;
