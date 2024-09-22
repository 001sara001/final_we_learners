import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestPage from "./Test/TestPage";
import WelcomePage from "./pages/WelcomePage";
import MenuCard from "./layouts/MenuCard";
import LearnMore from "./LearnMore/LearnMore";
import Quiz from "./Test/Quiz";
import Result from "./Test/Result";
import ContactUsPage from "./ContactUs/ContactUsPage";
import ThankYouPage from "./ContactUs/ThankYouPage/ThankYouPage";
import EnrollNow from "./EnrollNow/EnrollNowCommonPage";
import EnrollNowForEnglish from "./EnrollNow/EnrollNowForEnglish";
import EnrollNowForBangla from "./EnrollNow/EnrollNowForBangla";
import EnrollNowForJapanese from "./EnrollNow/EnrollNowForJapanese";
import EnrollNowForTurkish from "./EnrollNow/EnrollNowForTurkish";
import EnrollNowForKorean from "./EnrollNow/EnrollNowForKorean";
import EasyPageForEnglish from "./Levels/LevelsForEnglish/EasyPageForEnglish";
import EasyPageForTurkish from "./Levels/LevelsForTurkish/EasyPageForTurkish";
import EasyPageForKorean from "./Levels/LevelsForKorean/EasyPageForKOrean";
import EasyPageForJapanese from "./Levels/LevelsForJapanese/EasyPageForJapanese";
import EasyPageForBengali from "./Levels/LevelsForBangla/EasyPageForBangla";
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
          <Route element={<WelcomePage />} path="/welcomePage" />
          <Route element={<ContactUsPage />} path="/contact" />
           <Route element={<LearnMore />} path="/learn-more" />
           <Route element={<ThankYouPage />} path="/thank-you" />
           <Route element={<EnrollNow />} path="/enroll-now" />
           <Route path="/enroll-now-for-english" element={<EnrollNowForEnglish />} />
            <Route path="/enroll-now-for-bangla" element={<EnrollNowForBangla />} />
            <Route path="/enroll-now-for-japanese" element={<EnrollNowForJapanese />} />
            <Route path="/enroll-now-for-turkish" element={<EnrollNowForTurkish />} />
             <Route path="/enroll-now-for-korean" element={<EnrollNowForKorean />} />
             <Route path="/easy-page" element={<EasyPageForEnglish />} />
             <Route path="/easy-turkish-page" element={<EasyPageForTurkish />} />
             <Route path="/easy-japanese-page" element={<EasyPageForJapanese />} />
             <Route path="/easy-korean-page" element={<EasyPageForKorean/>} />
             <Route path="/easy-bangla-page" element={<EasyPageForBengali/>} />
             {/* <Route path="/easy-page" element={<EasyPage />} />
             <Route path="/easy-page" element={<EasyPage />} />
             <Route path="/easy-page" element={<EasyPage />} /> */}
             {/* <Route path="/medium-page" element={<MediumPage />} />
             <Route path="/advanced-page" element={<AdvancedPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
