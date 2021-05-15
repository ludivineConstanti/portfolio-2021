// import { OrbitControls } from "../../../../helpers/OrbitControls";
import { breakPointDNum } from "style/g";

import { createScene, createMats, scene, camera, renderer } from "./scene.js";
import { createDino, dino, jumpDuration, landed } from "../tJsObjects/dino.js";
import { fillFloor, updateFloor } from "../tJsObjects/floor.js";
import { fillSky, updateCloud, createCloud } from "../tJsObjects/clouds.js";
import {
  fillcactusArr,
  updateObstacles,
  putObstacleInScene,
} from "../tJsObjects/obstacles.js";

import store from "redux/store";
import { updateValDino404 } from "redux/slices/dino404Slice";

const initial = {
  dinoSpeed: 0,
  obstacleTimeTracker: 0,
  obstacleSpacing:
    window.innerWidth > breakPointDNum
      ? Math.floor(20 + Math.random() * 40)
      : 90,
  gameSpeed: window.innerWidth > breakPointDNum ? 5 : 3,
  isJumping: false,
  isLanding: false,
  boost: 0,
  score: 0,
};
let current = { ...initial };
let requestId = undefined;
let state = store.getState();
let gameState = state.dino404.gameState;

// let controls;
let mats;

// Basic set up for the scene is based on the tutorial from Karim Maaloul
// https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/
// + some other elements of the code from codepens
// https://codepen.io/Yakudoo

// let controls;

function init(container) {
  let mats = createMats();
  // set up the scene, the camera and the renderer
  createScene(container);

  // add the objects
  fillFloor(mats);
  createDino(mats);
  fillSky(mats);
  createCloud(mats);
  fillcactusArr(mats);
  putObstacleInScene(mats);
  animationLoop();

  // controls = new OrbitControls(camera, renderer.domElement);
  // controls.noPan = true;
  // controls.noZoom = true;
}

function isJumping(e) {
  if (gameState === "playing") {
    if (e.key === "ArrowUp" || " " || "w" || e.clientX) {
      e.preventDefault();
      current.isJumping = true;
    }
  }
}

function animationLoop() {
  state = store.getState();
  gameState = state.dino404.gameState;
  // controls.update();
  if (gameState === "playing") {
    current.score += 1;
    store.dispatch(
      updateValDino404({ prop: ["score"], value: [current.score] })
    );
    updateCloud(current.gameSpeed / 10);
    updateFloor(current.gameSpeed + current.boost, mats);
    updateObstacles(current.gameSpeed + current.boost);

    current.dinoSpeed += window.innerWidth > breakPointDNum ? 0.3 : 0.1;
    current.gameSpeed += window.innerWidth > breakPointDNum ? 0.001 : 0.000001;

    if (landed) {
      current.isLanding = false;
    }
    // apply the method stocked in the Dino prototype
    // on the dino instance
    if (!current.isJumping && !current.isLanding) {
      dino.run();
      current.boost = 0;
    }
    // can only jump after landing
    // (otherwise, could just press the up key all the time,
    // to avoid all obstacles)
    if (current.isJumping && !current.isLanding) {
      dino.jump();
      // I don't like it when the landscape goes too fast (motion sickness)
      // but higher speed helps with the jump
      // (otherwise, the jump needs to last very long to get past the obstacles)
      // so I put a boost speed during the jump
      const boostValue = window.innerWidth > breakPointDNum ? 2 : 3;
      if (current.boost < boostValue) {
        current.boost += boostValue / 10;
      }
    }
    // The jump needs to be fast, otherwise,
    // it doesn't seem very reactive to the player's action
    if (jumpDuration > 15 && !landed) {
      current.isJumping = false;
      current.isLanding = true;
      dino.land();
    }

    current.obstacleTimeTracker++;

    if (current.obstacleTimeTracker === 90 - current.obstacleSpacing) {
      putObstacleInScene();
      current.obstacleTimeTracker = 0;
      current.obstacleSpacing = Math.floor(Math.random() * 60);
    }
  }
  //console.log(renderer.info.render.calls);
  //console.log(renderer.info.render);
  //console.log(boost);

  // call the loop function again
  renderer.render(scene, camera);
  requestId = requestAnimationFrame(animationLoop);
}

function cancelLoop() {
  cancelAnimationFrame(requestId);
}

function resetGame() {
  console.log("reset game");
  current = { ...initial };
  console.log(current);
  store.dispatch(updateValDino404({ prop: ["score"], value: [current.score] }));
  dino.updatePos({ y: 0 });
}

export { initial, current, init, renderer, cancelLoop, resetGame, isJumping };
