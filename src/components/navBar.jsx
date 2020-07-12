import React from "react";

// Stateless Functional Component
// Function that returns a react element instead of using a class
// Destructuring props in arguments with {}
const NavBar = ({ counterCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{counterCount}</span>
      </a>
    </nav>
  );
};

export default NavBar;
