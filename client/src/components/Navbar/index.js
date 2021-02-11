import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SignInOptions from "../auth/SignInOptions";
import UserContext from '../../context/userContext';

import "./style.css";

function Navbar() {
    const [activePage, setActivePage] = useState("/systemdesign");
    const [isAdmin, setIsAdmin] = useState(false);
    const { userData } = useContext(UserContext);

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

    useEffect(() => {
        setIsAdmin(userData.isAdmin);
    }, [userData.isAdmin]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand mr-auto" to="/"
                onClick={() => setActivePage("/")}>
                OLE - Online Field Engineer
            </Link>
            <div>
                <ul className="navbar-nav ml-auto">
                    <li className={
                        activePage === "/" || activePage === "/systemdesign"
                            ? "nav-item active"
                            : "nav-item"
                    }>
                        <Link
                            to="/"
                            onClick={() => setActivePage("/")}
                            className="nav-link"
                        >
                            System Design
                        </Link>
                    </li>
                    <li className={activePage === "/calculations"
                        ? "nav-item active"
                        : "nav-item"}>
                        <Link
                            to="/calculations"
                            onClick={() => setActivePage("/calculations")}
                            className="nav-link"
                        >
                            Calculations
                        </Link>
                    </li>
                    <li className={activePage === "/signin"
                        ? "nav-item active"
                        : "nav-item"}>
                        <SignInOptions onClick={() => setActivePage("/signin")}/>
                    </li>
                    {isAdmin && (
                        <li className={activePage === "/users"
                            ? "nav-item active"
                            : "nav-item"}>
                            <Link
                                to="/users"
                                onClick={() => setActivePage("/users")}
                                className="nav-link"
                            >
                                Users
                        </Link>
                        </li>
                    )}

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
