import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 50, clear: "both", padding: 0, textAlign: "center", fontSize: "30px" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
