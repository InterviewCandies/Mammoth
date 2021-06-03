import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import EditMode from "./pages/EditMode";
import "./App.css"
function App() {
  return (
          <Router>
            <Switch>
                <Route path="/edit" component={EditMode}/>
                <Route path="/" component={EditMode} />
                <Redirect to="/"/>
            </Switch>
        </Router>
  );
}

export default App;
