import * as THREE from "three";

import matcap from "../tJsAssets/mT50.png";
import matcapTest from "../tJsAssets/mR0v4.png";
import matcapFloor from "../tJsAssets/mT70.png";

import { borderMargins3, breakPointDNum } from "style/g";
import { dino, returnDinoX } from "../tJsObjects/dino";
import { initial, current } from "./main";

let scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, renderer;

// need to change it also in handleWindowResize
let HEIGHT;
let WIDTH;
let limitR;

// have a function to return the size, this way I can define it
// in one place and use it in mutliple places afterward
function returnWidth() {
  let tempWidth;
  if (window.innerWidth <= breakPointDNum) {
    tempWidth = window.innerWidth;
    limitR = tempWidth;
  } else {
    tempWidth = window.innerWidth - borderMargins3 * 2;
    limitR = tempWidth / 2.5;
  }
  return tempWidth;
}

function returnHeight() {
  if (window.innerWidth <= breakPointDNum) {
    return window.innerHeight / 3;
  }
  return window.innerHeight / 2;
}

WIDTH = returnWidth();
HEIGHT = returnHeight();

let limitL = -limitR;

const createScene = function (container) {
  // Get the width and the height of the screen,
  // use them to set up the aspect ratio of the camera
  // and the size of the renderer.

  // Create the scene
  scene = new THREE.Scene();

  // fog helps with the transition for the end of the ground
  // color, near, far => depends on the camera
  scene.fog = new THREE.Fog(0xffffff, 140, 500);

  // Create the camera
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  // can not put the near plane to 0
  nearPlane = 10;
  farPlane = 400;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  // Set the position of the camera
  camera.position.x = 0;
  camera.position.z = 200;
  camera.position.y = 0;

  // Create the renderer + add the canvas
  // Need to do it differently if use a div, define afterward
  renderer = new THREE.WebGLRenderer({
    canvas: container,
    // Allow transparency to show the gradient background
    // we defined in the CSS
    alpha: true,

    // Activate the anti-aliasing; this is less performant
    // (better to not use it for high poly complex projects)
    antialias: true,
  });

  // Define the size of the renderer; in this case,
  // it will fill the entire screen
  renderer.setSize(WIDTH, HEIGHT);
};

function handleWindowResize() {
  // update height and width of the renderer and the camera
  HEIGHT = returnHeight();
  WIDTH = returnWidth();
  limitL = -limitR;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
  dino.updatePos({ x: returnDinoX() });
  current.gameSpeed = initial.gameSpeed;
}

// MATERIALS ************************************************************************

function createMats() {
  const Colors = {
    red: "#ef4239",
    blue: "#4284f7",
    green: "#31ab52",
    yellow: "#ffbd08",
    white: "#ffffff",
  };

  const tMatcap = new THREE.TextureLoader().load(matcap);
  const tMatcapTest = new THREE.TextureLoader().load(matcapTest);
  const tMatcapFloor = new THREE.TextureLoader().load(matcapFloor);

  // The Mesh Phong Material can reflect the light, unlike the Mesh Lambert material
  // It's less accurate than Mesh Standard Material or Mesh Physical Material
  // but performance will be better
  const red = new THREE.MeshMatcapMaterial({
    color: Colors.red,
    flatShading: true,
    matcap: tMatcapTest,
  });

  const white = new THREE.MeshMatcapMaterial({
    color: Colors.white,
    flatShading: true,
    matcap: tMatcap,
  });

  const whiteFloor = new THREE.MeshMatcapMaterial({
    color: Colors.white,
    flatShading: true,
    matcap: tMatcapFloor,
  });

  const multi = new THREE.MeshMatcapMaterial({
    vertexColors: true,
    flatShading: true,
    matcap: tMatcap,
  });

  return { Colors, red, white, whiteFloor, multi };
}

function assignColor(color, geom) {
  // ref => https://threejsfundamentals.org/threejs/lessons/threejs-optimize-lots-of-objects.html
  // get the colors as an array of values from 0 to 255
  const rgb = new THREE.Color(color).toArray().map((v) => v * 255);

  // make an array to store colors for each vertex
  const numVerts = geom.getAttribute("position").count;
  const itemSize = 3; // r, g, b
  const colors = new Uint8Array(itemSize * numVerts);

  // copy the color into the colors array for each vertex
  colors.forEach((v, ndx) => {
    colors[ndx] = rgb[ndx % 3];
  });

  const normalized = true;
  const colorAttrib = new THREE.BufferAttribute(colors, itemSize, normalized);
  return colorAttrib;
}

export {
  createScene,
  createMats,
  handleWindowResize,
  scene,
  camera,
  renderer,
  assignColor,
  limitR,
  limitL,
  WIDTH,
};
