import React from "react";
import ResponsiveMenu from "react-responsive-navbar";
import { Close } from "styled-icons/material/Close";
import { Menu } from "styled-icons/material/Menu";

export default function (props) {
  return (
    <header className="header">
      <div className="wrap">
        <header className="logo">
          <h1 className="logo-title">
            <a href="#" className="logo-link">
              Estatery
            </a>
          </h1>
        </header>
        <nav className="menu">
          <ResponsiveMenu
            menuOpenButton={
              <div className="menu hamburger-menu menu-btn">
                <Menu size={32} />
              </div>
            }
            menuCloseButton={
              <div className="menu hamburger-menu menu-btn">
                <Close size={32} />
              </div>
            }
            changeMenuOn="900px"
            menu={
              <ul className="menu-list">
                <li className="menu-item is-active menu-item--play">
                  <a href="#" className="menu-link">
                    Rent
                  </a>
                </li>
                <li className="menu-item is-active menu-item--play">
                  <a href="#" className="menu-link">
                    Buy
                  </a>
                </li>
                <li className="menu-item is-active menu-item--play">
                  <a href="#" className="menu-link">
                    Sell
                  </a>
                </li>
                <li className="menu-item is-active menu-item--play">
                  <a href="#" className="menu-link">
                    Manage Property
                  </a>
                </li>
                <li className="menu-item is-active menu-item--play">
                  <a href="#" className="menu-link">
                    Resources
                  </a>
                </li>
                <li className="menu-item is-active menu-item--play">
                  <a href="#" className="menu-link">
                    Login
                  </a>
                </li>
                <li className="menu-item is-active menu-item--play">
                  <a href="#" className="menu-link">
                    SignUp
                  </a>
                </li>
              </ul>
            }
          />
        </nav>
      </div>
    </header>
  );
}
