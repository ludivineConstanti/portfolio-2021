import * as THREE from "three";
import nx from "./textures/nx.png";
import ny from "./textures/ny.png";
import nz from "./textures/nz.png";
import px from "./textures/px.png";
import py from "./textures/py.png";
import pz from "./textures/pz.png";

let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

let scene;
let renderer;
let activeHelper;
let cameraPerspective;
let cameraPerspectiveHelper;
let bubble;
let texture;
let requestId = false;

function createScene(container) {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ canvas: container });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  renderer.autoClear = false;

  cameraPerspective = new THREE.PerspectiveCamera(
    50, // field of view
    aspect, // aspect ration (width / height)
    200, // nearPlane
    1500 // farPlane
  );

  cameraPerspectiveHelper = new THREE.CameraHelper(cameraPerspective);
  scene.add(cameraPerspectiveHelper);

  activeHelper = cameraPerspectiveHelper;

  // counteract different front orientation of cameras vs rig
  cameraPerspective.rotation.y = Math.PI;
}

function Bubble() {
  this.target = new THREE.Object3D();
  this.group = new THREE.Object3D();

  const cubeGeom = new THREE.BoxGeometry(150, 150, 150);

  const mat = new THREE.MeshStandardMaterial({
    transparent: true,
    envMap: texture,
    opacity: 0.2,
    roughness: 0,
    metalness: 0.2,
    // allow inside and outside plane of the geometry to be visible
    side: THREE.DoubleSide,
    flatShading: true,
  });

  // To create an object in Three.js, we have to create a mesh
  // which is a combination of a geometry and some material
  this.cube = new THREE.Mesh(cubeGeom, mat);
  this.group.add(this.cube);

  const sphereGeom = new THREE.IcosahedronBufferGeometry(280, 7);

  const matInside = new THREE.MeshStandardMaterial({
    transparent: true,
    envMap: texture,
    opacity: 0.2,
    roughness: 0,
    metalness: 0.2,
    side: THREE.FrontSide,
  });

  this.sphereOutside = new THREE.Mesh(sphereGeom, matInside);
  this.group.add(this.sphereOutside);

  this.group.position.x = -100;

  this.target.add(this.group);
  scene.add(this.mesh);
}

function createBubble() {
  bubble = new Bubble();
  scene.add(bubble.target);
}

function handleWindowResize() {
  SCREEN_WIDTH = window.innerWidth;
  SCREEN_HEIGHT = window.innerHeight;
  aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

  cameraPerspective.aspect = aspect;
  cameraPerspective.updateProjectionMatrix();
}

function init(container) {
  createScene(container);
  const loader = new THREE.CubeTextureLoader();
  texture = loader.load([px, ny, nx, nz, pz, py]);
  createBubble();
  window.addEventListener("resize", handleWindowResize, false);
  animationLoop();
}

function render() {
  const r = Date.now() * 0.0001;

  bubble.target.position.set(
    700 * Math.cos(r),
    700 * Math.sin(r),
    700 * Math.sin(r)
  );

  bubble.target.rotation.x -= 0.001 * Math.cos(r);
  bubble.target.rotation.z -= 0.001 * Math.sin(r);
  bubble.target.rotation.y -= 0.001 * Math.sin(r);

  cameraPerspective.lookAt(bubble.target.position);

  renderer.clear();

  activeHelper.visible = false;

  renderer.setViewport(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  renderer.render(scene, cameraPerspective);

  activeHelper.visible = true;
}

function animationLoop() {
  requestId = requestAnimationFrame(animationLoop);
  render();
}

function cancelLoop() {
  cancelAnimationFrame(requestId);
}

export { init, cancelLoop, handleWindowResize };
