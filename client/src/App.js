import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SystemDesign from "./pages/SystemDesign";
import Pdf from "./components/Pdf";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <NoMatch /> */}
        <SystemDesign />
        <Pdf />
      </div>
    </Router>
  );
}

export default App;
