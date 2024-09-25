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
import BeginnerPageForEnglish from "./Levels/LevelsForEnglish/BeginnerPageForEnglish";
import BeginnerPageForBengali from "./Levels/LevelsForBangla/BeginnerPageForBangla";
import AdvancedPageForEnglish from "./Levels/LevelsForEnglish/AdvancedPageForEnglish";
import AdvancedPageForTurkish from "./Levels/LevelsForTurkish/AdvancedPageForTurkish";
import BeginnerPageForJapanese from "./Levels/LevelsForJapanese/BeginnerPageForJapanese";
import AdvancedPageForJapanese from "./Levels/LevelsForJapanese/AdvancedPageForJapanese";
import BeginnerPageForTurkish from "./Levels/LevelsForTurkish/BeginnerPageForTurkish";
import BeginnerPageForKorean from "./Levels/LevelsForKorean/BeginnerPageForKorean";
import AdvancedPageForKorean from "./Levels/LevelsForKorean/AdvancedPageForKorean";
import AdvancedPageForBangla from "./Levels/LevelsForBangla/AdvancedPageForBangla";
import Review from "./components/Review";
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
             {/* easy level page route */}
             <Route path="/beginner-page" element={<BeginnerPageForEnglish />} />
             <Route path="/beginner-japanese-page" element={<BeginnerPageForJapanese />} />
             <Route path="/beginner-bangla-page" element={<BeginnerPageForBengali/>} />
             <Route path="/beginner-turkish-page" element={<BeginnerPageForTurkish/>} />
             <Route path="/beginner-korean-page" element={<BeginnerPageForKorean/>} />
             {/* advanced page route */}
             <Route path="/advanced-page" element={<AdvancedPageForEnglish/>} />
             <Route path="/intermediate-turkish-page" element={<AdvancedPageForTurkish/>} />
             <Route path="/advanced-japanese-page" element={<AdvancedPageForJapanese/>} />
             <Route path="/advanced-korean-page" element={<AdvancedPageForKorean/>} />
             <Route path="/advanced-bangla-page" element={<AdvancedPageForBangla/>} />
             <Route path="/reviews" element={<Review/>} />
            
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
