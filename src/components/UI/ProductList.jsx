import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
const ProductList = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </>
  );
};
ProductList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Add the actual type for the 'id' property
      imgUrl: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      // Add other properties as needed
    }),
  ).isRequired,
};

export default ProductList;
