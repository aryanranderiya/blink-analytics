import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const DotBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create vertical lines of dots
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const lineCount = 100; // Number of vertical lines
    const dotsPerLine = 200; // Number of dots per line
    const spacing = 1; // Spacing between lines

    for (let i = 0; i < lineCount; i++) {
      const x = (i - lineCount / 2) * spacing; // Position lines along X-axis
      for (let j = 0; j < dotsPerLine; j++) {
        vertices.push(x); // X coordinate (fixed for each line)
        vertices.push((Math.random() - 0.5) * 50); // Y coordinate (randomized)
        vertices.push((Math.random() - 0.5) * 50); // Z coordinate (randomized)
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({
      color: 0x9c27b0, // Purple color
      size: 0.1, // Size of each dot
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.002; // Slow rotation for a dynamic effect
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 w-full h-full z-[-1] bg-black"
    ></div>
  );
};

export default DotBackground;
