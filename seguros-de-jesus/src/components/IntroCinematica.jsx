import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import EscenaAuto from "./EscenaAuto";
import "../styles/IntroCinematica.css";

import * as THREE from "three";

export default function IntroCinematica({ onFinish }) {
  const [saliendo, setSaliendo] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSaliendo(true);
    }, 6200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!saliendo) return;

    const timer = window.setTimeout(() => {
      onFinish();
    }, 900);

    return () => window.clearTimeout(timer);
  }, [saliendo, onFinish]);

  return (
    <div
      className={`intro-cine ${saliendo ? "intro-cine--exit" : ""}`}
      aria-label="Presentación de Seguros de Jesús"
    >
      <div className="intro-cine__scene">
        <Canvas
          shadows
          camera={{
            position: [0, 1.8, -3.8],
            fov: 55,
            near: 0.1,
            far: 500,
          }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
          }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.15;
          }}
        >
          <EscenaAuto />
        </Canvas>
      </div>

      <div className="intro-cine__shade" />

      <div className="intro-cine__brand">SEGUROS DE JESÚS</div>

      <div className="intro-cine__caption">
        <span>Tu tranquilidad empieza acá.</span>
        <div className="intro-cine__progress">
          <span />
        </div>
      </div>

      <button
        type="button"
        className="intro-cine__skip"
        onClick={() => setSaliendo(true)}
        disabled={saliendo}
      >
        Saltar introducción
      </button>
    </div>
  );
}
