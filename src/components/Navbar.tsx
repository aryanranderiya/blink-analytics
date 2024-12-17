import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavbarComponent() {
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const [isTextVisible, setisTextVisible] = useState(false);

  const navItems = ["Home", "About Us", "Services", "Contact Us"];

  useEffect(() => {
    // Trigger text animation when the menu is visible
    if (isMenuVisible) {
      setTimeout(() => setisTextVisible(true), 200); // Delay to ensure menu visibility
    } else {
      setisTextVisible(false);
    }
  }, [isMenuVisible]);

  const getTextStyle = (index) => {
    return {
      transform: isTextVisible ? "translateY(0)" : "translateY(150%)",
      // opacity: isTextVisible ? 1 : 0,
      transitionDelay: "50ms",
      transitionDuration: `${(index + 1) * 250}ms`,
    };
  };

  return (
    <header className="flex w-screen left-0 py-6 px-8 fixed top-0 z-[50] items-center">
      <div className="font-[800] text-2xl uppercase text-white nav-text">
        Blink Analytics
      </div>

      <div
        className="ml-auto bg-white p-2 rounded-full bg-opacity-20 backdrop-blur-lg border-white border-[2px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer menu-button-container"
        onClick={() => setisMenuVisible(true)}
      >
        <MenuIcon width={18} className="text-white menu-button" />
      </div>

      <div
        className={`fixed z-[10] top-0 ${
          isMenuVisible ? "right-0" : "right-[-100%]"
        } transition-all duration-400 h-screen w-[28vw] rounded-tl-[20px] rounded-bl-[20px] bg-[#E3EDFD] bg-opacity-60 shadow-lg flex flex-col items-start px-6 py-8 backdrop-blur-lg`}
      >
        <div
          className="ml-auto bg-black p-2 rounded-full bg-opacity-20 backdrop-blur-lg border-white border-[2px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer menu-button-container"
          onClick={() => setisMenuVisible(false)}
        >
          <X width={20} color="white" />
        </div>

        <nav className="mt-8 w-full text-black text-xl flex flex-col gap-[10px] pl-10 h-full">
          {navItems.map((item, index) => (
            <div className="overflow-hidden py-[20px]">
              <div
                key={index}
                className="cursor-pointer font-medium uppercase text-[5vw] nav-text-item transition-all bebasneue"
                style={getTextStyle(index)}
              >
                {item}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
