import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSun } from "react-icons/fa";
import "../global.css";

function Header() {
  const [menu, setMenu] = useState(false);
  // console.log("what is menu", menu);
  return (
    <div className="header">
      <div className="wrapper app-width">
        <div className="ls">
          <h1 className="logo">Teach</h1>
        </div>
        <div className="rs">
          <ul className={`rs_menu ${menu ? "show" : ""}`}>
            <li className="rs_header_list" onClick={(e) => setMenu(false)}>
              <Link to="/" className="header_link">
                Home
              </Link>
            </li>
            <li className="rs_header_list" onClick={(e) => setMenu(false)}>
              <Link to="/about" className="header_link">
                About
              </Link>
            </li>
            <li className="rs_header_list" onClick={(e) => setMenu(false)}>
              <Link to="/skill" className="header_link">
                Skill
              </Link>
            </li>
            <li className="rs_header_list" onClick={(e) => setMenu(false)}>
              <Link to="/servies" className="header_link">
                Services
              </Link>
            </li>

            <li className="rs_header_list" onClick={(e) => setMenu(false)}>
              <Link to="/portfolio" className="header_link">
                Portfolio
              </Link>
            </li>

            <li className="rs_header_list" onClick={(e) => setMenu(false)}>
              <Link to="/reviews" className="header_link">
                Reviews
              </Link>
            </li>

            <li className="rs_header_list" onClick={(e) => setMenu(false)}>
              <Link to="/contact" className="header_link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="Menu" onClick={(e) => setMenu(!menu)}>
            <FaBars />
          </div>
          {/* <div className="light">
            <FaSun />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
