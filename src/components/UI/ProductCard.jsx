import React from "react";
// import productImg from "../../assets/images/arm-chair-01.png";
import "../../styles/ProductCard.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
      }),
    );
    toast.success("Product added successfully");
  };

  return (
    <Col lg="3" md="4" sm="6" xs="12" className="mb-2 ">
      <div className="product__item">
        <div className="product__img d-flex justify-content-center">
          <motion.img
            whileHover={{ scale: 0.9 }}
            className="img-fluid"
            src={item.imgUrl}
            alt=""
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className="">{item.category}</span>
        </div>
        <div className="product__card-buttom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.1 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};
ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    // Add other properties as needed
  }).isRequired,
};
export default ProductCard;
