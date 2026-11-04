
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, Sky } from "@react-three/drei";
import * as THREE from "three";
import AutoRealista from "./AutoRealista";

function Carretera() {
  const lineas = useRef();

  useFrame(({ clock }, delta) => {
    if (!lineas.current) return;

    const t = clock.elapsedTime;

    const velocidad =
      t < 3.8
        ? 15
        : t < 5.6
          ? 15 * (1 - (t - 3.8) / 1.8)
          : 0;

    // Las líneas se desplazan simulando el avance.
    lineas.current.position.z =
      (lineas.current.position.z + velocidad * delta) % 8;
  });

  return (
    <group>
      {/* Terreno */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.05, -40]}
        receiveShadow
      >
        <planeGeometry args={[400, 400]} />
        <meshStandardMaterial
          color="#82766b"
          roughness={1}
        />
      </mesh>

      {/* Asfalto */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.025, -40]}
        receiveShadow
      >
        <planeGeometry args={[9, 250]} />
        <meshStandardMaterial
          color="#353535"
          roughness={0.93}
        />
      </mesh>

      {/* Líneas centrales */}
      <group ref={lineas}>
        {Array.from({ length: 32 }, (_, i) => (
          <mesh
            key={i}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0.005, -125 + i * 8]}
          >
            <planeGeometry args={[0.12, 3.5]} />
            <meshBasicMaterial color="#e6e0cc" />
          </mesh>
        ))}
      </group>

      {/* Bordes */}
      {[-4.1, 4.1].map((x) => (
        <mesh
          key={x}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[x, 0.008, -40]}
        >
          <planeGeometry args={[0.1, 250]} />
          <meshBasicMaterial color="#ded9c9" />
        </mesh>
      ))}
    </group>
  );
}

function Montanas() {
  return (
    <group>
      {Array.from({ length: 12 }, (_, i) => {
        const x = (i - 5.5) * 26;
        const altura = 8 + (i % 4) * 4;

        return (
          <mesh
            key={i}
            position={[x, altura * 0.25, -115]}
            rotation={[0, 0, (i % 3 - 1) * 0.08]}
          >
            <coneGeometry args={[22, altura, 4]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#6b6266" : "#777071"}
              roughness={1}
              flatShading
            />
          </mesh>
        );
      })}
    </group>
  );
}

function LucesFreno({ activo }) {
  const izquierda = useRef();
  const derecha = useRef();

  useFrame(() => {
    const intensidad = activo.current ? 5 : 0.5;

    [izquierda, derecha].forEach((ref) => {
      if (ref.current) {
        ref.current.material.emissiveIntensity = intensidad;
      }
    });
  });

  return (
    <group position={[0, 0, -3]}>
      {[-0.73, 0.73].map((x, i) => (
        <mesh
          key={x}
          ref={i === 0 ? izquierda : derecha}
          position={[x, 0.91, 2.38]}
        >
          <boxGeometry args={[0.42, 0.08, 0.035]} />
          <meshStandardMaterial
            color="#ff1515"
            emissive="#ff0000"
            emissiveIntensity={0.5}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function EscenaAuto() {
  const tiempo = useRef(0);
  const frenando = useRef(false);
  const auto = useRef();

  useFrame(({ camera, clock }, delta) => {
    tiempo.current += Math.min(delta, 0.05);
    const t = tiempo.current;

    // Primera toma: perspectiva desde el vehículo.
    if (t < 2) {
      camera.position.set(
        0,
        1.8 + Math.sin(t * 8) * 0.008,
        -3.8
      );
      camera.lookAt(0, 1.55, -40);
    }

    // Transición hacia la cámara exterior.
    else if (t < 3) {
      const p = THREE.MathUtils.smoothstep(t, 2, 3);

      camera.position.set(
        THREE.MathUtils.lerp(0, 4.5, p),
        THREE.MathUtils.lerp(1.8, 2.6, p),
        THREE.MathUtils.lerp(-3.8, 6.5, p)
      );

      camera.lookAt(0, 1, -3);
    }

    // Seguimiento exterior y frenado.
    else {
      const p = THREE.MathUtils.smoothstep(t, 3, 5.8);

      camera.position.set(
        THREE.MathUtils.lerp(4.5, 3.5, p),
        THREE.MathUtils.lerp(2.6, 2.3, p),
        THREE.MathUtils.lerp(6.5, 5.5, p)
      );

      camera.lookAt(0, 1.1, -3);
    }

    frenando.current = t >= 4;

    if (auto.current) {
      const vibracion =
        t < 5.6 ? Math.sin(clock.elapsedTime * 10) * 0.008 : 0;

      auto.current.position.y = vibracion;
    }
  });

  return (
    <>
      <color attach="background" args={["#c58d8b"]} />

      <fog
        attach="fog"
        args={["#c58d8b", 65, 170]}
      />

      <Sky
        distance={450000}
        sunPosition={[-30, 4, -100]}
        turbidity={8}
        rayleigh={3}
        mieCoefficient={0.01}
        mieDirectionalG={0.85}
      />

      <ambientLight intensity={1.2} color="#f5d2bd" />

      <hemisphereLight
        args={["#f6c6b6", "#777063", 1.8]}
      />

      <directionalLight
        position={[-25, 12, -35]}
        intensity={3}
        color="#ffbd91"
        castShadow
      />

      <Environment preset="sunset" />

      <Montanas />
      <Carretera />

      <group ref={auto}>
        <AutoRealista />
        <LucesFreno activo={frenando} />
      </group>
    </>
  );
}
