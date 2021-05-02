import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const PParis = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const { nodes, materials } = useGLTF("/paris.gltf");
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.x += 0.007;
    mesh.current.rotation.y = mesh.current.rotation.y += 0.0035;
  });
  return (
    <mesh
      ref={mesh}
      geometry={nodes.planet.geometry}
      material={materials["parisTexture"]}
    />
  );
};

export default PParis;
