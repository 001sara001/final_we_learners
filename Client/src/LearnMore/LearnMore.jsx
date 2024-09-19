import React from "react";
import { useNavigate } from "react-router";
import Image1 from "../assets/img/pic1.png";
import Image2 from "../assets/img/pic2.png";
import Image3 from "../assets/img/pic3.png";
import Button from "../layouts/Button";
import '../styles/LearnMore.css';  // Import the CSS file

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-more-container">
      <h1 className="learn-more-heading">
        Discover More About Our Language Learning Platform
      </h1>

      <section className="learn-more-section">
        {/* Features Section */}
        <div className="section-item lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              className="section-image"
              src={Image1}
              alt="Features"
            />
          </div>
          <div className="w-full lg:w-1/2 section-content">
            <h2 className="section-title">Exciting Features</h2>
            <p className="section-text1">
              Our platform offers a range of features to make your language learning journey effective and enjoyable:
            </p>
            <ul className="section-list1">
              <li>Interactive lessons with real-life scenarios.</li>
              <li>Personalized learning paths based on your goals.</li>
              <li>Progress tracking to visualize your achievements.</li>
              <li>Quizzes and exams to test your knowledge.</li>
              <li>Free access to all features for everyone.</li>
            </ul>
            <Button
              className="learn-more-button"
              title="Get Started"
              onClick={() => navigate("/register")}
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="section-item lg:flex-row">
          <div className="w-full lg:w-1/2 section-content">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-text">
              Discover why our platform stands out from the rest:
            </p>
            <ul className="section-list">
              <li>Comprehensive language courses designed by experts.</li>
              <li>Engaging and interactive content to keep you motivated.</li>
              <li>Community support to help you stay on track.</li>
              <li>Regular updates and new features to enhance your learning experience.</li>
              <li>Completely free and accessible to everyone with an email.</li>
            </ul>
            <Button
              className="learn-more-button"
              title="Learn More"
              onClick={() => navigate("/features")}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="section-image"
              src={Image1}
              alt="Benefits"
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="section-item lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              className="section-image"
              src={Image2}
              alt="Testimonials"
            />
          </div>
          <div className="w-full lg:w-1/2 section-content">
            <h2 className="section-title">What Our Users Say</h2>
            <p className="section-text">
              Read what our users have to say about their experience:
            </p>
            <blockquote className="blockquote">
              "This platform has been a game-changer for me. The lessons are well-structured and the community is so supportive!" - Jamie L.
            </blockquote>
            <blockquote className="blockquote">
              "I’ve learned so much in a short time. The interactive features make studying fun and effective!" - Priya S.
            </blockquote>
            <Button
              className="learn-more-button"
              title="Read More Testimonials"
              onClick={() => navigate("/testimonials")}
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="section-item lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              className="section-image"
              src={Image3}
              alt="Contact"
            />
          </div>
          <div className="w-full lg:w-1/2 section-content">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-text">
              We’re here to help you with any questions or feedback you may have. Feel free to reach out to us!
            </p>
            <ul className="section-list">
              <li>Email: support@languageplatform.com</li>
              <li>Phone: +1-800-123-4567</li>
              <li>Follow us on social media for updates and tips!</li>
            </ul>
            <Button
              className="learn-more-button"
              title="Contact Us"
              onClick={() => navigate("/contact")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
``

