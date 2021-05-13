import { useRef, useEffect } from "react";

import { init, cancelLoop, handleWindowResize } from "./scene";

const Bubble = () => {
  const container = useRef();
  useEffect(() => {
    init(container.current);
    return () => {
      cancelLoop();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <canvas
      ref={container}
      style={{
        position: "fixed",
        zIndex: -1,
        filter: "brightness(1.5)",
      }}
    />
  );
};

export default Bubble;
