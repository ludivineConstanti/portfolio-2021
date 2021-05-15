import PropTypes from "prop-types";

import { resetGame } from "../tJsSettings/main.js";
import { SButton, SGameOver, SInterface, SScore } from "./SGameUX";
import { routes as r } from "data/routes";
import { projectNumber as pNum } from "../data";
import { removeObstacle } from "../tJsObjects/obstacles";
import { vScale } from "style/SG";

const GameUX = ({ gameState, score, updateValDino404 }) => {
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
            variants={vScale}
            animate="animate"
            initial="initial"
            exit="initial"
            whileHover="whileHover"
            onClick={() => {
              if (gameState === "game over") {
                removeObstacle();
                resetGame();
              }
              updateValDino404({ prop: ["gameState"], value: ["playing"] });
            }}
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
  score: PropTypes.number.isRequired,
  updateValDino404: PropTypes.func.isRequired,
};

export default GameUX;
