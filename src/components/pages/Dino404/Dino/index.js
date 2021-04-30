import { useRef } from "react";

// import { redMat } from "../_helpers/materials";

const Dino = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  return (
    <mesh ref={mesh}>
      <cylinderGeometry args={[0.7, 0.7, 2.8, 6, 2]} />
      <meshPhongMaterial color={"red"} />
    </mesh>
  );
};

export default Dino;
