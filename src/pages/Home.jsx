import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.css";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";
import counterImg from "../assets/images/counter-timer-img.png";
// import Helmet from "../components/Helmet/Helmet";
// import PropTypes from "prop-types";

const Home1 = () => {
  const year = new Date().getFullYear();
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair",
    );
    const filteredBestSalegProducts = products.filter(
      (item) => item.category === "sofa",
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless",
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch",
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile",
    );
    setTrendingProducts(filteredTrendingProducts);
    setMobileProducts(filteredMobileProducts);
    setPopularProducts(filteredPopularProducts);
    setWirelessProducts(filteredWirelessProducts);
    setBestSaleProducts(filteredBestSalegProducts);
  }, []);
  return (
    // <Helmet title={"Home"}>
    <>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="hero__content">
                <p className="hero__subtitle">Trending products in {year}</p>
                <h2 className="fs-1">
                  Make your Interior More Minimalistic and Modern
                </h2>
                <p className="mb-3">
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
      <section className="trending__products tp">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-3 mt-0">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-3">
              <h2 className="section__title fs-2">Best Sales</h2>
            </Col>
            <ProductList data={bestSaleProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6" className="countdown__col">
              <div className="clock__top-content ">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.1 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end img-fluid counter__img">
              <img className="counterimg" src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title fs-2">New Arrival</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title fs-2">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
      </>
  );
};
// Home1.propTypes = {
//   title: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     // Add other properties as needed
//   }).isRequired,
// };
export default Home1;
