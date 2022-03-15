import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light  container">
        <Link
          className="navbar-brand "
          to="/"
          style={{ marginLeft: "15px", fontWeight: "bolder", fontSize: "22px" }}
        >
          Share.io
        </Link>
      </nav>
      <nav className="navbar navbar-light  container">
        <Link
          to="/about"
          className="navbar-brand "
          style={{
            marginright: "15px",
            fontWeight: "bolder",
            fontSize: "22px"
          }}
        >
          about
        </Link>
      </nav>
    </div>
  );
};
