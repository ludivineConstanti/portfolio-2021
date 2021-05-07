import * as THREE from "three";

import { scene } from "../settings/scene.js";

import { dinoSpeed } from "../settings/main.js";

// makes dino available to global scope
let dino;
const dinoPosX = -120;

let jumpDuration = 0;
let landed = false;

// positions are a nightmare to update when need to change it in translate + set + the children
// + animation functions...
// here, we can update everything at once
// put every settings influenced by translate

// set position for the translated object => opposite of translation
// (+ whatever value we wanted)
// children = same as translation (+ translation value)

// Body
// the body's position is dependent on the feet
// (cause it can't float)
// so its center should be lower
const bodyYTranslate = 10;
const bodyY = -24 - bodyYTranslate;
// Head
const headXTranslate = 5;
const headYTranslate = 10;
const headX = 4 - headXTranslate;
const headY = 24 - headYTranslate + bodyYTranslate;
// Head children
const eyeRX = -7.5 + headXTranslate;
const eyeRY = 2.5 + headYTranslate;
const eyeLX = eyeRX;
const eyeLY = eyeRY;
const mouthXTranslate = 6;
const mouthX = 0 - mouthXTranslate + headXTranslate;
const mouthY = -11.5 + headYTranslate;
// Arms
const armXTranslate = 3.5;
const armRX = 2 - armXTranslate;
const armRY = 8 + bodyYTranslate;
// Arms children
const handX = 2 + armXTranslate;
// Legs
const legXTranslate = 0;
const legYTranslate = -6;
const legRX = 0 - legXTranslate;
const legRY = -8 - legYTranslate + bodyYTranslate;
// Legs children
const footXTranslate = 4;
const footYTranslate = -1.5;
const footX = 0.5 - footXTranslate + legXTranslate;
// Foot doesn't need the bodyYTranslate value since leg already takes it into account
// and children's position is relative to their parent
const footY = -7 - footYTranslate + legYTranslate;
// Tail
const tailY = -4 + bodyYTranslate;
// Tail1
const tailYTranslate = 6;
const tail1Y = -tailYTranslate;
// Tail1's child
const tail2Y = 3 + tailYTranslate;

function updateVertices(arrVertices, val = { x: 0, y: 0, z: 0 }, geom) {
  const posAttribute = geom.attributes.position;

  for (let i = 0; i < arrVertices.length; i++) {
    const x = posAttribute.getX(arrVertices[i]) + val.x;
    const y = posAttribute.getY(arrVertices[i]) + val.y;
    const z = posAttribute.getZ(arrVertices[i]) + val.z;

    posAttribute.setXYZ(arrVertices[i], x, y, z);
  }
}

function Dino(mats) {
  this.mesh = new THREE.Object3D();

  // radius top, radius bottom, height, number of faces on the side, number of faces vertically
  const bodyGeom = new THREE.CylinderBufferGeometry(7, 7, 28, 6, 2);

  // TOP Front
  // buffer geometry doesn't automatically update all vertices that should be grouped together
  // vertices that alway need to be updates together are in the array
  updateVertices([0, 6, 27, 33], { x: -2, y: 0, z: 0 }, bodyGeom);
  updateVertices([3, 30], { x: -2, y: 0, z: 0 }, bodyGeom);
  // Front right
  updateVertices([1, 28], { x: -2, y: 0, z: -1 }, bodyGeom);
  // Front left
  updateVertices([2, 29], { x: -2, y: 0, z: 1 }, bodyGeom);
  // Back right
  updateVertices([5, 32], { x: 0, y: 0, z: -0.5 }, bodyGeom);
  // Back left
  updateVertices([4, 31], { x: 0, y: 0, z: 0.5 }, bodyGeom);

  // MIDDLE Front right
  updateVertices([8], { x: 6, y: -2, z: 2 }, bodyGeom);
  // Front left
  updateVertices([9], { x: 6, y: -2, z: -2 }, bodyGeom);
  // Middle right
  updateVertices([7, 13], { x: 2, y: -6, z: 4 }, bodyGeom);
  // Middle left
  updateVertices([10], { x: 2, y: -6, z: -4 }, bodyGeom);
  // Back right
  updateVertices([12], { x: -3, y: -2, z: 3.5 }, bodyGeom);
  // Back left
  updateVertices([11], { x: -3, y: -2, z: -3.5 }, bodyGeom);

  // BOTTOM Front right
  updateVertices([15, 41], { x: 2, y: 3, z: 0 }, bodyGeom);
  // Front left
  updateVertices([16, 42], { x: 2, y: 3, z: 0 }, bodyGeom);
  // Middle right
  updateVertices([14, 20, 40, 46], { x: 0, y: 0, z: 1 }, bodyGeom);
  // Middle left
  updateVertices([17, 43], { x: 0, y: 0, z: -1 }, bodyGeom);
  // Back right
  updateVertices([19, 45], { x: -2, y: 4, z: 2 }, bodyGeom);
  // Back left
  updateVertices([18, 44], { x: -2, y: 4, z: -2 }, bodyGeom);

  this.body = new THREE.Mesh(bodyGeom, mats.red);
  bodyGeom.applyMatrix4(
    new THREE.Matrix4().makeTranslation(0, bodyYTranslate, 0)
  );
  this.body.position.set(-5, bodyY, 0);
  this.mesh.add(this.body);

  const armGeom = new THREE.BoxBufferGeometry(7, 3, 3);
  // modify the arm's origin
  armGeom.applyMatrix4(
    new THREE.Matrix4().makeTranslation(armXTranslate, 0, 0)
  );
  this.armR = new THREE.Mesh(armGeom, mats.red);
  // modify the arm's position
  this.armR.position.set(armRX, armRY, 9.5);
  this.body.add(this.armR);

  const handGeom = new THREE.BoxBufferGeometry(3, 3, 3);
  this.hand = new THREE.Mesh(handGeom, mats.red);
  this.hand.position.set(handX, -1.5, 0);
  this.armR.add(this.hand);

  this.armL = this.armR.clone();
  this.armL.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, -1));
  this.body.add(this.armL);

  // width, height, depth, width segments, height segments
  const legGeom = new THREE.BoxBufferGeometry(13, 14, 8, 1, 2);
  legGeom.applyMatrix4(
    new THREE.Matrix4().makeTranslation(legXTranslate, legYTranslate, 0)
  );

  // TOP Front right
  updateVertices([0, 15, 21], { x: -4, y: 0, z: -4 }, legGeom);
  // Front left
  updateVertices([1, 13, 26], { x: -4, y: 0, z: 0 }, legGeom);

  // Back right
  updateVertices([7, 14, 20], { x: 2, y: 0, z: -4 }, legGeom);
  // Back left
  updateVertices([6, 12, 27], { x: 2, y: 0, z: 0 }, legGeom);

  // BOTTOM
  // Front Right
  updateVertices([4, 17, 25], { x: -6, y: 0, z: -2 }, legGeom);
  // Front Left
  updateVertices([5, 19, 30], { x: -6, y: 0, z: 0 }, legGeom);
  // Back Right
  updateVertices([11, 16, 24], { x: 2, y: 0, z: -2 }, legGeom);
  // Back Left
  updateVertices([10, 18, 31], { x: 2, y: 0, z: 0 }, legGeom);

  this.legR = new THREE.Mesh(legGeom, mats.red);
  this.legR.position.set(legRX, legRY, 10);
  this.body.add(this.legR);

  const footGeom = new THREE.BoxBufferGeometry(10, 3.5, 5);
  // modify foot's origin
  footGeom.applyMatrix4(
    new THREE.Matrix4().makeTranslation(footXTranslate, footYTranslate, 0)
  );
  this.foot = new THREE.Mesh(footGeom, mats.red);
  // modify foot's final position
  this.foot.position.set(footX, footY, -1);
  this.legR.add(this.foot);

  this.legL = this.legR.clone();
  // modify the leg's center
  // without it, the leg is not properly mirrored
  // but it's not possible to tell, since the dino is not seen from this side
  //this.legL.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
  this.legL.position.set(legRX, legRY, -10);
  this.body.add(this.legL);

  this.tail = new THREE.Object3D();
  this.tail.position.set(-11, tailY, 0);
  //this.tail.position.set(-50, -2.5, 0);
  this.tail.rotation.set(0, 0, Math.PI / 2);
  this.body.add(this.tail);

  const tailGeom = new THREE.BoxBufferGeometry(13, 12, 12);
  tailGeom.applyMatrix4(
    new THREE.Matrix4().makeTranslation(0, tailYTranslate, 0)
  );
  // TOP Front right
  updateVertices([0, 11, 17], { x: -1, y: -3, z: -2 }, tailGeom);
  // Front left
  updateVertices([1, 9, 20], { x: -1, y: -3, z: 2 }, tailGeom);

  // Back right
  updateVertices([5, 10, 16], { x: 4, y: 0, z: -2 }, tailGeom);
  // Back left
  updateVertices([4, 8, 21], { x: 4, y: 0, z: 2 }, tailGeom);

  //BOTTOM

  // Back right
  updateVertices([7, 12, 18], { x: 0, y: 0, z: -1 }, tailGeom);
  // Back left
  updateVertices([6, 14, 23], { x: 0, y: 0, z: 1 }, tailGeom);

  // tail is rotated, so modify x for global y
  // and y for global x
  this.tail1 = new THREE.Mesh(tailGeom, mats.red);
  this.tail1.position.set(0, tail1Y, 0);

  this.tail.add(this.tail1);

  this.tail2 = this.tail1.clone();
  this.tail2.scale.set(0.7, 0.7, 0.7);
  this.tail2.position.set(1, tail2Y, 0);
  this.tail2.rotation.set(0, 0, -Math.PI / 4);
  this.tail1.add(this.tail2);

  this.tail3 = this.tail2.clone();
  //this.tail3.position.set(0, 0, 0);
  this.tail3.scale.set(0.7, 0.7, 0.7);
  this.tail2.add(this.tail3);

  // 1:X 2:Y 3:Z
  // Always use BufferGeometry instead of Geometry, it’s faster.
  // ref => https://discoverthreejs.com/tips-and-tricks/
  const headGeom = new THREE.BoxBufferGeometry(30, 20, 20);
  // modify the arm's origin
  headGeom.applyMatrix4(
    new THREE.Matrix4().makeTranslation(headXTranslate, headYTranslate, 0)
  );
  // To create an object in Three.js, we have to create a mesh
  // which is a combination of a geometry and some material
  this.head = new THREE.Mesh(headGeom, mats.red);
  this.head.position.set(headX, headY, 0);
  this.body.add(this.head);

  const eyeGeom = new THREE.BoxBufferGeometry(5, 5, 5);
  this.eyeR = new THREE.Mesh(eyeGeom, mats.white);
  this.eyeL = this.eyeR.clone();
  // 1:X 2:Y 3:Z
  // X => negative values to the left, positive values to the right
  // the added cube is by default in the middle
  this.eyeR.position.set(eyeRX, eyeRY, 9);
  this.eyeL.position.set(eyeLX, eyeLY, -9);
  this.head.add(this.eyeR);
  this.head.add(this.eyeL);

  // Can not access the vertices if ues BufferGeometry
  const mouthGeom = new THREE.BoxBufferGeometry(14, 3, 14);
  mouthGeom.applyMatrix4(
    new THREE.Matrix4().makeTranslation(mouthXTranslate, 0, 0)
  );

  // Need to make reference to the geometry, to modify its vertices, not to the final result
  // Right side
  updateVertices(2, { x: -3, y: 0, z: -3 }, mouthGeom);
  updateVertices(7, { x: 0, y: 0, z: -3 }, mouthGeom);
  // Left side
  updateVertices(3, { x: -3, y: 0, z: 3 }, mouthGeom);
  updateVertices(6, { x: 0, y: 0, z: 3 }, mouthGeom);

  this.mouth = new THREE.Mesh(mouthGeom, mats.red);
  // Y => negative values to the bottom, positive values to the top
  this.mouth.position.set(mouthX, mouthY, 0);
  this.head.add(this.mouth);
}

const createDino = function (mats) {
  // name of the instance = new instance of the function
  // the variable of the instance needs to be declared somewhere in the global scope
  dino = new Dino(mats);
  dino.mesh.position.x = dinoPosX;
  // Need to put name of the object (or of the "container") we want to render
  scene.add(dino.mesh);
};

// ref => https://codepen.io/Yakudoo/pen/qXaNeN?editors=0010
Dino.prototype.run = function () {
  // X => Math.cos()
  // Y => Math.sin()
  // X : Y values =>
  // angle   0 =>  1 :  0
  // angle  90 =>  0 :  1
  // angle 180 => -1 :  0
  // angle 270 =>  0 : -1
  // always 1 step late / in advance compared to the other
  // choose the z value depending on which one want to be synchrone with

  // Rotation => will make a full circle when reaches 2PI
  // cos and sin are between -1 and 1
  // will never make a full circle unless multiplies by an other value

  // turn opposite to the clockwise direction
  // need to use negative sin and cos if want it to turn in the other direction

  this.body.rotation.z = Math.cos(dinoSpeed * 2) * 0.15 - 0.3;
  this.body.rotation.y = Math.cos(dinoSpeed) * 0.2;

  //this.head.position.y = Math.sin(dinoSpeed) * 0.1;
  //this.head.rotation.z = -Math.cos(dinoSpeed + Math.PI) * 0.03;
  this.head.rotation.z = Math.cos(dinoSpeed * 2) * 0.1;
  this.mouth.rotation.z = -Math.cos(dinoSpeed * 2 + Math.PI) * 0.08;

  this.armR.rotation.z = -Math.cos(dinoSpeed) * 0.5;

  this.tail1.rotation.z = Math.cos(dinoSpeed * 2) * 0.2;
  this.tail2.rotation.z = Math.cos(dinoSpeed * 2) * 0.1 - Math.PI / 4;
  this.tail3.rotation.z = Math.cos(dinoSpeed * 2) * 0.1 - Math.PI / 4;

  this.legR.position.y = -(Math.sin(dinoSpeed) * 2) + legRY;
  this.legR.rotation.z = Math.cos(dinoSpeed);
  this.foot.rotation.z = -Math.cos(dinoSpeed) * 0.5;

  this.legL.position.y = -(Math.sin(dinoSpeed + Math.PI) * 2) + legRY;
  this.legL.rotation.z = Math.cos(dinoSpeed + Math.PI);
};

Dino.prototype.jump = function () {
  landed = false;
  if (this.mesh.position.y < 80) {
    this.mesh.position.y += 12;
  }
  this.body.rotation.z = -Math.PI / 10;
  if (this.legR.rotation.z < Math.PI / 2.5) {
    this.legR.rotation.z += 0.6;
  }
  if (this.legL.rotation.z < Math.PI / 2.5) {
    this.legL.rotation.z += 0.6;
  }
  jumpDuration++;
};

Dino.prototype.land = function () {
  if (this.legL.rotation.z > 0.4) {
    this.legL.rotation.z -= 0.2;
  }
  if (this.legR.rotation.z > 0.4) {
    this.legR.rotation.z -= 0.2;
  }
  if (this.armR.rotation.z > -Math.PI / 4) {
    this.armR.rotation.z -= 0.1;
  }
  if (this.mesh.position.y > 0) {
    this.mesh.position.y -= 10;
    landed = false;
  }
  // makes sure that the Dino doesn't go below the ground
  if (this.mesh.position.y < 0) {
    this.mesh.position.y = Math.max(0, this.mesh.position.y);
  }
  if (this.mesh.position.y === 0) {
    landed = true;
    jumpDuration = 0;
  }
};

export { createDino, dino, jumpDuration, landed, dinoPosX };
