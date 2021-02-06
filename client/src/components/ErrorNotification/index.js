import React from 'react';

function ErrorNotification(props) {
    console.log(props.messages);
    return (
        <div className="error-notice">
            {/* <span>{props.message}</span> */}
            {props.messages.map(message => <p>{message}</p>)}
            <button onClick={props.clearError}>X</button>
        </div>
    );
}

export default ErrorNotification;