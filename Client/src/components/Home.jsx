import React from "react";
import img from "../assets/img/logo.jpeg";
import Button from "../layouts/Button";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
          Start learning language with WeLearners.
        </h1>
        <p>
          Embark on a language learning and be productive with for a better
          future.
        </p>

        <div className=" flex flex-row gap-6">
          <Button title="Login" onClick={() => navigate("/login")} />
          <Button title="Register" onClick={() => navigate("/register")} />
        </div>
      </div>

      <div className="relative">
        <img src={img} alt="img" />

        <div className=" absolute bg-white px-10 py-2 top-0 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <h2 className=" font-semibold">Language</h2>
        </div>

        <div className=" absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full">
          <h2 className=" font-semibold">Learning</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
