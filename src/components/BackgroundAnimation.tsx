import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const BackgroundAnimation = () => {
  const lottieCount = 10; // Number of Lottie animations
  const animations = Array.from({ length: lottieCount }, (_, i) => i);

  return (
    <div className="absolute w-full h-screen top-0 left-0">
      {animations.map((key) => {
        const randomSize = Math.random() * 100 + 100; // Random size between 50px and 150px
        const randomTop = Math.random() * 100; // Random position (top) in viewport
        const randomLeft = Math.random() * 100; // Random position (left) in viewport

        return (
          <DotLottieReact
            key={key}
            src="https://lottie.host/ece5cb28-a251-4819-9fbe-8656c52f872b/xVnimYcPlI.lottie"
            loop
            autoplay
            style={{
              position: 'absolute',
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              pointerEvents: 'none', // Prevents interaction
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundAnimation;
