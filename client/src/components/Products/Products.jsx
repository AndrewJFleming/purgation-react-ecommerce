import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col } from "react-bootstrap";
import Product from "./Product/Product";
// import { productData } from "../../dummyData";

const Products = () => {
  const [products, setProducts] = useState([]);
  //   const [productsProcessed, setProductsProcessed] = useState([]);
  //   const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/products/`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <Row className="mt-5">
      {products.slice(0, 8).map((item) => (
        <Col xs={6} md={4} lg={3} key={item._id}>
          <Product product={item} />
        </Col>
      ))}
    </Row>
  );
};
export default Products;
