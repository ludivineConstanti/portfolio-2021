import { useRef, useEffect } from "react";

import { init } from "../settings/main.js";

const Dino404 = () => {
  const container = useRef();

  useEffect(() => {
    init(container.current);
  }, []);

  return (
    <canvas
      ref={container}
      style={{
        display: "block",
        margin: "auto",
      }}
    ></canvas>
  );
};

export default Dino404;
