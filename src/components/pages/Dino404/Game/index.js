import { useRef, useEffect } from "react";

import { init } from "../settings/main.js";
import { SGame } from "./SGame";

const Game = () => {
  const container = useRef();

  useEffect(() => {
    init(container.current);
  }, []);

  return (
    <SGame>
      <canvas ref={container}></canvas>
    </SGame>
  );
};

export default Game;
