import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import Preloader from "./components/Preloader";
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <ReactLenis root>
      <main className="bg-[#EDE8F5] ">
        <Navbar />
        <Preloader
          preloaderFinished={preloaderFinished}
          setPreloaderFinished={setPreloaderFinished}
        />
        <Routes>
          <Route
            path="/"
            element={<Home preloaderFinished={preloaderFinished} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
