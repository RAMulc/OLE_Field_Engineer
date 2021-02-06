import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SystemDesign from "./pages/SystemDesign";
import Pdf from "./pages/Pdf";
import Calculations from "./pages/Calculations";
import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";

import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import API from "./utils/API";
import UserContext from './context/userContext';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    email: undefined,
    isAdmin: false
  });

  useEffect(() => {
    checkLoggedIn();
  }, []);

  function checkLoggedIn() {
    let token = "";
    if (!localStorage.hasOwnProperty("auth-token")) {
      localStorage.setItem("auth-token", "");
    } else {
      token = localStorage.getItem("auth-token");
    }

    API.userValidToken({ headers: { "x-auth-token": token } })
      .then((res) => {
        if (res.data.success) {
          API.getUserByID(res.data.userId)
            .then((userRes) => {
              setUserData({
                token: token,
                user: userRes.data.user.name,
                isAdmin: userRes.data.user.isAdmin
              })
            })
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Router>
      <div>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          
          <Switch>
            <Route exact path={["/", "/systemdesign"]} component={SystemDesign} />
            <Route exact path="/pdf/:id" component={Pdf} />
            <Route exact path="/calculations" component={Calculations} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route component={NoMatch} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
