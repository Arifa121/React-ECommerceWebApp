import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
// import { Form } from "react-bootstrap";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/productdetails.css";
import { motion } from "framer-motion";
// import classNames from "classnames";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails1 = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [activeTab, setActiveTab] = useState("desc");
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;
  const relatedProducts = products.filter((item) => item.category === category);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      }),
    );
    toast.success("Product added successfully");
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row className="justify-content-center gap-1">
            <Col lg="5">
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg="5">
              <div className="product__details mt-lg-5">
                <h2 className="mb-1">{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-4 mb-3">
                  <div className="fs-4">
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p className="fs-5">
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="product__price fs-3">${price}</span>
                  <span className="">Category: {category}</span>
                </div>

                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="buy__btn mt-4"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {/* <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={classNames("custom-tab", {
                    active__tab: tab === "desc",
                  })}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={classNames("custom-tab", {
                    active__tab: tab === "rev",
                  })}
                  onClick={() => setTab("rev")}
                >
                  Reviews({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab--content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="tab--content mt-4">
                  {reviews.map((review, index) => (
                    <div key={index}>
                      <p>Rating: {review.rating}</p>
                      <p>Text: {review.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </Col> */}
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5 ">
                <h5
                  className={activeTab === "desc" ? "active__tab" : ""}
                  onClick={() => setActiveTab("desc")}
                >
                  Description
                </h5>
                <h5
                  className={activeTab === "rev" ? "active__tab" : ""}
                  onClick={() => setActiveTab("rev")}
                >
                  Reviews({reviews.length})
                </h5>
              </div>
              {activeTab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="tab__content review__wrapper mt-5 ms-3">
                  {reviews.map((review, index) => (
                    <div className="mb-4" key={index}>
                      <h4 className="mb-1 fs-5">customer {index + 1}</h4>
                      <p>
                        <span>{review.rating}</span> (rating)
                      </p>
                      <p className="mb-3">{review.text}</p>
                    </div>
                  ))}
                  <Comments />
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-3">
              <h3 className="related__title mt-5 mb-2">You might also like</h3>
            </Col>

            <ProductList className="bg-light" data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails1;
