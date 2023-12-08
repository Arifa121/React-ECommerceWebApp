import React from "react";
import "./footer1.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer pt-5">
      <Container>
        <Row>
          <Col lg="4" md="6">
            <div className="logo ">
              <h1 className="text-white">SmartMart</h1>
            </div>
            <p className="footer__text mt-4 mb-sm-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              laborum voluptate earum nihil provident adipisci porro corporis
              eum eligendi illum!
            </p>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="footer__quick-links">
              <h4 className="quick__links-title fs-5 ">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 mb-sm-4 mb-xs-4">
                  <Link to="#">Smart aWctehs</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="6" sm="6">
            <div className="footer__quick-links">
              <h4 className="quick__links-title fs-5">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0  mb-sm-4">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="6">
            <div className="footer__quick-links">
              <h4 className="quick__links-title fs-5">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i className="ri-map-pin-line d-inline"></i>
                    <p className="ps-2 d-inline">
                      123 ZindaBaxar, Shylhet, India
                    </p>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i className="ri-phone-line d-inline"></i>
                    <p className="ps-2 d-inline">+91 80304 042344</p>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i className="ri-mail-line d-inline"></i>
                    <p className="ps-2 d-inline">smartmart@gmail.com</p>
                  </span>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i className="ri-instagram-line d-inline"></i>
                    <p className="ps-2 d-inline">smart_mart</p>
                  </span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Arifa. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
