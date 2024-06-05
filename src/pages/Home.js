import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addToCartAsync } from "../reduxcart/cartslice";
import { addToWishListData } from "../reduxcart/wishListSlice";

const Home = () => {
  //state

  const [data, setData] = useState([]);

  //creat an object for useDispatch
  const dispatch = useDispatch();
  //apicalling
  const { allProducts, loading } = useSelector((state) => state.cart);
  // const fetchData = async () => {
  //   const result = await axios.get("https://fakestoreapi.com/products");
  //   console.log("asd", result.data);
  //   setData(result.data);
  // };

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <Container className="w-100" style={{ marginBottom: "6rem" }}>
        <Row>
          {allProducts.length > 0 ? (
            allProducts?.map((i) => (
              <Col sm={12} md={6} lg={4} key={i.id}>
                <Card
                  //   style={{ width: "18rem", height: "500px" }}
                  className="card__wrapper__container mt-5  ">
                  <Card.Img
                    variant="top"
                    style={{ height: "250px" }}
                    src={i?.image}
                  />
                  <Card.Body>
                    <Card.Title style={{ minHeight: "50px" }}>
                      {/* {i.title > 10 ? i.title.slice(0, 10) + "..." : i.title} */}
                      {i.title.length >= 40
                        ? i.title.slice(0, 40) + "..."
                        : i.title}
                    </Card.Title>
                    <Card.Text>
                      <h5 className="mb-4">$ {i.price}</h5>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        onClick={() => dispatch(addToCartAsync(i))}
                        variant="dark">
                        Add to Cart
                      </Button>
                      <i
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(addToWishListData(i))}
                        className="fa-regular fa-heart fa-xl text-danger float-end me-5 p-3"></i>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className="p-5 my-5 text-center">
              <i className="fa-solid fa-spinner fa-spin fa-4x p-5 my-5 "></i>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
