import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Container, Row, Button } from "react-bootstrap";
import "./FeaturedProduct.css";

const FeaturedProduct = ({ arrayIndex }) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const getFeatures = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/features/`
        );
        setFeatures(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFeatures();
  }, []);

  return (
    <Container className="featuredProductWrapper">
      <Row>
        <div
          xs="12"
          sm="6"
          className="text-left w-50 px-2"
          style={{
            order: `${features[arrayIndex].order}`,
          }}
        >
          <h3>{features[arrayIndex].title}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            dictum felis eu pede mollis pretium.
            <br />
            <br />
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
            <br />
            <br />
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a,
          </p>
          <Link
            to={`/product/${features[arrayIndex]._id}`}
            className="productList-card-link"
          >
            <button className="productList-card-button">Explore</button>
          </Link>
        </div>
        <div xs="12" sm="6" className="w-50 px-2">
          <img
            className="w-100"
            src={features[arrayIndex].img}
            alt={`${features[arrayIndex].title}-featured-product-showcase`}
          />
        </div>
      </Row>
    </Container>
  );
};

export default FeaturedProduct;
