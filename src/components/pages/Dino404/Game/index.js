import { useState, useRef, useEffect } from "react";

import { init, loop } from "../settings/main.js";
import { SGame } from "./SGame";
import { createMats } from "../settings/scene";

const Game = () => {
  const container = useRef();
  const [mats, setMats] = useState(false);

  useEffect(() => {
    setMats(createMats());
  }, []);

  useEffect(() => {
    if (mats) {
      setTimeout(() => {
        init(container.current, mats);
      }, 10);
    }
  }, [mats]);

  return (
    <SGame
      onClick={() => {
        loop();
      }}
    >
      <canvas ref={container}></canvas>
    </SGame>
  );
};

export default Game;
