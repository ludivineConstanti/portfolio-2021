import * as THREE from "three";

import matCap from "../assets/matCap.jpg";

let scene,
  camera,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  HEIGHT,
  WIDTH,
  renderer;

let directionalLight;

const limitR = 500;
const limitL = -limitR;

const createScene = function (container) {
  // Get the width and the height of the screen,
  // use them to set up the aspect ratio of the camera
  // and the size of the renderer.
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;

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

  // Create the renderer
  renderer = new THREE.WebGLRenderer({
    // Allow transparency to show the gradient background
    // we defined in the CSS
    alpha: true,

    // Activate the anti-aliasing; this is less performant
    // (better to not use it for high poly complex projects)
    antialias: true,
  });

  // Change the colors => suppose to make it more accurate
  renderer.gammaFactor = 2.2;
  renderer.outputEncoding = THREE.sRGBEncoding;

  // Define the size of the renderer; in this case,
  // it will fill the entire screen
  renderer.setSize(WIDTH, HEIGHT);

  // Enable shadow rendering
  // I decided to prioritize performance over shadows
  // and since I'm struggling to get a good frame rate
  // => goodby shadows
  // renderer.shadowMap.enabled = true;

  // Add the DOM element of the renderer to the
  // container we created in the HTML
  container.appendChild(renderer.domElement);

  // Listen to the screen: if the user resizes it
  // we have to update the camera and the renderer size
  window.addEventListener("resize", handleWindowResize, false);
};

function handleWindowResize() {
  // update height and width of the renderer and the camera
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}

// MATERIALS ************************************************************************

const Colors = {
  red: new THREE.Color(0xef4239).convertSRGBToLinear(),
  blue: new THREE.Color(0x4284f7).convertSRGBToLinear(),
  green: new THREE.Color(0x31ab52).convertSRGBToLinear(),
  yellow: new THREE.Color(0xffbd08).convertSRGBToLinear(),
  white: new THREE.Color(0xffffff).convertSRGBToLinear(),
};

const tMatCap = new THREE.TextureLoader().load(matCap);

// The Mesh Phong Material can reflect the light, unlike the Mesh Lambert material
// It's less accurate than Mesh Standard Material or Mesh Physical Material
// but performance will be better
const redMat = new THREE.MeshMatcapMaterial({
  color: Colors.red,
  flatShading: true,
  matcap: tMatCap,
});

const whiteMat = new THREE.MeshMatcapMaterial({
  color: Colors.white,
  flatShading: true,
  matcap: tMatCap,
});

const whiteMatFloor = new THREE.MeshMatcapMaterial({
  color: Colors.white,
  flatShading: true,
  matcap: tMatCap,
});

const multiMat = new THREE.MeshMatcapMaterial({
  vertexColors: true,
  shading: THREE.FlatShading,
  matcap: tMatCap,
});

function assignColor(color, geom) {
  // ref => https://threejsfundamentals.org/threejs/lessons/threejs-optimize-lots-of-objects.html
  // get the colors as an array of values from 0 to 255
  const rgb = color.toArray().map((v) => v * 255);

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
  scene,
  camera,
  renderer,
  redMat,
  whiteMat,
  whiteMatFloor,
  multiMat,
  Colors,
  assignColor,
  limitR,
  limitL,
};
