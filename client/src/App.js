import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SystemDesign from "./pages/SystemDesign";
import Pdf from "./pages/Pdf";
import Calculations from "./pages/Calculations";
import NoMatch from "./pages/NoMatch";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/systemdesign"]}>
            <SystemDesign />
          </Route>
          <Route exact path="/pdf/:id">
            <Pdf />
          </Route>
          <Route exact path="/calculations">
            <Calculations />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
