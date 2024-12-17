import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import Preloader from "./components/Preloader";
import Contact from "./pages/Contact";

function App() {
  return (
    <ReactLenis root>
      <main className="bg-[#EDE8F5]">
        <Navbar />
        <Preloader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
