import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestPage from "./Test/TestPage";
import EnrollNow from "./pages/EnrollNow";
import WelcomePage from "./pages/WelcomePage";
import MenuCard from "./layouts/MenuCard";
import LearnMore from "./LearnMore/LearnMore";
import Quiz from "./Test/Quiz"
import Result from "./Test/Result";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<TestPage />} path="/quiz" />
            <Route element={<Quiz />} path="/quiz/start" />
            <Route element={<Result />} path="/result" />
            <Route path="/MenuCard" element={<MenuCard />} />
            <Route element={<EnrollNow />} path="/enroll-now" />
            <Route element={<WelcomePage />} path="/welcomePage" /> 
            <Route element={<LearnMore />} path="/learn-more" />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
