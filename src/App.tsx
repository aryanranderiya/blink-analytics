import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Contact from "./pages/Contact";
import DataAnalytics from "./pages/DataAnalytics";
import GenerativeAI from "./pages/GenerativeAI";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Careers from "./pages/Careers";

function App() {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // useEffect(() => {
  //   if (mainRef.current) {
  //     // Force rerender or apply any needed logic to ensure the scrollbar initializes properly
  //     mainRef.current.updateScroll();
  //   }
  // }, [mainRef.current]);

  return (
    <ReactLenis root>
      <main className="bg-[#EDE8F5]" ref={mainRef}>
        <Navbar />
        <Preloader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/generative-ai" element={<GenerativeAI />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
        </Routes>
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
