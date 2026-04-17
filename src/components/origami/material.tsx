import { useTexture } from "@react-three/drei";
import { createContext, forwardRef, useContext } from "react";

export type MaterialMode = "matcap" | "standard" | "physical";

export interface OrigamiMaterialConfig {
  mode: MaterialMode;
  matcap: 1 | 2 | 3;
  color: string;
  metalness: number;
  roughness: number;
  clearcoat: number;
  clearcoatRoughness: number;
  envIntensity: number;
  emissive: string;
  emissiveIntensity: number;
}

export const defaultMaterialConfig: OrigamiMaterialConfig = {
  mode: "matcap",
  matcap: 1,
  color: "#ffffff",
  metalness: 0.6,
  roughness: 0.3,
  clearcoat: 0,
  clearcoatRoughness: 0.2,
  envIntensity: 1,
  emissive: "#000000",
  emissiveIntensity: 0,
};

export const MaterialContext = createContext<OrigamiMaterialConfig>(
  defaultMaterialConfig
);

// Single wrapper that picks the right three.js material based on context.
// Extra props from Items (e.g. `side={DoubleSide}`) are forwarded.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomMaterial = forwardRef<any, any>((props, ref) => {
  const cfg = useContext(MaterialContext);
  // useTexture is called unconditionally so hook order is stable across modes.
  const matcapTex = useTexture(`/origami/matcap-${cfg.matcap}.jpeg`);

  if (cfg.mode === "matcap") {
    return (
      <meshMatcapMaterial
        ref={ref}
        matcap={matcapTex}
        color={cfg.color}
        {...props}
      />
    );
  }

  if (cfg.mode === "physical") {
    return (
      <meshPhysicalMaterial
        ref={ref}
        color={cfg.color}
        metalness={cfg.metalness}
        roughness={cfg.roughness}
        clearcoat={cfg.clearcoat}
        clearcoatRoughness={cfg.clearcoatRoughness}
        envMapIntensity={cfg.envIntensity}
        emissive={cfg.emissive}
        emissiveIntensity={cfg.emissiveIntensity}
        {...props}
      />
    );
  }

  return (
    <meshStandardMaterial
      ref={ref}
      color={cfg.color}
      metalness={cfg.metalness}
      roughness={cfg.roughness}
      envMapIntensity={cfg.envIntensity}
      emissive={cfg.emissive}
      emissiveIntensity={cfg.emissiveIntensity}
      {...props}
    />
  );
});
