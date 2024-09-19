import React from "react";
import img from "../assets/img/about.jpeg";
import Button from "../layouts/Button";
import { useNavigate } from "react-router";


  
const About = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router

 
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
          What Makes Our Website Special?
          </h2>
          <p>
          Language a new language is a productive thing.Our website will 
          provide one a environment to learn a new language .Along  with
          interactive lessons and progress tracking,this also provides a
          user to give exams on the topics he learned.
          </p>
          <p>
          Moreover our website is completely free of cost and anyone with an
          email can join this website.It is open for everyone.
          </p>

          <Button title="Learn More" onClick={() => navigate("/learn-more")} />
        </div>
      </div>
    </div>
  );
};

export default About;
