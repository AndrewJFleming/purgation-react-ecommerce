import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
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

  useEffect(() => {
    setTopNavCats(categoryData);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{
        padding: "2rem 0",
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
        <Container className="pb-4 d-flex justify-content-between">
          <Navbar.Brand
            as={Link}
            to="/"
            onClick={handleCollapse}
            className="desktop-nav-logo"
          >
            <img
              src={NavLogo}
              height="40"
              className="d-inline-block align-top"
              alt="site logo"
            />
            <p className="pl-1 ">
              <span className="nav-logo-text-prim">Purgation</span>
              <br />
              <span className="nav-logo-text-sec">ecommerce</span>
            </p>
          </Navbar.Brand>

          <Nav className="page-nav-links">
            <Nav.Link as={Link} to="/login" onClick={handleCollapse}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" onClick={handleCollapse}>
              Register
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Container>
        <Container className="d-flex justify-content-between">
          <Nav>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {topNavCats?.map((cat) => (
                <NavDropdown.Item
                  key={`${cat.title}-navItem`}
                  as={Link}
                  to={`/product-list/${cat.title}`}
                  onClick={handleCollapse}
                >
                  {cat.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {topNavCats?.map((cat) => (
                <NavDropdown.Item
                  key={`${cat.title}-navItem`}
                  as={Link}
                  to={`/product-list/${cat.title}`}
                  onClick={handleCollapse}
                >
                  {cat.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              className="nav-cart-link nav-link"
              as={Link}
              to="/cart"
              onClick={handleCollapse}
            >
              <span className={`${cartCount && "positive-cart"}`}>
                <i className="fas fa-shopping-basket"></i>
                &nbsp;({cartCount})
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
