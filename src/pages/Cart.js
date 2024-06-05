import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import { removeFromCart } from "../reduxcart/cartslice";
import { removeFromWishList } from "../reduxcart/wishListSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state?.cart.cartData);
  console.log(cartArray);
  //to get the total price
  if (cartArray.length != 0) {
    var total = cartArray?.map((i) => i.price).reduce((m, n) => m + n);
  } else {
    var total = 0;
  }

  const handleRemoveItem = (ids) => {
    dispatch(removeFromCart(ids));
  };

  return (
    <Container style={{ marginBottom: "80px" }}>
      <h1 className="text-center mt-5 mb-4">List of Item </h1>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartArray.length > 0 ? (
            cartArray.map((i, index) => (
              <tr key={index}>
                <td className="border p-5">{index}</td>
                <td className="border p-5">{i?.title}</td>
                <td className="border p-5">{i?.price}</td>
                <td className="border p-5">
                  <img
                    style={{ height: "100px", width: "100px" }}
                    src={i?.image}
                    alt=""
                  />
                </td>
                <td className="border p-5">
                  <i
                    onClick={() => {
                      handleRemoveItem(i?.id);
                    }}
                    className="fa-solid fa-trash fa-xl "
                    style={{ cursor: "pointer" }}></i>
                </td>
              </tr>
            ))
          ) : (
            <h1 className="text-center mt-5 m-auto p-5">No data available</h1>
          )}
        </tbody>
      </Table>

      <h2 className="text-end pe-5 mb-5 me-5 w-75">Total:{total}</h2>
    </Container>
  );
};

export default Cart;
