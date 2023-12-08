import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./services.css";
import serviceData from "../assets/data/serviceData";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" sm="6" className="mb-sm-3 mb-xs-3" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
