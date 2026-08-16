import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";
import { MathUtils } from "three";

export type MaterialPreset = {
  color: string;
  roughness: number;
  metalness: number;
  clearcoat?: number;
};

function Sculpture({ preset }: { preset: MaterialPreset }) {
  const group = useRef<Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    target.current.y = state.pointer.x * 0.28;
    target.current.x = -state.pointer.y * 0.16;
    g.rotation.y = MathUtils.damp(g.rotation.y, target.current.y, 3, delta);
    g.rotation.x = MathUtils.damp(g.rotation.x, target.current.x, 3, delta);
  });

  return (
    <group ref={group}>
      <RoundedBox args={[2.1, 1.15, 1.25]} radius={0.28} smoothness={6} position={[0, -0.35, 0]}>
        <meshPhysicalMaterial
          color={preset.color}
          roughness={preset.roughness}
          metalness={preset.metalness}
          clearcoat={preset.clearcoat ?? 0.2}
          clearcoatRoughness={0.35}
        />
      </RoundedBox>
      <mesh position={[0, 0.62, 0]} rotation={[0, 0.4, 0]}>
        <torusGeometry args={[0.55, 0.09, 32, 96]} />
        <meshPhysicalMaterial color="#C99A4B" roughness={0.22} metalness={1} />
      </mesh>
    </group>
  );
}

export default function MaterialObject({ preset }: { preset: MaterialPreset }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.6, 4.4], fov: 38 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.35} />
      <spotLight position={[4, 6, 4]} angle={0.5} penumbra={1} intensity={90} color="#FFE9C4" />
      <directionalLight position={[-4, 2, -3]} intensity={1.1} color="#7f8ba0" />
      <Sculpture preset={preset} />
      <Environment preset="apartment" />
    </Canvas>
  );
}
