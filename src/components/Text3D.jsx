import { Canvas } from "@react-three/fiber";
import { Center, Text3D, OrbitControls } from "@react-three/drei";

// eslint-disable-next-line react/prop-types
function Scene({ word1, word2 }) {
  return (
    <>
      <Center rotation={[-0.2, -0.2, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={0.4}
          font="/Inter_Bold.json"
        >
          {`${word1}\n${word2}`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
}

// eslint-disable-next-line react/prop-types
const Text3DComponent = ({ word1, word2 }) => {
  return (
    <div className="w-[30%]">
      <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={0.5} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight position={[10, 10, 10]} />
        <Scene word1={word1} word2={word2} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <axesHelper
          scale={1}
          // eslint-disable-next-line react/no-unknown-property
          position={[0, 0, 0]}
          // eslint-disable-next-line react/no-unknown-property
          onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Text3DComponent;
