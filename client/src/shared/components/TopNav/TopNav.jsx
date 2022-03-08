import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
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
    <Navbar expanded={expanded} collapseOnSelect expand="lg" variant="dark" style={{
        background: `url(${headerBG})`,
      }}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleCollapse}>
          <img
            src={NavLogo}
            height="30"
            className="d-inline-block align-top"
            alt="site logo"
          />
          <span className="pl-1">Purgation</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="myResponsive">
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
          </Nav>
          {/* <Nav>
            {currentUser ? (
              <Nav.Link as={Link} to="/" onClick={handleLogout}>
                Logout
              </Nav.Link>
            ) : (
              <React.Fragment>
                <Nav.Link as={Link} to="/login" onClick={handleCollapse}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" onClick={handleCollapse}>
                  Register
                </Nav.Link>
              </React.Fragment>
            )}
          </Nav> */}
          <Nav>
            {/* {currentUser && (
              <Link
                to={`account/${currentUser._id}`}
                className="avatar-link nav-link"
              >
                <span className="avatar">{currentUser.username}</span>
              </Link>
            )} */}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
