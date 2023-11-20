import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.css";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductsList";
import products from "../assets/data/products";
const Home1 = () => {
  const year = new Date().getFullYear();
  const [data, setData] = useState(products);
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair",
    );
    setData(filteredProducts);
  }, []);
  return (
    <>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="hero__content">
                <p className="hero__subtitle">Trending products in {year}</p>
                <h2>Make your Interior More Minimalistic and Modern</h2>
                <p>
                  Transform your space with our expert interior design services.
                  Elevate aesthetics, functionality, and comfort seamlessly.
                  Experience unparalleled style today.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="heroimg" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home1;
