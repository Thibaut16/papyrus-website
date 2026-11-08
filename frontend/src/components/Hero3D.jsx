import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Globe() {
  const globeRef = useRef();
  const ringRef = useRef();

  // Animation de rotation
  useFrame((state, delta) => {
    if (globeRef.current) globeRef.current.rotation.y += delta * 0.2;
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.1;
      ringRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group scale={1.5}>
      {/* La sphère principale avec un effet filaire (Wireframe) */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#1e3a8a" // Bleu clair
          wireframe={true} 
          transparent 
          opacity={0.3} 
        />
      </mesh>
      
      {/* Une sphère intérieure solide pour donner du volume */}
      <mesh>
        <sphereGeometry args={[0.98, 32, 32]} />
        <meshStandardMaterial 
          color="#0a1f44" // Bleu nuit
          roughness={0.8}
        />
      </mesh>

      {/* Anneau doré autour (effet satellite/orbite) */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.4, 0.02, 16, 100]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d-container" style={{ height: '400px', width: '100%', marginTop: '1rem' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#c1121f" /> {/* Lumière rouge subtile */}
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
          <Globe />
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}