import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../shared/components/Sidebar/Sidebar";

const Home = () => {

  return (
    <div className="minimum-height">
        <Container>
          <Row>
            <Col xs="12" sm="10" md="8" className="text-center">
              Left
            </Col>
            <Col xs="12" sm="2" md="4" className="text-center">
              <Sidebar />
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Home;
