import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";

function Model({ scale }: { scale: number }) {
  const { scene, animations } = useGLTF("../src/assets/scene.gltf");
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    actions["Scene"]?.play();
  }, [actions]);
  return <primitive object={scene} scale={scale} />;
}

function App({ scale }: { scale: number }) {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
      <Suspense>
        <Model scale={scale} />
      </Suspense>
    </Canvas>
  );
}

export default App;
