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
        const activeFeats = res.data.filter((feat) => feat.isActive);
        setFeatures(activeFeats);
      } catch (err) {
        console.log(err);
      }
    };
    getFeatures();
  }, []);

  return (
    <Container className="featuredProductWrapper">
      {features[arrayIndex] ? (
        <Row>
          <div
            xs="12"
            sm="6"
            className="text-left w-50 px-2"
            style={{
              order: `${features[arrayIndex]?.order}`,
            }}
          >
            <h3>{features[arrayIndex]?.title}</h3>
            <p>{features[arrayIndex]?.desc}</p>
            <Link
              to={`/product/${features[arrayIndex]?.productId}`}
              className="productList-card-link"
            >
              <button className="productList-card-button">Explore</button>
            </Link>
          </div>
          <div xs="12" sm="6" className="w-50 px-2">
            <img
              className="w-100"
              src={features[arrayIndex]?.img}
              alt={`${features[arrayIndex]?.title}-featured-product-showcase`}
            />
          </div>
        </Row>
      ) : (
        <p>
          <em>No active featured products.</em>
        </p>
      )}
    </Container>
  );
};

export default FeaturedProduct;
