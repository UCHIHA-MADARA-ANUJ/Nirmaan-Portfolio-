"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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

/* ── Particle Swarm ── */
function HighlyOptimizedSwarm({ count = 350 }: { count: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 35,
        y: (Math.random() - 0.5) * 35,
        z: (Math.random() - 0.5) * 15,
        speed: 0.1 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);
  const color = useMemo(() => new THREE.Color("#B6FF3C"), []);

  useFrame((state) => {
    if (!meshRef.current || !meshRef.current.instanceMatrix) return;
    const time = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const p = particles[i];
      dummy.position.set(
        p.x + Math.sin(time * p.speed + p.phase) * 0.6,
        p.y + Math.cos(time * p.speed + p.phase) * 0.6,
        p.z + Math.sin(time * 0.15 + p.phase) * 0.8
      );
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

/* ── Fallback when WebGL is unavailable ── */
function HeroFluidFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80">
      <div className="absolute inset-0 bg-gradient-to-br from-signal/10 via-electric/5 to-transparent animate-pulse" />
    </div>
  );
}

export default function HeroFluid() {
  const [particleCount, setParticleCount] = useState(350);
  const [mounted, setMounted] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState(false);

  useEffect(() => {
    setWebglAvailable(checkWebGLSupport());
    setMounted(true);
    if (window.innerWidth < 768) setParticleCount(150);
  }, []);

  /* Before mount: render nothing (matches SSR since dynamic import with ssr:false).
     After mount: show Canvas if WebGL available, otherwise fallback. */
  if (!mounted) return null;

  if (!webglAvailable) return <HeroFluidFallback />;

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
