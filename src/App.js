import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";

const Scene = () => {
  const fbx = useLoader(FBXLoader, "shipK.fbx");
  console.log("sdhgsdgs");
  return <primitive object={fbx} scale={0.006} position={[0,0,0]}/>;
};

const Scene1 = () => {
  const fbx = useLoader(FBXLoader, "gunK.fbx");
  console.log("image 2");
  return <primitive object={fbx} scale={0.006} position={[0,120,200]}/>;
};

const Scene2 = () => {
  const fbx = useLoader(FBXLoader, "Flag.fbx");
  console.log("image 2");
  return <primitive object={fbx} scale={0.006} position={[0,80,-200]}/>;
};

export default function App() {
  return (
    <div className="App">
      <Canvas camera={{ fov: 100, near: 0.5, far: 1500, position: [450, 300, 550] }}>
        <Suspense fallback={null}>
          <Scene />
          <Scene1 />
          <Scene2 />
          <OrbitControls />
          <pointLight position ={[100, 100, 100]} color={0xffffff} intensity={9}/>
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
