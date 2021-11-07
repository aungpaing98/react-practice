import * as THREE from "three";
import { useState, useRef, useEffect } from "react";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { useSpring, a } from "@react-spring/three";

const Controls = () => {
  extend({ OrbitControls });
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });
  return (
    <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
  );
};

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "hotpink" : "gray",
  });

  return (
    <a.mesh
      castShadow
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
      }}
      onClick={() => {
        setActive(!active);
      }}
      scale={props.scale}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[20, 20]} />
    <a.meshPhysicalMaterial attach="material" color="red" />
  </mesh>
);

const SpaceModel = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load("./scene.gltf", setModel);
  }, []);
  // console.log("MOdel : ", model)
  return model ? <primitive object={model.scene} /> : null;
};

function App() {
  return (
    <>
      <Canvas
        colorManagement
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        {/* <fog attach="fog" args={["white", 8, 15]} /> */}
        <ambientLight />
        <spotLight position={[0, 2, 5]} penumbra={1} />
        <Controls />
        {/* <Box /> */}
        {/* <Plane /> */}
        <SpaceModel />
      </Canvas>
    </>
  );
}

export default App;
