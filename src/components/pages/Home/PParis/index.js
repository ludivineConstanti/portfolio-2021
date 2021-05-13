import { useRef, useEffect } from "react";

import { init, cancelLoop, handleWindowResize } from "./scene";

const PParis = () => {
  const container = useRef();
  useEffect(() => {
    init(container.current);
    return () => {
      cancelLoop();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return <canvas ref={container} style={{ display: "block" }} />;
};

export default PParis;
