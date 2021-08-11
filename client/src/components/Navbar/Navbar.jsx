import React from "react";
import "./navbar.css";

import { useDencrypt } from "use-dencrypt-effect";
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
      <nav className="d-flex justify-content-between navbar navbar-expand-sm bg-info navbar-dark my-3 shadow rounded">
        <ul className="navbar-nav">
          <li className="nav-item m-1 btn btn-light">Home</li>
          <li className="nav-item m-1 btn btn-light">About</li>
        </ul>
        <span className="navbar-text">{result}</span>
      </nav>
    </>
  );
};

export default Navbar;
