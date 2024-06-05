import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  //store akath ulla reducer key aaanu cart
  const cartArrayLength = useSelector((state) => state.cart.cartData);
  const wishListArrayLength = useSelector(
    (state) => state.wishList.allProducts
  );
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#home" className="fs-4 mx-3">
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-cart-shopping fa-shake fa-xl "></i>
              ShoppingCart
            </Navbar.Brand>
          </Link>
        </Container>
        <Link to="/cart">
          <Button variant="outline-dark float-end mx-2">
            Cart{" "}
            <Badge className="ms-2" bg="secondary ">
              {cartArrayLength?.length}
            </Badge>
          </Button>
        </Link>

        <Link to="/wishlist">
          <Button variant="outline-dark float-end mx-2">
            <i className="fa-regular fa-heart fa-xl text-danger"></i>{" "}
            <Badge className="ms-2" bg="secondary ">
              {wishListArrayLength?.length}
            </Badge>
          </Button>
        </Link>
      </Navbar>
    </div>
  );
};

export default Header;
