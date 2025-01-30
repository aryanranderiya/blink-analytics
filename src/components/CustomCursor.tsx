export default function CustomCursor({
  position,
  delayedPosition,
}: {
  position: { x: number; y: number };
  delayedPosition: { x: number; y: number };
}) {
  return (
    <>
      {/* Small cursor effect */}
      {/* <div
        className={`fixed rounded-full h-[15px] w-[15px] bg-[#00ff7b] duration-75 transition-transform z-20 pointer-events-none`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      ></div> */}

      {/* Large blurred effect */}
      <div
        className={`fixed rounded-full h-[30vw] w-[30vw] bg-purple-600 bg-opacity-10 blur-3xl z-10 pointer-events-none`}
        style={{
          left: delayedPosition.x,
          top: delayedPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Medium blurred effect */}
      <div
        className={`fixed rounded-full h-[7vw] w-[7vw] bg-purple-600 bg-opacity-50 blur-3xl z-10 pointer-events-none`}
        style={{
          left: delayedPosition.x + 40,
          top: delayedPosition.y - 40,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Extra large blurred effect */}
      <div
        className={`fixed rounded-full h-[70vw] w-[70vw] bg-[#00ff7b] bg-opacity-5 blur-3xl z-0 pointer-events-none`}
        style={{
          left: delayedPosition.x,
          top: delayedPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  );
}
