import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { animationLoop } from "../tJsSettings/main.js";
import { SButton, SGameOver, SInterface, SScore } from "./SGameUX";
import { routes as r } from "data/routes";
import { projectNumber as pNum } from "../data";

const GameUX = ({ gameState, updateValDino404 }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const updateScore = setInterval(() => {
      setScore((score) => (gameState === "playing" ? score + 1 : score));
    }, 100);

    return () => {
      clearInterval(updateScore);
    };
  }, []);

  useEffect(() => {
    cancelAnimationFrame(animationLoop);
    if (gameState !== "game over") {
      animationLoop(gameState);
      console.log("change game state", gameState);
    }
    return () => {
      cancelAnimationFrame(animationLoop);
    };
  }, [gameState]);
  return (
    <>
      {gameState !== "init" && (
        <SScore s={{ color: r[`project${pNum}`].color }}>{score}</SScore>
      )}
      <SInterface s={{ color: r[`project${pNum}`].color }}>
        {gameState === "game over" && <SGameOver>Game Over!</SGameOver>}
        {gameState !== "playing" && (
          <SButton
            s={{ color: r[`project${pNum}`].color }}
            onClick={() =>
              updateValDino404({ prop: ["gameState"], value: ["playing"] })
            }
          >
            {gameState === "init" ? "Play" : "Try again"}
          </SButton>
        )}
      </SInterface>
    </>
  );
};

GameUX.propTypes = {
  gameState: PropTypes.string.isRequired,
  updateValDino404: PropTypes.func.isRequired,
};

export default GameUX;
