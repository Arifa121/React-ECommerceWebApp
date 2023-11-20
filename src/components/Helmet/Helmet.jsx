// Helmet.jsx
import React from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = "Smartmart - " + props.title;
  return <div className="w-100"></div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
