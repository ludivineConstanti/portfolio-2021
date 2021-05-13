import { useRef, useState, useEffect } from "react";

import { init, cancelLoop } from "../tJsSettings/main.js";
import { handleWindowResize } from "../tJsSettings/scene.js";
import { SGame, SCanvas } from "./SGame";
import GameUX from "../GameUX";

const Game = () => {
  const container = useRef();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    init(container.current);
    setIsReady(true);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      cancelLoop();
    };
  }, []);

  return (
    <SGame onClick={() => {}}>
      <SCanvas ref={container}></SCanvas>
      {isReady && <GameUX />}
    </SGame>
  );
};

export default Game;
