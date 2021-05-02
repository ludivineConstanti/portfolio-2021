import { useRef, useEffect } from "react";

import { init } from "./settings/main.js";

export default function Dino404() {
  const container = useRef();
  useEffect(() => {
    init(container.current);
  }, []);
  return <div ref={container} style={{ height: "100vh" }}></div>;
}
