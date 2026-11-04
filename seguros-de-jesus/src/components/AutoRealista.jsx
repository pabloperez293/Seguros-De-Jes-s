import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/golf_gti.glb";

export default function AutoRealista() {
  const { scene } = useGLTF(MODEL_URL);

  const auto = useMemo(() => {
    const copia = scene.clone(true);

    // Calculamos las dimensiones originales del vehículo.
    copia.updateMatrixWorld(true);

    const caja = new THREE.Box3().setFromObject(copia);
    const centro = caja.getCenter(new THREE.Vector3());
    const tamaño = caja.getSize(new THREE.Vector3());

    // Normalizamos el largo del vehículo a 4,3 unidades.
    const escala = 4.3 / Math.max(tamaño.x, tamaño.z, 0.001);

    copia.scale.setScalar(escala);

    // Centramos el vehículo y apoyamos las ruedas en el suelo.
    copia.position.set(
      -centro.x * escala,
      -caja.min.y * escala,
      -centro.z * escala,
    );

    copia.traverse((obj) => {
      if (!obj.isMesh) return;

      obj.castShadow = true;
      obj.receiveShadow = true;

      // Conservamos los materiales originales del GLB.
    });

    return copia;
  }, [scene]);

  return (
    <group position={[0, 0.03, -3]}>
      <primitive object={auto} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);
