import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SystemDesign from "./pages/SystemDesign";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <NoMatch /> */}
        <SystemDesign />
      </div>
    </Router>
  );
}

export default App;
