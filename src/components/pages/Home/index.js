import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import PParis from "./PParis";
import { SHome, SText, STitle, SPParis } from "./SHome";

// fov => higher number = more perspective + more far away
// default camera values => { fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }

const Home = () => {
  return (
    <SHome>
      <SText>
        <STitle>Welcome!</STitle>
        <p>
          My name is Ludivine Constanti, I am a versatile, multilingual, French
          Art Director developer.
        </p>
      </SText>
      <SPParis>
        <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <PParis />
          </Suspense>
        </Canvas>
      </SPParis>
    </SHome>
  );
};

export default Home;
