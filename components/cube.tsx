import React, { useRef } from "react";
import { RenderTexture, PerspectiveCamera,  Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as three from "three";


const Cube = () => {

  const textRef = useRef<three.Mesh>();

  useFrame(
    (state) =>
      (textRef.current!.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map" sourceFile={''}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#42A5F5"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            Bolo
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
