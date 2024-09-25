
import { useNavigate } from "react-router";
import Image1 from "../assets/img/pic1.png";
import Image2 from "../assets/img/pic2.png";

import '../styles/Review.css';  

const Review = () => {
    const navigate = useNavigate();

    return (
      <div className="review-container">
        <h1 className="review-heading">
        Reviews of some benefited User!!
        </h1>
  
        <section className="review-section">
          {/* Features Section */}
          <div className="section-item lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                className="section-image"
                src={Image1}
                alt="Features"
              />
            </div>
            <div className="w-half lg:w-1/2 section-content">
              <h2 className="section-title">My personal views on this website:</h2>
              <p className="section-text1">
                This website provides with many basic words that helped to learn the basic vocabulary and made me wanted to learn more about a foreign language.
              </p> 
            </div>
          </div>
    </section>  
    <section className="review-section1">
          {/* Features Section */}
          <div className="section-item2 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                className="section-image"
                src={Image2}
                alt="Features"
              />
            </div>
            <div className="w-half lg:w-1/2 section-content">
              <h2 className="section-title">I really liked the website for the following reasons:</h2>
              <p className="section-text2">
                They have an organized section of courses which helped me to learn more about the words and that too in details.
              </p> 
            </div>
          </div>
    </section>      
      </div>    
         
    );
};

export default Review;


