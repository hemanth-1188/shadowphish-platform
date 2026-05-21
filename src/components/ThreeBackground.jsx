import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Torus, Icosahedron, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef();
  
  const positions = useMemo(() => {
    const count = 4000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const radius = 5 + Math.random() * 30;
      const y = (Math.random() - 0.5) * 50;
      
      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = radius * Math.sin(theta) - 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00F5FF"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const FloatingShapes = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron args={[1, 1]} position={[-4, 2, -5]}>
          <meshBasicMaterial color="#00F5FF" wireframe transparent opacity={0.15} />
        </Icosahedron>
      </Float>
      
      <Float speed={1} rotationIntensity={2} floatIntensity={1.5}>
        <Torus args={[2, 0.02, 16, 100]} position={[5, -1, -8]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#8B5CF6" transparent opacity={0.2} />
        </Torus>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={3}>
        <Sphere args={[0.5, 16, 16]} position={[0, 4, -10]}>
          <meshBasicMaterial color="#FF3B5C" wireframe transparent opacity={0.1} />
        </Sphere>
      </Float>
    </>
  );
};

export const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-cyber-darkest overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <fog attach="fog" args={['#050816', 10, 40]} />
        <ParticleField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};
