import React from "react";
// import productImg from "../../assets/images/arm-chair-01.png";
import "../../styles/ProductCard.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ProductCard = ({item}) => {
  return (
    <Col lg="3" md="4" sm="6" xs="12">
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
            <Link to="/shop/id">Modern Armchair</Link>
          </h3>
          <span className="">Chair</span>
        </div>
        <div className="product__card-buttom d-flex align-items-center justify-content-between p-2">
          <span className="price">$299</span>
          <motion.span whileTap={{ scale: 1.1 }}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
