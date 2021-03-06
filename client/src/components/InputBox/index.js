import React from "react";
import "./style.css";

function InputBox(props) {
    function handleSubmit(e) {
        e.preventDefault();
    };
    
    return (
        <form onSubmit={handleSubmit} className={props.clasNam + ' frm float-left'}>
            <div className={"frm-comp"}>
                <label htmlFor={props.id}>{props.placeholderText}</label>
                <input
                    value={props.value}
                    onChange={props.handleInputChange}
                    name={props.name}
                    type={props.type}
                    className="form-control inp"
                    placeholder={props.placeholderText}
                    id={props.id}
                />
            </div>
        </form>
    );
}

export default InputBox;