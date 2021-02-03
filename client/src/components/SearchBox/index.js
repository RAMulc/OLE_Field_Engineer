import React from "react";
import "./style.css";

function SearchBox(props) {
    return (
        <form className="search float-left">
            <div className="form-group">
                <br />
                <input
                    value={props.value}
                    onChange={props.handleInputChange}
                    name={props.name}
                    type="text"
                    className="form-control"
                    placeholder={props.filterby}
                    id={props.filterby}
                />
            </div>
        </form>
    );
}

export default SearchBox;