import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";
const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  // const [sortOrder, setSortOrder] = useState("");
  // const [sortOrder, setSortOrder] = useState("");

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa",
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile",
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch",
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair",
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless",
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchProducts = products.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm),
    );
    setProductsData(searchProducts);
  };

  // const handleSort = (e) => {
  //   if (e && e.target) {
  //     sortOrder(e.taget.value);
  //     const selectedSortOrder = e.target.value;
  //     setSortOrder(selectedSortOrder);

  //     // Use the selectedSortOrder to sort the products
  //     const sortedProducts = sortProducts(productsData, selectedSortOrder);
  //     setProductsData(sortedProducts);
  //   } else {
  //     console.error("Event or event target is undefined:", e);
  //   }
  // };

  // const sortProducts = (data, order) => {
  //   const sortedData = [...data];
  //   sortedData.sort((a, b) => {
  //     if (order === "ascending" || order === "descending") {
  //       // Sorting by product name
  //       const aValue = a.productName.toLowerCase();
  //       const bValue = b.productName.toLowerCase();
  //       return order === "ascending"
  //         ? aValue.localeCompare(bValue)
  //         : bValue.localeCompare(aValue);
  //     } else if (order === "lowToHigh" || order === "highToLow") {
  //       // Sorting by price
  //       if (a.price && b.price) {
  //         return order === "lowToHigh" ? a.price - b.price : b.price - a.price;
  //       }
  //     }
  //     // Fallback to default sorting by product name
  //     const aValue = a.productName.toLowerCase();
  //     const bValue = b.productName.toLowerCase();
  //     return aValue.localeCompare(bValue);
  //   });
  //   return sortedData;
  // };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" xs="6" className="mb-md-4 mb-sm-4">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="4" xs="6" className="mb-md-4 mb-sm-4">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascendieng">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="5" md="5">
              <div className="search__box mt-xs-4">
                <input
                  type="text"
                  placeholder="Search......."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center">No Products Found </h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
