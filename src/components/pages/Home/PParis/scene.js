import * as THREE from "three";

// import { OrbitControls } from "helpers/OrbitControls.js";
import { GLTFLoader } from "helpers/GLTFLoader.js";

import paris from "./paris.gltf";
import mWater from "./textures/waterT4.jpg";
import mTrees from "./textures/treesT1.png";
import mTreesWhite from "./textures/treesT2.jpg";
import mWalls from "./textures/wallsT3.jpg";
import mRoofs from "./textures/roofsT1.jpg";
import mRoads from "./textures/roadsT1.png";
import mGrass from "./textures/grassT4.jpg";

let scene,
  camera,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  HEIGHT,
  WIDTH,
  renderer;
let group;
// let controls;
let requestId = false;

function init(container) {
  // set up the scene, the camera and the renderer
  createScene(container);

  // add the objects
  createModel();

  // start a loop that will update the objects' positions
  // and render the scene on each frame
  loop();

  // controls = new OrbitControls(camera, renderer.domElement);
  // controls.noPan = true;
  // controls.noZoom = true;
}

function createScene(container) {
  // Get the width and the height of the screen,
  // use them to set up the aspect ratio of the camera
  // and the size of the renderer.
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;

  // Create the scene
  scene = new THREE.Scene();

  // Create the camera
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  nearPlane = 10;
  farPlane = 1000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  // Set the position of the camera
  camera.position.x = 0;
  camera.position.z = 50;
  camera.position.y = 0;

  // Create the renderer
  renderer = new THREE.WebGLRenderer({
    canvas: container,
    // Allow transparency
    alpha: true,
    // Activate the anti-aliasing; this is less performant
    // (better to not use it for high poly complex projects)
    antialias: true,
  });

  // Define the size of the renderer; in this case,
  // it will fill the entire screen
  renderer.setSize(WIDTH, HEIGHT);

  // Listen to the screen: if the user resizes it
  // we have to update the camera and the renderer size
  window.addEventListener("resize", handleWindowResize, false);
}

function handleWindowResize() {
  // update height and width of the renderer and the camera
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}

function handleLoad(gltf) {
  const tMRoads = new THREE.TextureLoader().load(mRoads);
  const tMWater = new THREE.TextureLoader().load(mWater);
  const tMRoofs = new THREE.TextureLoader().load(mRoofs);
  const tMGrass = new THREE.TextureLoader().load(mGrass);
  const tMWalls = new THREE.TextureLoader().load(mWalls);
  const tMTrees = new THREE.TextureLoader().load(mTrees);
  const tMTreesWhite = new THREE.TextureLoader().load(mTreesWhite);
  // for some reasons, if I don't push them in an array and try to use them directly
  // it only works for half of them...
  const mesh = [];
  const mats = [
    // roads
    { matcap: tMRoads, color: "#FFF" },
    // water
    { matcap: tMWater, color: "#4B73BC" },
    // roofs
    { matcap: tMRoofs, color: "#457DE1" },
    // grass
    { matcap: tMGrass, color: "#DDEAEE" },
    // walls
    { matcap: tMWalls, color: "#EECCED" },
    // trees blueL1
    { matcap: tMTrees, color: "#FFF" },
    // trees white
    { matcap: tMTreesWhite, color: "#FFF" },
    // trees blueD1
    { matcap: tMTrees, color: "#4B73BC" },
    // trees blue
    { matcap: tMTrees, color: "#538AE6" },
  ];
  gltf.scene.children[0].children.forEach((child) => {
    mesh.push(child);
  });
  mesh.forEach((child, i) => {
    child.material = new THREE.MeshMatcapMaterial({
      flatShading: true,
      color: mats[i].color,
      matcap: mats[i].matcap,
    });
    group.add(child);
  });

  group.scale.set(20, 20, 20);
}

// First let's define an object :
function createModel() {
  const loader = new GLTFLoader();
  group = new THREE.Object3D();
  loader.load(paris, handleLoad);
  group.position.set(-25, -20, 0);
  scene.add(group);
}

function loop() {
  group.rotation.y -= 0.0007;
  group.rotation.x -= 0.0012;
  renderer.render(scene, camera);
  // name it to be able to remove it on unMount, int he component
  requestId = requestAnimationFrame(loop);
}

function cancelLoop() {
  cancelAnimationFrame(requestId);
}

export { init, cancelLoop, handleWindowResize };
