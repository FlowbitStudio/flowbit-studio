import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import {
  MaterialContext,
  defaultMaterialConfig,
} from "./material";
import type { OrigamiMaterialConfig } from "./material";
import { Item1 } from "./Item1";
import { Item2 } from "./Item2";
import { Item3 } from "./Item3";
import { Item4 } from "./Item4";
import { Item5 } from "./Item5";
import { Item6 } from "./Item6";
import { Item7 } from "./Item7";
import { Item8 } from "./Item8";
import { Item9 } from "./Item9";
import { Item10 } from "./Item10";
import { Item11 } from "./Item11";
import { Item12 } from "./Item12";

const items = [
  Item1, Item2, Item3, Item4, Item5, Item6,
  Item7, Item8, Item9, Item10, Item11, Item12,
];

export type OrigamiItemId =
  | 1 | 2 | 3 | 4 | 5 | 6
  | 7 | 8 | 9 | 10 | 11 | 12;

export type EnvPreset =
  | "studio" | "city" | "sunset" | "dawn" | "night"
  | "warehouse" | "forest" | "apartment" | "park" | "lobby";

interface OrigamiIconProps {
  item: OrigamiItemId;
  size?: number;
  className?: string;
  material?: Partial<OrigamiMaterialConfig>;
  envPreset?: EnvPreset;
  showEnvBackground?: boolean;
}

export default function OrigamiIcon({
  item,
  size = 120,
  className = "",
  material,
  envPreset = "studio",
  showEnvBackground = false,
}: OrigamiIconProps) {
  const Item = items[item - 1];
  const cfg: OrigamiMaterialConfig = { ...defaultMaterialConfig, ...material };
  const needsEnv = cfg.mode !== "matcap";

  return (
    <div
      className={`origami-icon ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <MaterialContext.Provider value={cfg}>
          <Suspense fallback={null}>
            {needsEnv && (
              <>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <directionalLight position={[-5, -3, -5]} intensity={0.4} />
                <Environment preset={envPreset} background={showEnvBackground} />
              </>
            )}
            <Item />
          </Suspense>
        </MaterialContext.Provider>
      </Canvas>
    </div>
  );
}
