import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "../layouts/Button";
import '../styles/ContactUsPage.css';

const ContactUsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate('/thank-you'); // Redirect to Thank You page
  };

  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-container">
        <h1 className="contact-us-heading">Contact Us</h1>
        <p className="contact-us-description">
          We’d love to hear from you! Please fill out the form below to get in touch.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="input-field"
              rows="4"
              placeholder="Type your message here"
            ></textarea>
          </div>

          <Button className="submit-button" title="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
