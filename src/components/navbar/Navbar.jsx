import React, { useState } from "react";
import "./navbar.css";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaBell } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";

const Menu = () => {
  const [toggle_links_features, setToggle_links_features] = useState(false);
  const [toggle_links_compnay, setToggle_links_company] = useState(false);

  const drop_down_feature__features = () => {
    setToggle_links_features(!toggle_links_features);
  };

  const drop_down_feature__company = () => {
    setToggle_links_company(!toggle_links_compnay);
  }

  return (
    <>
      <div className="menu-link" onClick={drop_down_feature__features}>
      <p>Features</p>
        {toggle_links_features ? (
          <FaAngleUp
            onClick={() => setToggle_links_features(false)}
            className="arrow-icon"
          />
        ) : (
          <FaAngleDown
            onClick={() => setToggle_links_features(true)}
            className="arrow-icon"
          />
        )}

        {toggle_links_features && (
          <div className="menu__drop-down-container scale-up-top">
            <div className="menu__drop-down-container-item">
              <LuListTodo className="icon-todo"/>
              <p>Todo List</p>
            </div>

            <div className="menu__drop-down-container-item">
              <SlCalender className="icon-calender"/>
              <p>Calender</p>
            </div>

            <div className="menu__drop-down-container-item">
              <FaBell className="icon-bell"/>
              <p>Reminders</p>
            </div>

            <div className="menu__drop-down-container-item">
              <FaClock className="icon-clock"/>
              <p>Planning</p>
            </div>
          </div>
        )}
      </div>

      <div className="menu-link" onClick={drop_down_feature__company} >
        <p>Company</p>
        {toggle_links_compnay ? (
          <FaAngleUp
            onClick={() => setToggle_links_company(false)}
            className="arrow-icon"
          />
        ) : (
          <FaAngleDown
            onClick={() => setToggle_links_company(true)}
            className="arrow-icon"
          />
        )}

        {toggle_links_compnay&& (
          <div className="menu__drop-down-container-company scale-up-top">
            <div className="menu__drop-down-container-company-item">
              <p>History</p>
            </div>
            <div className="menu__drop-down-container-company-item">
              <p>Our Team</p>
            </div>
            <div className="menu__drop-down-container-company-item">
              <p>Blog</p>
            </div>
          </div>
        )}

      </div>

      <div className="menu-link">
        <a href="#">Careers</a>
      </div>

      <div className="menu-link">
        <a href="#">About</a>
      </div>
    </>

    

  );


};

const Navbar = () => {
  return (
    <div className="remote__navbar-container">
      <div className="remote__navbar-links">
        <div className="remote__navbar-logo">
          <h1>snap</h1>
        </div>

        <div className="remote__navbar-links-container">
          <Menu />
        </div>

        <div className="remote__navbar-sign">
          <div>
            <p>Login</p>
          </div>
          <div>
            <button type="button">Register</button>
          </div>

          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
