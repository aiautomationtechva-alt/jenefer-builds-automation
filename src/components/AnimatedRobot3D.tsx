import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Robot() {
  const robotRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (robotRef.current) {
      // Floating animation
      robotRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.3;
      // Gentle rotation
      robotRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
    
    if (armRef.current) {
      // Waving animation
      const waveSpeed = 3;
      const waveAmount = 0.8;
      armRef.current.rotation.z = Math.sin(clock.getElapsedTime() * waveSpeed) * waveAmount - 0.3;
    }

    // Glowing eyes pulse
    if (eyeLeftRef.current && eyeRightRef.current) {
      const glowIntensity = 0.5 + Math.sin(clock.getElapsedTime() * 2) * 0.3;
      const glowColor = new THREE.Color(0x00ffff).multiplyScalar(glowIntensity);
      (eyeLeftRef.current.material as THREE.MeshStandardMaterial).emissive = glowColor;
      (eyeRightRef.current.material as THREE.MeshStandardMaterial).emissive = glowColor;
    }
  });

  return (
    <group ref={robotRef} position={[0, 0, 0]}>
      {/* Head - oversized and cute */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Eyes - glowing */}
      <mesh ref={eyeLeftRef} position={[-0.3, 1.6, 0.6]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} />
      </mesh>
      <mesh ref={eyeRightRef} position={[0.3, 1.6, 0.6]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} />
      </mesh>

      {/* Face visor */}
      <mesh position={[0, 1.5, 0.7]}>
        <boxGeometry args={[1, 0.5, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} transparent opacity={0.8} />
      </mesh>

      {/* Body - small and rounded */}
      <mesh position={[0, 0.5, 0]}>
        <capsuleGeometry args={[0.4, 0.6, 16, 16]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Chest light */}
      <mesh position={[0, 0.6, 0.45]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
      </mesh>
      <pointLight position={[0, 0.6, 0.5]} color="#00ffff" intensity={1} distance={2} />

      {/* Left Arm */}
      <group position={[-0.5, 0.8, 0]}>
        <mesh position={[0, -0.2, 0]}>
          <capsuleGeometry args={[0.12, 0.4, 8, 8]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Right Arm - waving */}
      <group ref={armRef} position={[0.5, 0.8, 0]}>
        <mesh position={[0, -0.2, 0]}>
          <capsuleGeometry args={[0.12, 0.4, 8, 8]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#b0b0b0" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Neon accents on body */}
      <mesh position={[-0.3, 0.4, 0.42]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[0.3, 0.4, 0.42]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1.5} />
      </mesh>

      {/* Jet boosters at bottom */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 0.3, 16]} />
        <meshStandardMaterial color="#808080" metalness={0.9} roughness={0.1} />
      </mesh>
      <pointLight position={[0, -0.3, 0]} color="#00ffff" intensity={0.8} distance={1.5} />
    </group>
  );
}

export function AnimatedRobot3D() {
  return (
    <div className="fixed bottom-8 right-8 z-50 w-64 h-64 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1.5, 4]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} />
        <Robot />
      </Canvas>
    </div>
  );
}
