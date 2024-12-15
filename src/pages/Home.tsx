function HeroSection() {
  return (
    <div className="w-screen h-screen bg-[#7091E6] flex items-center justify-center flex-col gap-2 fixed z-0">
      <h1 className="font-bold text-6xl uppercase">Blink Analytics</h1>
      <div className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        architecto.
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex w-screen flex-col">
      <HeroSection />

      <div className="bg-white h-screen z-[1] relative top-[100vh] rounded-t-2xl" />
    </div>
  );
}
