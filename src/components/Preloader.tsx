import { useEffect, useState } from "react";

export default function Preloader() {
  const [initial, setInitial] = useState(false);
  const [state2, setState2] = useState(false);
  const [final, setFinal] = useState(false);
  const [number, setNumber] = useState<number | string>(0);
  const text = [
    "B",
    "L",
    "I",
    "N",
    "K",
    "_",
    "A",
    "N",
    "A",
    "L",
    "Y",
    "T",
    "I",
    "C",
    "S",
  ];

  useEffect(() => {
    setTimeout(() => {
      setInitial(true);
      setTimeout(() => {
        setState2(true);

        const intervalId = setInterval(() => {
          setNumber((old) => {
            if (typeof old === "number") {
              if (old >= 100) {
                clearInterval(intervalId);
                return "welcome!";
              }
              return old + 1;
            }
            return old;
          });
        }, 15);

        setTimeout(() => {
          setFinal(true);
        }, 1500);
      }, 300);
    }, 200);
  }, []);

  return (
    <div
      className={`fixed h-screen w-screen z-50 bg-white duration-700 ease-out transition-all ${
        final ? "top-[-150vh]" : "top-0"
      }`}
    >
      <div
        className={`h-screen fixed left-0 w-screen z-50 bg-gradient-to-b from-[#3D52A0] to-[#7091E6] ${
          final ? "-top-[150vh]" : initial ? "top-0" : "top-[100vh]"
        } transition-all duration-200 flex justify-center items-center`}
      >
        <div
          className={`text-3xl text-white ${
            state2 ? "opacity-100" : "opacity-0"
          } transition-opacity zen-dots-regular`}
        >
          {number}
          {typeof number == "number" ? "%" : ""}
        </div>
        <div className="absolute bottom-[-20px] w-full text-center text-9xl flex justify-center flex-nowrap">
          {text.map((letter, index) => (
            <div
              style={{
                transitionDuration: `${(index + 1) * 70}ms`,
              }}
              className={`transition-all text-[#ADBBDA] bebasneue font-medium leading-none inline-block text-[18vw] h-fit ${
                state2 ? "translate-y-0" : "translate-y-[100%]"
              }`}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
