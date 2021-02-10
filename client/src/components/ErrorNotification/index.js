import React from 'react';
import Button from "../Button";
import "./style.css";

function ErrorNotification(props) {
    console.log(props.messages);
    return (
        <div className={"float-left"}>
            {/* {props.messages.map(message => <p>{message}</p>)} */}
            {/* Only display the first error. One error at a time. */}
            <Button onClick={props.clearError} label={"X"} /><span>{props.messages[0]}</span>
        </div>
    );
}

export default ErrorNotification;