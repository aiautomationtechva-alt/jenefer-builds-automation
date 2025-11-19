import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface RobotProps {
  isHovered: boolean;
}

function Robot({ isHovered }: RobotProps) {
  const robotRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);
  const mouthRef = useRef<THREE.Mesh>(null);
  const blinkTimeRef = useRef(0);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    if (robotRef.current) {
      // Floating animation - more dynamic
      robotRef.current.position.y = Math.sin(time * 1.5) * 0.4 + Math.cos(time * 0.8) * 0.2;
      robotRef.current.position.x = Math.sin(time * 0.7) * 0.3;
      // Gentle rotation while flying
      robotRef.current.rotation.y = Math.sin(time * 0.5) * 0.3;
      robotRef.current.rotation.z = Math.cos(time * 0.6) * 0.1;
    }

    // Blinking animation
    if (eyeLeftRef.current && eyeRightRef.current) {
      // Blink every 3-4 seconds
      const blinkCycle = time % 4;
      let eyeScale = 1;
      
      if (blinkCycle > 3.5 && blinkCycle < 3.7) {
        // Quick blink
        eyeScale = 0.1;
      }
      
      eyeLeftRef.current.scale.y = eyeScale;
      eyeRightRef.current.scale.y = eyeScale;
      
      // Glowing eyes pulse
      const glowIntensity = 1 + Math.sin(time * 2) * 0.3;
      (eyeLeftRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = glowIntensity;
      (eyeRightRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = glowIntensity;
    }

    // Animate mouth to smile on hover
    if (mouthRef.current) {
      const targetScale = isHovered ? 0.6 : 0.3;
      const targetRotation = isHovered ? 0.3 : 0;
      mouthRef.current.scale.x += (targetScale - mouthRef.current.scale.x) * 0.1;
      mouthRef.current.rotation.z += (targetRotation - mouthRef.current.rotation.z) * 0.1;
    }

    // Wave arm over head when hovered
    if (armRef.current) {
      if (isHovered) {
        // Wave over head - much more dramatic
        const waveSpeed = 4;
        const targetRotationZ = Math.sin(time * waveSpeed) * 0.5 - 2.5; // Lift arm high over head
        const targetRotationX = Math.sin(time * waveSpeed) * 0.6 - 0.8; // Wave side to side
        const targetRotationY = Math.sin(time * waveSpeed * 0.8) * 0.4; // Add forward motion
        armRef.current.rotation.z += (targetRotationZ - armRef.current.rotation.z) * 0.15;
        armRef.current.rotation.x += (targetRotationX - armRef.current.rotation.x) * 0.15;
        armRef.current.rotation.y += (targetRotationY - armRef.current.rotation.y) * 0.15;
      } else {
        // Return to normal position
        armRef.current.rotation.z += (0 - armRef.current.rotation.z) * 0.1;
        armRef.current.rotation.x += (0 - armRef.current.rotation.x) * 0.1;
        armRef.current.rotation.y += (0 - armRef.current.rotation.y) * 0.1;
      }
    }
  });

  return (
    <group ref={robotRef} position={[0, 0, 0]}>
      {/* Head - rounded rectangular shape like reference */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[1, 0.9, 0.7]} />
        <meshStandardMaterial color="#f0f0f5" metalness={0.3} roughness={0.4} />
      </mesh>
      
      {/* Round the head edges */}
      <mesh position={[0, 1.5, 0]}>
        <capsuleGeometry args={[0.4, 0.5, 16, 16]} />
        <meshStandardMaterial color="#f0f0f5" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Dark visor/screen */}
      <mesh position={[0, 1.5, 0.36]}>
        <boxGeometry args={[0.85, 0.55, 0.05]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Blue side "ears" */}
      <mesh position={[-0.55, 1.5, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#5b9bd5" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0.55, 1.5, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#5b9bd5" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Eyes - glowing blue circles */}
      <mesh ref={eyeLeftRef} position={[-0.25, 1.5, 0.38]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={2} />
      </mesh>
      <mesh ref={eyeRightRef} position={[0.25, 1.5, 0.38]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={2} />
      </mesh>
      <pointLight position={[0, 1.5, 0.5]} color="#00d4ff" intensity={1.5} distance={2} />

      {/* Mouth - smiles on hover */}
      <mesh ref={mouthRef} position={[0, 1.3, 0.36]}>
        <torusGeometry args={[0.15, 0.025, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1} />
      </mesh>

      {/* Antenna on top */}
      <mesh position={[0, 2.15, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
        <meshStandardMaterial color="#d0d0d5" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Antenna ball */}
      <mesh position={[0, 2.35, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#5b9bd5" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Body - capsule shape */}
      <mesh position={[0, 0.6, 0]}>
        <capsuleGeometry args={[0.45, 0.7, 16, 16]} />
        <meshStandardMaterial color="#f0f0f5" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Body segments/rings */}
      <mesh position={[0, 0.8, 0]}>
        <torusGeometry args={[0.48, 0.03, 16, 32]} />
        <meshStandardMaterial color="#a0a0a5" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <torusGeometry args={[0.48, 0.03, 16, 32]} />
        <meshStandardMaterial color="#a0a0a5" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Left Arm - blue with claw */}
      <group position={[-0.5, 0.9, 0]}>
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.5, 16]} />
          <meshStandardMaterial color="#5b9bd5" metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Claw hand - two prongs */}
        <mesh position={[-0.08, -0.55, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.08, 0.2, 0.06]} />
          <meshStandardMaterial color="#5b9bd5" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0.08, -0.55, 0]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.08, 0.2, 0.06]} />
          <meshStandardMaterial color="#5b9bd5" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Right Arm - blue with claw, waves over head on hover */}
      <group ref={armRef} position={[0.5, 0.9, 0]}>
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.5, 16]} />
          <meshStandardMaterial color="#5b9bd5" metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Claw hand - two prongs */}
        <mesh position={[-0.08, -0.55, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.08, 0.2, 0.06]} />
          <meshStandardMaterial color="#5b9bd5" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0.08, -0.55, 0]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.08, 0.2, 0.06]} />
          <meshStandardMaterial color="#5b9bd5" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Bottom propulsion/base */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.25, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#d0d0d5" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Blue glow from bottom */}
      <pointLight position={[0, -0.1, 0]} color="#5b9bd5" intensity={1.2} distance={2} />
    </group>
  );
}

export function AnimatedRobot3D() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-8 right-8 z-50 w-80 h-80 pointer-events-auto cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas gl={{ alpha: true, antialias: true }} style={{ background: 'transparent' }}>
        <PerspectiveCamera makeDefault position={[0, 1.5, 4.5]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, 3, -5]} intensity={0.6} />
        <spotLight position={[0, 5, 0]} intensity={0.5} color="#00d4ff" />
        <Robot isHovered={isHovered} />
      </Canvas>
    </div>
  );
}
