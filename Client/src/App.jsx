import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import Quiz from "./Test/Quiz";
import Result from "./Test/Result";
import ContactUsPage from "./ContactUs/ContactUsPage";
import ThankYouPage from "./ContactUs/ThankYouPage/ThankYouPage";
const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();

  // Show Navbar only on the Home page
  const showNavbar = location.pathname === "/";

  return (
    <div>
      {showNavbar && <Navbar />}
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
          <Route element={<ContactUsPage />} path="/contact" />
           <Route element={<LearnMore />} path="/learn-more" />
           <Route element={<ThankYouPage />} path="/thank-you" />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
