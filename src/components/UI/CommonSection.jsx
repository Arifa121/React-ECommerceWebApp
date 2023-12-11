import React from "react";
import { Container } from "reactstrap";
import "../../styles/commonsection.css";
import PropTypes from "prop-types";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};
CommonSection.propTypes = {
  title: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // Add other properties as needed
  }).isRequired,
};
export default CommonSection;
