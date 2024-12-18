import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // React Router hook

export default function NavbarComponent() {
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const [isTextVisible, setisTextVisible] = useState(false);

  const navigate = useNavigate(); // Initialize the React Router navigation hook

  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    if (isMenuVisible) {
      setTimeout(() => setisTextVisible(true), 200); // Trigger stagger animation when menu is visible
    } else {
      setisTextVisible(false); // Reset when the menu is hidden
    }
  }, [isMenuVisible]);

  const getTextStyle = (index: number) => {
    return {
      transform: isTextVisible ? "translateY(0)" : "translateY(150%)",
      opacity: isTextVisible ? 1 : 0,
      transitionDelay: `${index * 20}ms`, // Stagger the transition based on the index
      transitionDuration: "300ms", // Duration for each item
    };
  };

  // Function to split the title into individual letters
  const splitTitle = (title: string) => {
    return title.split("").map((letter, index) => (
      <span key={index} className="inline-block" style={getTextStyle(index)}>
        {letter}
      </span>
    ));
  };

  return (
    <>
      <header className="flex w-screen left-0 py-4 px-8 fixed top-0 z-[50] items-center rounded-b-3xl">
        <Link to={"/"}>
          <div className="text-2xl text-white group relative">
            Blink Analytics
            <div className="absolute rounded-full bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full" />
          </div>
        </Link>

        <div
          className={`ml-auto bg-white p-2 rounded-full bg-opacity-20 backdrop-blur-lg ${
            isMenuVisible ? 'border-black' : 'border-white'
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
        } transition-all duration-400 h-screen w-[40vw] rounded-tl-[20px] rounded-bl-[20px] bg-[#ede8f5] shadow-lg flex flex-col items-start py-6 px-8 backdrop-blur-lg`}
      >
        {/* <div
          className="ml-auto bg-black p-2 rounded-full relative top-[2px] bg-opacity-20 backdrop-blur-lg border-white border-[2px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer menu-button-container"
          onClick={() => setisMenuVisible(false)}
        >
          <X width={20} color="white" />
        </div> */}
        <nav className="mt-[100px] w-full text-black text-xl flex flex-col gap-[20px] pl-5 h-full">
          {navItems.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <div
                className="cursor-pointer font-bold select-none uppercase text-[4vw] nav-text-item relative group inline-block py-[20px]"
                onClick={() => {
                  navigate(item.link);
                  setisMenuVisible(false);
                }}
              >
                {splitTitle(item.title)}

                <div className="absolute rounded-full bottom-0 left-0 w-0 h-[5px] bg-black transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
