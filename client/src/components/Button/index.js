var React = require('react');

var buttonStyle = {
    margin: '10px 10px 10px 0'
};

function Button(props) {
    return (
        <button
            className="btn btn-default"
            style={buttonStyle}
            name={props.name}
            onClick={props.onClick}>
            {props.label}
        </button>
    );
}

module.exports = Button;
