import * as THREE from "three";

// import { OrbitControls } from "helpers/OrbitControls.js";
import { GLTFLoader } from "helpers/GLTFLoader.js";

import paris from "./paris.gltf";
import matcap from "./matcapBW.jpg";
import parisTexture from "./parisTexture.png";

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
  const mesh = gltf.scene.children[0];
  mesh.scale.set(20, 20, 20);
  mesh.rotation.set(0, 0, 0);
  const tMatcap = new THREE.TextureLoader().load(matcap);
  const tMap = new THREE.TextureLoader().load(parisTexture);
  mesh.material = new THREE.MeshMatcapMaterial({
    flatShading: true,
    matcap: tMatcap,
    map: tMap,
  });
  group.add(mesh);
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
