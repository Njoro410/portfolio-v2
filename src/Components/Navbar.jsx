/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent relative">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">.</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="bio" smooth={true} offset={-50} duration={500}>
              Bio
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={-50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="elevator-pitch" smooth={true} offset={-50} duration={500}>
              ElevatorPitch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
