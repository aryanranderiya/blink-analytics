import { MenuIcon, X } from "lucide-react";
import { useRef } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import gsap from "gsap";

export default function NavbarComponent() {
  const navbarRef = useRef(null);

  const openNavbar = () => {
    gsap.to(navbarRef.current, {
      x: 0, // Slide to its original position
      duration: 1,
      ease: "power3.out",
    });
  };

  const closeNavbar = () => {
    gsap.to(navbarRef.current, {
      x: "100%", // Slide out of view to the right
      duration: 1,
      ease: "power3.in",
    });
  };

  return (
    <header className="flex w-screen left-0 py-6 px-8 fixed top-0 z-50 items-center ">
      <div className="font-[800] tracking-wide text-2xl uppercase text-white">
        Blink Analytics
      </div>

      {/* Menu Button */}
      <div
        className="ml-auto bg-white p-2 rounded-full bg-opacity-20 backdrop-blur-lg outline outline-white outline-[1px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
        onClick={openNavbar}
      >
        <MenuIcon width={18} fill="white" color="white" />
      </div>

      {/* Navbar Slide-in Panel */}
      <div
        ref={navbarRef}
        className="fixed top-0 right-0 h-screen w-[55%] rounded-tl-[20px] rounded-bl-[20px] bg-[#E3EDFD] bg-opacity-90 shadow-lg flex flex-col items-start px-6 py-8 transform translate-x-full backdrop-blur-lg"
      >
        {/* Close Button */}
        <div
          className="self-end bg-[#ff0000] p-2 rounded-full bg-opacity-70 backdrop-blur-lg outline outline-black outline-[2px] w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
          onClick={closeNavbar}
        >
          <X width={20} color="white" />
        </div>
        {/* Navbar Content */}
        <nav className="mt-8 w-full text-black text-xl">
          <ul className="flex flex-col gap-6 pl-10">
            <li className="cursor-pointer hover:tracking-[3px] hover:text-[4.5vw] hover:line-through decoration-4 decoration-red-500 bebasneue text-[4vw] tracking-wide">Home</li>
            <li className="cursor-pointer hover:tracking-[3px] hover:text-[4.5vw] hover:line-through decoration-4 decoration-red-500 bebasneue text-[4vw] tracking-wide">About Us</li>
            <li className="cursor-pointer hover:tracking-[3px] hover:text-[4.5vw] hover:line-through decoration-4 decoration-red-500 bebasneue text-[4vw] tracking-wide">Services</li>
            <li className="cursor-pointer hover:tracking-[3px] hover:text-[4.5vw] hover:line-through decoration-4 decoration-red-500 bebasneue text-[4vw] tracking-wide">Contact Us</li>
          </ul>
        </nav>
        <div className="bottom mt-auto pl-10 pr-10 flex justify-between align-center w-full">
          <div className="left">
            <h3 className=" bebasneue text-[3vw] tracking-wide text-black">Blink Analytics</h3>
          </div>
          <div className="right flex gap-5 items-center">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={35} className="text-black hover:text-red-500" />
            </a>
            {/* Instagram Icon */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={35} className="text-black hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
