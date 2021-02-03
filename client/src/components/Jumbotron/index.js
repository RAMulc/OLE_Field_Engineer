import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 20, textAlign: "center", fontSize: "75px" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
