import React from "react";
import "./style.css";

function Button(props) {
    return (
        <button
            className="btn btn-default"
            name={props.name}
            onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default Button;
