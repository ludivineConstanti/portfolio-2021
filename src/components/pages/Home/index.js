import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import PParis from "./PParis";
import Title from "components/elements/Title";
import ButtonLink from "components/elements/ButtonLink";
import { STextContainer, SText, STextDeco, SPParis } from "./SHome";
import { routes as r } from "data/routes";

// fov => higher number = more perspective + more far away
// default camera values => { fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }

const Home = () => {
  return (
    <>
      <STextContainer>
        <Title>Welcome!</Title>
        <SText>
          My name is Ludivine Constanti, I am a versatile, multilingual, French{" "}
          <STextDeco>Art Director</STextDeco> developer.
        </SText>
        <ButtonLink path={r.project1.path}>See projects</ButtonLink>
      </STextContainer>
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
    </>
  );
};

export default Home;
