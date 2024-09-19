import React from "react";
import {  useNavigate } from "react-router-dom";
import Button from "../layouts/Button";
const MenuCard = (props) => {
  
  const navigate = useNavigate();
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
      <div>
        <img className="rounded-xl" src={props.img} alt="img1" />
      </div>
      <div className="p-2 mt-5">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold text-xl">{props.title}</h3>
          <h3 className="font-semibold text-xl">{props.value}</h3>
        </div>
        <div className="flex flex-row justify-between mt-3">
        <div className="button-container">
        <Button title="Enroll Now" onClick={() => navigate("/enroll-now")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
