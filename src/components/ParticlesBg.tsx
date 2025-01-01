import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBg = ({ parentRef }: { parentRef: React.RefObject<HTMLElement> }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false }, // Disable fullscreen to control the container
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "push" },
            onHover: { enable: false, mode: "repulse" },
            resize: false,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#38285c" },
          links: {
            color: "#4c408e",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.3 },
          shape: { type: "triangle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: false,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: parentRef?.current?.offsetWidth || "100%",
        height: parentRef?.current?.offsetHeight || "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBg;
