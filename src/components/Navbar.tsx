import gsap from "gsap";
import { MenuIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarComponent() {
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const location = useLocation();

  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about-us" },
    { title: "Services", link: "/services" },
    { title: "Generative AI", link: "/generative-ai" },
    { title: "Data Analytics", link: "/data-analytics" },
    { title: "Careers", link: "/careers" },
    { title: "Contact", link: "/contact" },
  ];

  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setisMenuVisible(false);
  }, [location]);

  useEffect(() => {
    if (!navRef.current) return;
    const navItems = navRef.current?.querySelectorAll(".nav-text-item");

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
      <header
        className={`flex w-screen left-0 sm:px-2 px-0 sm:pr-8 pr-4 fixed top-0 z-[50] items-center rounded-b-[25px] overflow-hidden`}
      >
        <Link to={"/"}>
          <div className="relative cursor-pointer group">
            <div
              ref={logoRef}
              className="size-[100px] rounded-full mx-auto flex items-center justify-center group-hover:scale-75 transition-all"
            >
              <img src="/blink-logo-2-removebg.png" alt="" />
            </div>

            <div
              ref={textRef}
              className="absolute font-medium tracking-wide flex text-white h-full w-fit whitespace-nowrap text-xl opacity-0 group-hover:left-[85px] group-hover:opacity-100 transition-all left-0 top-0 items-center"
            >
              <span>
                Blink Analytics
              </span>
            </div>

          </div>
        </Link>

        <div
          className={`ml-auto bg-white p-2 rounded-full bg-opacity-60 backdrop-blur-lg border-black border-[2px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer menu-button-container`}
          onClick={() => setisMenuVisible((old) => !old)}
        >
          {isMenuVisible ? (
            <X width={20} color="#112241" />
          ) : (
            <MenuIcon width={18} color="black" />
          )}
        </div>
      </header>

      <div
        className={`fixed z-[10] top-0 ${
          isMenuVisible ? "right-0" : "right-[-100%]"
        } transition-all duration-400 h-screen w-[65vw] sm:w-[350px] rounded-tl-[20px] rounded-bl-[20px] bg-[#ede8f5] shadow-lg flex flex-col items-start py-6 sm:px-8 px-3 backdrop-blur-lg`}
      >
        <nav
          ref={navRef}
          className="mt-[80px] w-full text-black sm:text-3xl text-2xl flex flex-col sm:pl-5 pl-3 h-full gap-[20px]"
        >
          {navItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="overflow-hidden relative py-[2px]"
            >
              <div className="cursor-pointer font-bold select-none uppercase  nav-text-item relative group inline-block">
                {item.title}
                <div className="absolute rounded-full -bottom-[5px] left-0 w-0 h-[3px] bg-black transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
