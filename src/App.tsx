import { ReactLenis } from "@studio-freight/react-lenis";
import { useCallback, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Contact from "./pages/Contact";
import DataAnalytics, { dataAnalyticsServices } from "./pages/DataAnalytics";
import GenerativeAI, { generativeAIServices } from "./pages/GenerativeAI";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Careers from "./pages/Careers";
import CustomCursor from "./components/CustomCursor";
// import CustomCursor from "./components/CustomCursor";

function App() {
  const location = useLocation();
  const mainRef = useRef(null);
  // const [position, setPosition] = useState({
  //   x: window.innerWidth / 2,
  //   y: window.innerHeight / 2,
  // });

  const [delayedPosition, setDelayedPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const videoElements: HTMLVideoElement[] = [];

    [...dataAnalyticsServices, ...generativeAIServices].forEach((service) => {
      const video = document.createElement("video");
      video.src = service.gif;
      video.preload = "auto";
      videoElements.push(video);
    });

    return () => {
      videoElements.forEach((video) => {
        video.src = "";
      });
    };
  }, [dataAnalyticsServices, generativeAIServices]);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    setTimeout(() => {
      setDelayedPosition({ x: event.clientX, y: event.clientY });
    }, 80);
  }, []);

  return (
    <ReactLenis root>
      <main
        className="bg-[#EDE8F5]"
        ref={mainRef}
        onMouseMove={location.pathname != "/" ? handleMouseMove : undefined}
      >
        {location.pathname != "/" && (
          <CustomCursor delayedPosition={delayedPosition} />
        )}
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
