import { useRef, useState, useEffect } from "react";

import { init } from "../tJsSettings/main.js";
import { handleWindowResize } from "../tJsSettings/scene.js";
import { SGame } from "./SGame";
import GameUX from "../GameUX";

const Game = () => {
  const container = useRef();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    init(container.current);
    setIsReady(true);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <SGame onClick={() => {}}>
      <canvas ref={container}></canvas>
      {isReady && <GameUX />}
    </SGame>
  );
};

export default Game;
