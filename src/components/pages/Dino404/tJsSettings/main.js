// import { OrbitControls } from "../../../../helpers/OrbitControls";

import { createScene, createMats, scene, camera, renderer } from "./scene.js";

import { createDino, dino, jumpDuration, landed } from "../tJsObjects/dino.js";

import { fillFloor, updateFloor } from "../tJsObjects/floor.js";

import { fillSky, updateCloud, createCloud } from "../tJsObjects/clouds.js";

import {
  fillcactusArr,
  updateObstacles,
  putObstacleInScene,
} from "../tJsObjects/obstacles.js";

let dinoSpeed = 0;
let obstacleTimeTracker = 0;
let obstacleSpacing = Math.floor(Math.random() * 60);
let isJumping = false;
let isLanding = false;
let gameSpeed = 5;
let boost = 0;

// let controls;
let mats;

// Basic set up for the scene is based on the tutorial from Karim Maaloul
// https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/
// + some other elements of the code from codepens
// https://codepen.io/Yakudoo

// let controls;

async function init(container) {
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

  // controls = new OrbitControls(camera, renderer.domElement);
  // controls.noPan = true;
  // controls.noZoom = true;
}

function animationLoop(state) {
  //console.log(dino.mesh.position.y);
  // controls.update();
  if (state === "playing") {
    updateCloud(gameSpeed / 10);
    updateFloor(gameSpeed + boost, mats);
    updateObstacles(gameSpeed + boost);

    dinoSpeed += 0.3;
    gameSpeed += 0.001;

    if (landed) {
      isLanding = false;
    }
    // apply the method stocked in the Dino prototype
    // on the dino instance
    if (!isJumping && !isLanding) {
      dino.run();
      boost = 0;
    }
    // can only jump after landing
    // (otherwise, could just press the up key all the time,
    // to avoid all obstacles)
    if (isJumping && !isLanding) {
      dino.jump();
      // I don't like it when the landscape goes too fast (motion sickness)
      // but higher speed helps with the jump
      // (otherwise, the jump needs to last very long to get past the obstacles)
      // so I put a boost speed during the jump
      if (boost < 2) {
        boost += 0.15;
      }
    }
    // The jump needs to be fast, otherwise,
    // it doesn't seem very reactive to the player's action
    if (jumpDuration > 15 && !landed) {
      isJumping = false;
      isLanding = true;
      dino.land();
    }
    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      if (e.key === "ArrowUp" || e.key === " ") {
        e.preventDefault();
        isJumping = true;
      }
    });

    obstacleTimeTracker++;

    if (obstacleTimeTracker === 90 - obstacleSpacing) {
      putObstacleInScene();
      obstacleTimeTracker = 0;
      obstacleSpacing = Math.floor(Math.random() * 60);
    }
  }
  //console.log(renderer.info.render.calls);
  //console.log(renderer.info.render);
  //console.log(boost);

  // call the loop function again
  renderer.render(scene, camera);
  if (state !== "game over") {
    requestAnimationFrame(() => animationLoop(state));
  }
}

export { dinoSpeed, init, renderer, animationLoop };
