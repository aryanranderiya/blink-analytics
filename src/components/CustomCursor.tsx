export default function CustomCursor({
  // position,
  delayedPosition,
}: {
  // position: { x: number; y: number };
  delayedPosition: { x: number; y: number };
}) {
  return (
    <>
      <div
        className={`fixed rounded-full h-[30vw] w-[30vw] bg-purple-600 bg-opacity-10 blur-3xl z-10 pointer-events-none`}
        style={{
          left: delayedPosition.x,
          top: delayedPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Medium blurred effect */}
      <div
        className={`fixed rounded-full h-[7vw] w-[7vw] bg-purple-600 bg-opacity-50 blur-3xl z-10 pointer-events-none`}
        style={{
          left: delayedPosition.x + 40,
          top: delayedPosition.y - 40,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Extra large blurred effect */}
      <div
        className={`fixed rounded-full h-[70vw] w-[70vw] bg-pink-500 bg-opacity-5 blur-3xl z-0 pointer-events-none`}
        style={{
          left: delayedPosition.x,
          top: delayedPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
