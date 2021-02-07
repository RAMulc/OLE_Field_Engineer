import React from "react";
import "./style.css";

function InputBox(props) {
    return (
        <form className={props.clasNam + ' frm float-left'}>
            <div className="form-group">
                <label htmlFor={props.id}>{props.placeholderText}</label>
                <input
                    value={props.value}
                    onChange={props.handleInputChange}
                    name={props.name}
                    type={props.type}
                    className="form-control"
                    placeholder={props.placeholderText}
                    id={props.id}
                />
            </div>
        </form>
    );
}

export default InputBox;