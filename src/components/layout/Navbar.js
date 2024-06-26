import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme === "light" ? "bg-light " : "bg-dark";
  }, [theme]);

  const handleClick = (e) => {
    e.preventDefault();
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <li>
          <button onClick={handleClick}>Tongle Theme</button>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
