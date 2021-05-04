import { useRef, useEffect } from "react";

import { init } from "./settings/main.js";
import Title from "components/elements/Title";

const Dino404 = () => {
  const container = useRef();
  useEffect(() => {
    init(container.current);
  }, []);
  return (
    <>
      <Title color="#4285F4">Dino 404</Title>
      <div ref={container} style={{ height: "100vh" }}></div>
    </>
  );
};

export default Dino404;
