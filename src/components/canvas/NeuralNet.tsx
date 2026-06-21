"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ── WebGL Support Check ── */
function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("webgl2") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

/* ── Neural Particle Swarm ── */
function NeuralSwarm({ count = 200 }: { count: number }) {
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
    pointsRef.current.rotation.y = time * 0.04;
    pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.15;
    const scale = 1 + Math.sin(time * 0.8) * 0.04;
    pointsRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#00FF8A" size={0.06} sizeAttenuation depthWrite={false} opacity={0.65} />
    </Points>
  );
}

/* ── Fallback when WebGL is unavailable ── */
function NeuralNetFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-ai-cyan/5 to-transparent" />
    </div>
  );
}

export default function NeuralNet() {
  const [nodeCount, setNodeCount] = useState(200);
  const [mounted, setMounted] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState(false);

  useEffect(() => {
    setWebglAvailable(checkWebGLSupport());
    setMounted(true);
    if (window.innerWidth < 768) setNodeCount(80);
  }, []);

  /* Before mount: render nothing (matches SSR since dynamic import with ssr:false).
     After mount: show Canvas if WebGL available, otherwise fallback. */
  if (!mounted) return null;

  if (!webglAvailable) return <NeuralNetFallback />;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-40 overflow-hidden" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false }}
      >
        <NeuralSwarm count={nodeCount} />
      </Canvas>
    </div>
  );
}
