import React from "react";
import img1 from "../assets/img/eng.jpeg";
import img2 from "../assets/img/bangla.jpeg";
import img3 from "../assets/img/jp.jpeg";
import img4 from "../assets/img/turkish.jpeg";
import img5 from "../assets/img/ko.jpeg";

import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Courses
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="English" />
        <MenuCard img={img2} title="Bangla" />
        <MenuCard img={img3} title="Japanese" />
        <MenuCard img={img4} title="Turkish" />
        <MenuCard img={img5} title="Korean" />
      </div>
    </div>
  );
};

export default Menu;
