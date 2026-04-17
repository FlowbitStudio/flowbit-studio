import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'

export default function HeroCanvas() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <ShaderGradientCanvas
        style={{ width: '100%', height: '100%' }}
        pixelDensity={1}
        fov={50}
      >
        <ShaderGradient
          animate="on"
          brightness={0}
          cAzimuthAngle={75}
          cDistance={4.59}
          cPolarAngle={33}
          cameraZoom={15.09}
          color1="#1786FF"
          color2="#f2f2f2"
          color3="#bf3db2"
          envPreset="city"
          grain="on"
          lightType="env"
          positionX={1.9}
          positionY={2.7}
          positionZ={0.4}
          // @ts-expect-error — ShaderGradient prop missing from upstream types
          range="enabled"
          rangeEnd={20}
          rangeStart={0}
          reflection={0}
          rotationX={25}
          rotationY={60}
          rotationZ={20}
          shader="defaults"
          type="sphere"
          uAmplitude={0}
          uDensity={2.4}
          uFrequency={0}
          uSpeed={0.2}
          uStrength={0.7}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  )
}
