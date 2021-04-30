import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const PParis = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/paris.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.planet.geometry} material={materials["texture"]} />
    </group>
  );
};

export default PParis;
