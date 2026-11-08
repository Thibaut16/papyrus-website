import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Livre3D() {
  const group = useRef();
  
  // Animation de rotation douce
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={group} scale={1.2} position={[0, -0.5, 0]}>
      {/* Couverture du livre (Rouge) */}
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[2, 2.8, 0.1]} />
        <meshStandardMaterial color="#c1121f" roughness={0.4} metalness={0.2} />
      </mesh>
      
      {/* Pages du livre (Blanc cassé) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.9, 2.7, 0.15]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.8} />
      </mesh>

      {/* Tranche du livre (Dorée pour le premium) */}
      <mesh position={[0, -1.4, 0]}>
        <boxGeometry args={[2, 0.1, 0.25]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    // La classe "hero-3d-container" nous permettra de le cacher sur mobile
    <div className="hero-3d-container" style={{ height: '350px', width: '100%', marginTop: '2rem' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <spotLight position={[-5, 5, 5]} intensity={1} />
        
        {/* On fait flotter le livre */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
          <Livre3D />
        </Float>
        
        {/* Ombre au sol pour l'effet de réalisme */}
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}