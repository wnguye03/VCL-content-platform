import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "@statics/routes";
import Timeline from "@pages/Timeline";
import Home from "@pages/Home";
import Project from "@pages/Project";
import Navbar from "@components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={routes.TIMELINE} component={Timeline} />
          <Route exact path={routes.PROJECT.PATH} component={Project} />
          <Route exact path={routes.HOME} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
