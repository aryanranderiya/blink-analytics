import { MenuIcon } from "lucide-react";

export default function NavbarComponent() {
  return (
    <div className="flex w-full p-10 fixed top-0 z-10 items-center">
      <div className="font-bold text-lg uppercase text-white">
        Blink Analytics
      </div>

      <div className="ml-auto bg-white p-2 rounded-full bg-opacity-20 backdrop-blur-lg outline outline-white outline-[1px] w-[50px] h-[50px] flex items-center justify-center">
        <MenuIcon width={18} fill="white" color="white" />
      </div>
    </div>
  );
}
