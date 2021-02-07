import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from "../../context/userContext";
import API from "../../utils/API";

function AdminCheck({ component: Component, ...rest }) {
    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        checkAdmin();
    }, []);

    function checkAdmin() {
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
                        .then(() => {
                            console.log("loggedin");
                            return userData.isAdmin;
                        })
                }
            })
            .catch(err => {
                console.log(err);
                console.log("not loggedin");
                return false;
            });

    };

    return (
        <Route
            {...rest}
            render={
                props =>
                    userData.isAdmin ?
                        (<Component {...props} />) :
                        (<Redirect to="/" />)
            }
        />
    );
}

export default AdminCheck;