import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../reduxcart/wishListSlice";
import { addToCartAsync } from "../reduxcart/cartslice";
const Wishlist = () => {
  const dispatch = useDispatch();
  const WishListArray = useSelector((state) => state?.wishList.allProducts);
  console.log("ss", WishListArray);

  //remove from wishlist
  const handleRemoveItem = (ids) => {
    dispatch(removeFromWishlist(ids));
  };

  const handleSubmit = (i, ids) => {
    handleRemoveItem(ids);
    dispatch(addToCartAsync(i));
  };
  return (
    <div>
      <Container style={{ marginBottom: "80px" }}>
        <h1 className="text-center mt-5 mb-4">WishList of Item </h1>
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
            {WishListArray?.length > 0 ? (
              WishListArray?.map((i, index) => (
                <tr>
                  <td className="border p-5">{index}</td>
                  <td className="border p-5">{i?.title}</td>
                  <td className="border p-5">{i.price}</td>
                  <td className="border p-5">
                    <img
                      style={{ height: "100px", width: "100px" }}
                      src={i.image}
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

                    <i
                      onClick={() => {
                        handleSubmit(i, i?.id);
                      }}
                      className="fa-solid fa-cart-shopping fa-xl mt-5"
                      style={{ cursor: "pointer" }}></i>
                  </td>
                </tr>
              ))
            ) : (
              <h1>No data available</h1>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Wishlist;
