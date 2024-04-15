import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contacts",
  },
];

export default function Header() {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            Medicare
            <img />
          </div>

          {/* menu */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {React.Children.toArray(
                navLinks.map((link) => (
                  <li>
                    <NavLink
                      to={link.path}
                      className={(navClass) => (navClass.isActive ? "text-primaryColor text-[16px] leading-7 " : "")}
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
