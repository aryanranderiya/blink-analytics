import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavbarComponent from "./components/Navbar.jsx";

function App() {
  return (
    <main className="bg-[#EDE8F5]">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
