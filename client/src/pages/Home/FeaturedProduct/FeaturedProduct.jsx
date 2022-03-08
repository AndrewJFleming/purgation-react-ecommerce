import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import { Container, Row, Button } from "react-bootstrap";
import "./FeaturedProduct.css";
import { featuredProductData } from "../../../dummyData";

const FeaturedProduct = ({arrayIndex}) => {
//   const [sidebarCats, setSidebarCats] = useState([]);

//   useEffect(() => {
//     setSidebarCats(categoryData);
//   }, []);

  return (
    <Container className="featuredProductWrapper">
        <Row>
            <div xs="12" sm="6" className="text-left w-50 px-2"
                    style={{
                order: `${featuredProductData[arrayIndex].order}`
            }}>
                <h3>{featuredProductData[arrayIndex].title}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium.<br/><br/>
                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.<br/><br/>
                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                </p>
                <Button as={Link} to="#" variant="dark">Explore</Button>
            </div>
            <div xs="12" sm="6" className="w-50 px-2">
                <img className="w-100" src="https://images.unsplash.com/photo-1646704773108-ff5d7f116249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="feat-img"/>
            </div>
        </Row>
    </Container>
  );
};

export default FeaturedProduct;
