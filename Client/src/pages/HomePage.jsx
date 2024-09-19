import React from "react";
import Home from "../components/Home";
import Menu from "../components/Menu";
import About from "../components/About";
import Product from "../components/Product";
import Review from "../components/Review";

const HomePage = () => {
  return (
    <>
      <div id="home">
        <Home />
      </div>

      <div id="menu">
        <Menu />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="products">
        <Product />
      </div>

      <div id="review">
        <Review />
      </div>
    </>
  );
};

export default HomePage;
