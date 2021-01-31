import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {

    const [activePage, setActivePage] = useState("/oleCompanion");

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand mr-auto" to="/oleCompanion" onClick={() => setActivePage("/oleCompanion")}>
                OLE - Field Engineer
            </Link>
            <div>
                <ul className="navbar-nav ml-auto">
                    <li className={
                        activePage === "/oleCompanion" || activePage === "/oleCompanion/systemDesign"
                            ? "nav-item active"
                            : "nav-item"
                    }>
                        <Link
                            to="/oleCompanion"
                            onClick={() => setActivePage("/oleCompanion")}
                            className="nav-link"   
                        >
                            System Design
                        </Link>
                    </li>
                    <li className={activePage === "/oleCompanion/calculations"
                        ? "nav-item active"
                        : "nav-item"}>
                        <Link
                            to="/oleCompanion/calculations"
                            onClick={() => setActivePage("/oleCompanion/calculations")}
                            className="nav-link"
                        >
                            Calculations
                        </Link>
                    </li>
                    <li className={activePage === "/oleCompanion/signin"
                        ? "nav-item active"
                        : "nav-item"}>
                        <Link
                            to="/oleCompanion/signin"
                            onClick={() => setActivePage("/oleCompanion/signin")}
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
