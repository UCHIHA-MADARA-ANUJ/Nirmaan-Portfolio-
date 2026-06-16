"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function HighlyOptimizedSwarm({ count = 350 }: { count: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 35;
      const y = (Math.random() - 0.5) * 35;
      const z = (Math.random() - 0.5) * 15;
      const speed = 0.1 + Math.random() * 0.2;
      const phase = Math.random() * Math.PI * 2;
      temp.push({ x, y, z, speed, phase });
    }
    return temp;
  }, [count]);

  const color = useMemo(() => new THREE.Color("#B6FF3C"), []);

  useFrame((state) => {
    if (!meshRef.current || !meshRef.current.instanceMatrix) return;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const p = particles[i];
      const px = p.x + Math.sin(time * p.speed + p.phase) * 0.6;
      const py = p.y + Math.cos(time * p.speed + p.phase) * 0.6;
      const pz = p.z + Math.sin(time * 0.15 + p.phase) * 0.8;

      dummy.position.set(px, py, pz);
      dummy.scale.setScalar(Math.sin(time + p.phase) * 0.3 + 0.8);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[0.035, 6, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </instancedMesh>
  );
}

export default function HeroFluid() {
  const [particleCount, setParticleCount] = useState(350);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setParticleCount(150);
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80 will-change-transform" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <HighlyOptimizedSwarm count={particleCount} />
      </Canvas>
    </div>
  );
}
