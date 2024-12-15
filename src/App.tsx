import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavbarComponent from "./components/Navbar.jsx";
import { ReactLenis } from "@studio-freight/react-lenis";

function App() {
  return (
    <ReactLenis root>
      <main className="bg-[#EDE8F5]">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </ReactLenis>
  );
}

export default App;
