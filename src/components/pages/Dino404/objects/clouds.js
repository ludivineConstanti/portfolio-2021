import * as THREE from "three";

import {
  scene,
  multiMat,
  Colors,
  assignColor,
  limitR,
  limitL,
} from "../settings/scene.js";

import { BufferGeometryUtils } from "../../../../helpers/BufferGeometry";

let visibleClouds = [];
let invisibleClouds = [];
let cloud;

function createCloud() {
  // Create an empty container that will hold the different parts of the cloud
  const cloudArr = [];

  for (let i = 0; i < 3; i++) {
    const cloudScale = i === 1 ? 20 : 11;
    // Always use BufferGeometry instead of Geometry, it’s faster.
    // ref => https://discoverthreejs.com/tips-and-tricks/
    const geomCloud = new THREE.BoxBufferGeometry(
      cloudScale,
      cloudScale,
      cloudScale
    );
    geomCloud.applyMatrix4(
      new THREE.Matrix4().makeTranslation(
        i * 14,
        i === 1 ? 0 : -4.5,
        -2.5 + Math.random() * 6
      )
    );

    const colorCloud = assignColor(Colors.white, geomCloud);
    geomCloud.setAttribute("color", colorCloud);
    // add the cube to the container we first created
    cloudArr.push(geomCloud);
  }
  const mergedCloud = BufferGeometryUtils.mergeBufferGeometries(
    cloudArr,
    false
  );
  cloud = new THREE.Mesh(mergedCloud, multiMat);
}

function getCloud() {
  if (invisibleClouds.length) {
    return invisibleClouds.pop();
  } else {
    return cloud.clone();
  }
}

function putCloudInSky(posX) {
  const cloud = getCloud();
  cloud.position.y = 20 + Math.random() * 100;
  cloud.position.x = posX || limitR;

  // for a better result, we position the clouds
  // at random depths inside of the scene
  cloud.position.z = -30 - Math.random() * 200;

  // we also set a random scale for each cloud
  const s = 1 + Math.random();
  cloud.scale.set(s, s, s);

  visibleClouds.push(cloud);
  // do not forget to add the mesh of each cloud in the scene
  scene.add(cloud);
}

function fillSky() {
  createCloud();
  for (let i = 0; i < 10; i++) {
    // second value needs to be the double of second one
    // - a => limit of x to the left
    // + a => reset to 0
    // + a => same limit as the left one, but to the right
    const posX = limitL + Math.random() * (limitR * 2);
    putCloudInSky(posX);
  }
}

function updateCloud(speed) {
  for (let i = 0; i < visibleClouds.length; i++) {
    const cloud = visibleClouds[i];
    cloud.position.x -= speed;
    // check if the particle is out of the field of view
    if (cloud.position.x < limitL) {
      scene.remove(cloud);
      // recycle the particle
      invisibleClouds.push(visibleClouds.splice(i, 1)[0]);
      i--;
    }
    if (visibleClouds.length < 6) {
      putCloudInSky();
    }
  }
}

export { fillSky, updateCloud, createCloud };
