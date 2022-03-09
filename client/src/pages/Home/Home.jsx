import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import BlockQuote from "./BlockQuote/BlockQuote";
import Products from '../../components/Products/Products'

const Home = () => {

  return (
    <div className="minimum-height">
        <Container className="my-5">
          <Row>
            <Col xs="12" sm="10" className="text-center">
              <FeaturedProduct arrayIndex={0}/>
              <BlockQuote/>
              <FeaturedProduct arrayIndex={1}/>
              <Products />
            </Col>
            <Col xs="12" sm="2" className="text-center">
              <Sidebar />
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Home;
