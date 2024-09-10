import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";
import Shoes from "./Shoes";

const Experience = () => {
    return (
        <>
            <PresentationControls speed={1.5} global polar={[-0.5, Math.PI / 4]} rotation={[Math.PI / 8, Math.PI / 4, 0]} >

                <Stage>
                    <Shoes  position={[0, 0, 8]}/>
                </Stage>
            </PresentationControls>
        </>
    );
};

export default Experience;