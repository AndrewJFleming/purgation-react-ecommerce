import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavLogo from "../../../images/logoOutline.png";
import headerBG from "../../../images/headerBGImage.jpg";
import { categoryData } from "../../../dummyData";
import "./TopNav.css";

const TopNav = ({ currentUser }) => {
  const [expanded, setExpanded] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [topNavCats, setTopNavCats] = useState([]);

  const handleCollapse = () => {
    setExpanded(false);
  };

  // useEffect(() => {
  //   setTopNavCats(categoryData);
  // }, []);

  return (
    <Navbar
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{
        background: `url(${headerBG})`,
      }}
    >
      <Container className="d-flex justify-content-between mobile-container">
        <Link to="#">
          <img
            src={NavLogo}
            height="50"
            className="d-inline-block align-top"
            alt="site logo mobile"
          />
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
      </Container>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container className="d-flex justify-content-between">
          <div className="desktop-nav-logo">
            <Link to="#">
              <img
                src={NavLogo}
                height="30"
                className="d-inline-block align-top"
                alt="site logo"
              />
              <span className="pl-1">Purgation</span>
            </Link>
          </div>
          <div className="nav-items-top">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <input type="text" id="nav-search" name="search" />
          </div>
        </Container>
        <Container className="d-flex justify-content-between">
          <div className="nav-items-bottom">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <i className="fas fa-shopping-basket nav-cart-icon"></i>
          </div>
        </Container>
      </Navbar.Collapse>
      {/* </nav> */}
    </Navbar>
  );
};

export default TopNav;
