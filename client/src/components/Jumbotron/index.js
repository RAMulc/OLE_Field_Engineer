import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 75, clear: "both", paddingTop: 0, textAlign: "center", fontSize: "50px" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
