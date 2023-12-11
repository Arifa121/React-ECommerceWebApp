import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
const Cart1 = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No items added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Img</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <motion.th whileTap={{ scale: 1.3 }}>Delete</motion.th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => {
                      return <Tr item={item} key={index} />;
                    })}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                </h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p>taxes and shipping will calculate in checkout</p>
              <div>
                <button className="buy__btn">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
                <button className="buy__btn">
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <motion.tr>
      <td>
        <img className="a" src={item.imgUrl} alt="" />
      </td>
      <td className=" mt-2">{item.productName}</td>
      <td className=" mt-2">{item.price}</td>
      <td className=" mt-2">{item.quantity}px</td>
      <motion.td>
        <motion.div
          whileTap={{ scale: 1.1 }}
          onClick={deleteProduct}
          className="motion"
        >
          <i className="ri-delete-bin-line"></i>
        </motion.div>
      </motion.td>
    </motion.tr>
  );
};
Tr.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    // Add other properties as needed
  }).isRequired,
};

export default Cart1;
