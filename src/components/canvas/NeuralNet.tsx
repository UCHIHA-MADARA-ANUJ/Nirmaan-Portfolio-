"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function NeuralSwarm({ count = 250 }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.2;
    
    // Breathing scale
    const scale = 1 + Math.sin(time * 0.8) * 0.05;
    pointsRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00FF8A"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

export default function NeuralNet() {
  const [nodeCount, setNodeCount] = useState(250);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setNodeCount(90);
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-40 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: false }}
      >
        <NeuralSwarm count={nodeCount} />
      </Canvas>
    </div>
  );
}
