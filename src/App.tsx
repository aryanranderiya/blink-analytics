import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import GenerativeAI from "./pages/GenerativeAI";
import DataAnalytics from './pages/DataAnalytics';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {}, []);
  return (
    <ReactLenis root>
      <main className="bg-[#EDE8F5] ">
        <Navbar />
        <Preloader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
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
