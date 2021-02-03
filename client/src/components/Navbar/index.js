import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "../Auth";
import "./style.css";

function Navbar() {
    const [activePage, setActivePage] = useState("/systemdesign");

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

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
                        <Link
                            to="/signin"
                            onClick={() => setActivePage("/signin")}
                            className="nav-link"
                        >

                            SignIn
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
