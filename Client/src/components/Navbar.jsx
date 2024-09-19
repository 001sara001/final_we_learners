import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router";
import { navItems } from "../constant";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Load mode from localStorage on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  // Save mode to localStorage whenever it changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const handleNavLinkClick = () => {
    if (location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/quiz") {
      navigate("/");
    }
  };

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className={`flex flex-row justify-between p-5 lg:px-32 px-5 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-backgroundColor to-brightColor'} shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
          <div className="flex flex-row items-center cursor-pointer gap-2">
            <h1 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>WeLearners</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            {navItems.map((element, idx) => (
              <Link
                key={idx}
                to={element.to}
                spy={true}
                smooth={true}
                duration={500}
                className={`group relative inline-block cursor-pointer ${darkMode ? 'text-white hover:text-brightColor' : 'text-black hover:text-brightColor'}`}
                onClick={handleNavLinkClick}
              >
                {element.item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button title={darkMode ? "Light Mode" : "Dark Mode"} onClick={toggleDarkMode} />
          </div>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute ${darkMode ? 'bg-gray-800 text-white' : 'bg-black text-white'} left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Courses
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Tests
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>
          <Button title={darkMode ? "Light Mode" : "Dark Mode"} onClick={toggleDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
