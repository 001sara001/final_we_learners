import React from "react";
import img1 from "../assets/img/Test.jpeg";
import img2 from "../assets/img/Test1.jpeg";

import ProductCard from "../layouts/ProductCard";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Tests
      </h1>

      <div className=" flex flex-col lg:flex-row gap-12 justify-center">
        <ProductCard img={img1} title="Bangla" />
        <ProductCard img={img1} title="English" />
        <ProductCard img={img1} title="Japanese" />
        <ProductCard img={img2} title="Turkish" />
        <ProductCard img={img2} title="Korean" />
      </div>
    </div>
  );
};

export default Product;
