import { useRef, useState, useEffect } from "react";

import { init, cancelLoop, isJumping } from "../tJsSettings/main.js";
import { handleWindowResize } from "../tJsSettings/scene.js";
import { SGame, SCanvas } from "./SGame";
import GameUX from "../GameUX";

const Game = () => {
  const container = useRef();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    init(container.current);
    window.addEventListener("resize", handleWindowResize, false);
    window.addEventListener("keydown", isJumping);
    window.addEventListener("click", isJumping);
    window.addEventListener("touchstart", isJumping);
    setIsReady(true);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("keydown", isJumping);
      window.removeEventListener("click", isJumping);
      window.removeEventListener("touchStart", isJumping);
      cancelLoop();
    };
  }, []);

  return (
    <SGame>
      <SCanvas ref={container}></SCanvas>
      {isReady && <GameUX />}
    </SGame>
  );
};

export default Game;
