import React from "react";

import { Container } from "react-bootstrap";
import "./BlockQuote.css";

const BlockQuote = () => {

  return (
    <Container className="blockquoteContainer">
        <blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</blockquote>
    </Container>
  );
};

export default BlockQuote;
