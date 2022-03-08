import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../../../images/logoBig.png";
import footerBG from "../../../images/footerBGImage.jpg";

const Footer = () => {

  return (
    <div className="footer-wrapper" style={{
      background: `url(${footerBG})`,
    }}>
      <Container>
        <Row>
          <Col className="text-center footer-left p-2">
            <Link to="/" className="footer-logo-link">
              <img src={footerLogo} height="300" alt="site logo" />
            </Link>
          </Col>
          <Col className="text-center footer-center  p-2">
            <h5>Useful Links</h5>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/cart">
                <li>Cart</li>
              </Link>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
