import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.css";
// const Home = () => {
//   const year= new Date().getFullYear();
//   return
//<section className="hero__section">
//       <Container fluid="sm">
//         <Row>
//           <Col lg='6' md='6' sm='12'>
//                <div className="hero__content">
//                 <p className="hero__subtitle">Trending products in {year}</p>
//                 <h2>Make your Interior More Minimalistic and Modern</h2>
//                  <p>Transform your space with our expert interior design services. Elevate aesthetics, functionality, and comfort seamlessly. Experience unparalleled style today.</p>
//                  <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
//                </div>
//           </Col>
//           <Col lg='6' md='6'>
//             <div className="hero__img">
//               <img src={heroImg} alt="heroimg" className="img-fluid"/>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//     </section>

// }

// export default Home

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Helmet title={"Home"}>
        <section className="hero__section">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12">
                <div className="hero__content">
                  <p className="hero__subtitle">Trending products in {year}</p>
                  <h2>Make your Interior More Minimalistic and Modern</h2>
                  <p>
                    Transform your space with our expert interior design
                    services. Elevate aesthetics, functionality, and comfort
                    seamlessly. Experience unparalleled style today.
                  </p>
                  <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                    <Link to="">SHOP NOW</Link>
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
      </Helmet>
    </>
  );
};

export default Home;
