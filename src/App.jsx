import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import OrthopedicSurgery from "./pages/PostOne";
import MaleFertility from "./pages/PostTwo";
import ObesitySurgery from "./pages/PostThree";
import Contact from "./pages/Contact";
import EyeSurgery from "./pages/PostFour";
import InternalMedicine from "./pages/PostFive";
import WomenHealth  from "./pages/PostSix";
import InterventionalRadiology  from "./pages/PostSeven";
import PsychiatryAndAddiction  from "./pages/PostEight";
import BookingPage  from "./pages/BookingPage";

import { useEffect, useState } from "react";

const App = () => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language") || "AR";
    document.documentElement.dir = storedLanguage === "AR" ? "rtl" : "ltr"; // تعيين الاتجاه عند التحميل
    return storedLanguage;
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr"; // تحديث الاتجاه
  }, [language]);
  return (
    <Router>
      {/* Sidebar */}
      {/* Main content */}
      <Routes>
        <Route
          element={
            <Sidebar language={language} setLanguage={setLanguage} />
          }
        >
          <Route
            path="/"
            element={
              <About
                language={language}
                setLanguage={setLanguage}
              />
            }
          />
          <Route
            path="/orthopedicsurgery"
            element={
              <OrthopedicSurgery
                language={language}
                setLanguage={setLanguage}
              />
            }
          />
          <Route
            path="/malefertility"
            element={
              <MaleFertility
                language={language}
                setLanguage={setLanguage}
              />
            }
          />
                    <Route
            path="/obesitysurgery"
            element={
              <ObesitySurgery
                language={language}
                setLanguage={setLanguage}
              />
            }
          />

<Route
            path="/eyesurgery"
            element={
              <EyeSurgery
                language={language}
                setLanguage={setLanguage}
              />
            }
          />
          
          <Route
            path="/contact"
            element={
              <Contact
                language={language}
                setLanguage={setLanguage}
              />
              
            }
          />
          <Route
            path="/booking"
            element={
              <BookingPage
                language={language}
                setLanguage={setLanguage}
              />
              
            }
          />
                    <Route
            path="/internalMedicine"
            element={
              <InternalMedicine
                language={language}
                setLanguage={setLanguage}
              />
              
            }
          />
                 <Route
            path="/womenHealth"
            element={
              <WomenHealth
                language={language}
                setLanguage={setLanguage}
              />
              
            }
          />

<Route
            path="/InterventionalRadiology"
            element={
              <InterventionalRadiology
                language={language}
                setLanguage={setLanguage}
              />
              
            }
          />

<Route
            path="/PsychiatryAndAddiction"
            element={
              <PsychiatryAndAddiction
                language={language}
                setLanguage={setLanguage}
              />
              
            }
          />
      
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
