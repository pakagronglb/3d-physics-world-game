import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";

export const Instructions = () => {
  const textRef = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

  useFrame((state) => {
    // Floating animation for main instruction
    textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2 + 4;
    textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

    // Floating animation for jump instruction
    textRef2.current.position.y = Math.sin(state.clock.elapsedTime + 1) * 0.2 + 3;
    textRef2.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + 1) * 0.1;

    // Floating animation for rotation instruction
    textRef3.current.position.y = Math.sin(state.clock.elapsedTime + 2) * 0.2 + 2;
    textRef3.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + 2) * 0.1;
  });

  return (
    <group position={[-10, 0, 0]}>
      <Center>
        <Text3D
          ref={textRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          WASD to Move
          <meshStandardMaterial color="yellow" emissive="orange" emissiveIntensity={0.5} />
        </Text3D>

        <Text3D
          ref={textRef2}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          SPACE to Jump
          <meshStandardMaterial color="yellow" emissive="orange" emissiveIntensity={0.5} />
        </Text3D>

        <Text3D
          ref={textRef3}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          Arrows to Rotate
          <meshStandardMaterial color="yellow" emissive="orange" emissiveIntensity={0.5} />
        </Text3D>
      </Center>
    </group>
  );
}; 