import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SystemDesign from "./pages/SystemDesign";
import Pdf from "./pages/Pdf";
import Calculations from "./pages/Calculations";
import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";

import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminRoute from "./components/auth/AdminRoute";
import UserContext from './context/userContext';
import SystemDesignContext from './context/SystemDesignContext';

function App() {
  const [systemDesigns, setsystemDesigns] = useState([])
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    email: undefined,
    isAdmin: false
  });

  return (
    <Router>
      <div>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <SystemDesignContext.Provider value={{ systemDesigns, setsystemDesigns }}>
            <Switch>
              <ProtectedRoute exact path={["/", "/systemdesign"]} component={SystemDesign} />
              <ProtectedRoute exact path="/pdf/:id" component={Pdf} />
              <AdminRoute exact path="/users" component={Users} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/calculations" component={Calculations} />
              <Route component={NoMatch} />
            </Switch>
          </SystemDesignContext.Provider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
