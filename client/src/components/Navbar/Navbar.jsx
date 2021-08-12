import React from "react";
import { useDencrypt } from "use-dencrypt-effect";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const values = ["@yenilikci", "countries api client", ":)"];
const Navbar = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 5000);

    return () => clearInterval(action);
  }, []);
  return (
    <>
      <nav className="d-flex justify-content-between navbar navbar-expand-sm my-3 shadow rounded navbar-bg">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item m-1">
            <NavLink className="btn btn-lg btn-list " to="/">
              List
            </NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink className="btn btn-lg btn-about" to="/about">
              About
            </NavLink>
          </li>
        </ul>
        <span className="navbar-text dencrypt-effect">{result}</span>
      </nav>
    </>
  );
};

export default Navbar;
