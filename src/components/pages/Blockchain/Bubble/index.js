import { useRef, useEffect } from "react";

import { init, animationLoop, handleWindowResize } from "./scene";

const Bubble = () => {
  const container = useRef();
  useEffect(() => {
    init(container.current);
    return () => {
      cancelAnimationFrame(animationLoop);
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
