import React, { useState, useRef } from "react";
import "../styles/comments.css";

import {
  Container,
  Row,
  Col,
  InputGroup,
  FloatingLabel,
  FormControl,
} from "react-bootstrap";
import { Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Comments = () => {
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const [rating, setRating] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("rating:", rating);
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      UserName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("Review submitted successfully");
  };
  return (
    <section id="contactus" className=" py-3">
      <div className="text-center p-3">
        <div className="fs-3 mb-2">
          Leave your experience here
          <i className="ni bi-chat-left-heart"></i>
        </div>
      </div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="ri-mail-line"></i>
                </InputGroup.Text>
                <FloatingLabel label="Email address" controlId="floatingInput">
                  <FormControl
                    type="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </FloatingLabel>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="ri-user-line"></i>
                </InputGroup.Text>
                <FloatingLabel label="Name" controlId="floatingInput">
                  <FormControl
                    type="text"
                    placeholder="name"
                    ref={reviewUser}
                    required
                  />
                </FloatingLabel>
              </InputGroup>
              <div className="form__group d-flex align-items-center gap-3 mb-3">
                <motion.span
                  whileTap={{ scale: 1.3 }}
                  onClick={() => setRating(1)}
                >
                  1<i className="ri-star-s-fill"></i>
                </motion.span>
                <motion.span
                  whileTap={{ scale: 1.3 }}
                  onClick={() => setRating(2)}
                >
                  2<i className="ri-star-s-fill"></i>
                </motion.span>
                <motion.span
                  whileTap={{ scale: 1.2 }}
                  onClick={() => setRating(3)}
                >
                  3<i className="ri-star-s-fill"></i>
                </motion.span>
                <motion.span
                  whileTap={{ scale: 1.3 }}
                  onClick={() => setRating(4)}
                >
                  4<i className="ri-star-s-fill"></i>
                </motion.span>
                <motion.span
                  whileTap={{ scale: 1.3 }}
                  onClick={() => setRating(5)}
                >
                  5<i className="ri-star-s-fill"></i>
                </motion.span>
              </div>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
                placeholder="Leave a comment here"
              >
                <FormControl
                  as="textarea"
                  rows={2}
                  placeholder="Leave a comment here"
                  className=""
                  ref={reviewMsg}
                />
              </FloatingLabel>
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn w-100 mb-5"
                onClick={handleSubmit}
              >
                Submit
              </motion.button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comments;
