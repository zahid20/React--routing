import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//layouts
import LoginLayout from "./containers/layouts/Login";
import DashboardLayout from "./containers/layouts/Dashboard";

// views
import Home from "./containers/views/Main/Home/Home";
import About from "./containers/views/Main/About/About";
import Login from "./containers/views/Main/Login/Login";
import NoMatch from "./containers/views/Main/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <LoginLayout path="/login" component={Login} />

        <DashboardLayout path="/home" component={Home} />
        <DashboardLayout path="/about" component={About} />

        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;