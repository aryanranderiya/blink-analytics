import { MenuIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

export default function NavbarComponent() {
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Generative AI", link: "/generative-ai" },
    { title: "Data Analytics", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];

  const navRef = useRef(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const handleMouseEnter = () => {
    gsap.timeline()
      .to(logoRef.current, {
        scale: 0.5,
        duration: 0.2,
        ease: "power3.in",
        y: "-25px",
        x: "55px"
      })
      .to(
        textRef.current,
        {
          opacity: 1,
          y: "-20px",
          duration: 0.3,
          delay: 0.2,
          ease: "power3.out",
        },
        "<"
      );
  };

  const handleMouseLeave = () => {
    gsap.timeline()
      .to(textRef.current, {
        opacity: 0,
        y: "0",
        duration: 0.3,
        ease: "power2.in",
      })
      .to(
        logoRef.current,
        {
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
          y: "0",
          x: "0"
        },
        "<"
      );
  };

  useEffect(() => {
    const navItems = navRef.current.querySelectorAll(".nav-text-item");

    if (isMenuVisible) {
      gsap.fromTo(
        navItems,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(navItems, {
        y: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isMenuVisible]);

  return (
    <>
      <header className={`flex w-screen left-0 py-4 px-8 fixed top-0' z-[50] items-center rounded-b-3xl overflow-hidden`} >
        <Link to={"/"}>
        <div
        className="relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={logoRef}
          className="w-[60px] h-[60px] rounded-full mx-auto flex items-center justify-center"
        >
          <img src="../src/assets/logo-alone.png" alt="" />
        </div>
        <div
          ref={textRef}
          className="absolute bebasneue tracking-wide top-8 left-[0%] text-white whitespace-nowrap opacity-0 text-[2vw]"
        >
          Blink Analytics
        </div>
      </div>

        </Link>

        <div
          className={`ml-auto bg-white p-2 rounded-full bg-opacity-20 backdrop-blur-lg ${
            isMenuVisible ? "border-black" : "border-white"
          } border-[2px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer menu-button-container`}
          onClick={() => setisMenuVisible((old) => !old)}
        >
          {isMenuVisible ? (
            <X width={20} color="#112241" />
          ) : (
            <MenuIcon width={18} color="white" />
          )}
        </div>
      </header>

      <div
        className={`fixed z-[10] top-0 ${
          isMenuVisible ? "right-0" : "right-[-100%]"
        } transition-all duration-400 h-screen w-[25vw] rounded-tl-[20px] rounded-bl-[20px] bg-[#ede8f5] shadow-lg flex flex-col items-start py-6 px-8 backdrop-blur-lg`}
      >
        <nav
          ref={navRef}
          className="mt-[80px] w-full text-black text-xl flex flex-col gap-[20px] pl-5 h-full"
        >
          {navItems.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <div
                className="cursor-pointer font-bold select-none uppercase text-[2vw] nav-text-item relative group inline-block py-[20px]"
                onClick={() => {
                  navigate(item.link);
                  setisMenuVisible(false);
                }}
              >
                {item.title}
                <div className="absolute rounded-full bottom-0 left-0 w-0 h-[5px] bg-black transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
