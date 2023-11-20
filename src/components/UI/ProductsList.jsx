import React from "react";
import ProductCard from "./ProductCard";
const ProductList = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <ProductCard />
      ))}
    </>
  );
};

export default ProductList;
