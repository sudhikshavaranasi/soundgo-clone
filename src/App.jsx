import Camera from "./components/camera";
import HandTracker from "./components/Handtracker";
import { useRef, useState } from "react";
import HandCanvas from "./components/HandCanvas";

function App() {
  const webcamRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [landmarks, setLandmarks] = useState([]);
  return (
    
    <div className="min-h-screen bg-[#111111] text-white p-6">
      <h1 className="text-3xl font-semibold mb-6">
        SoundGo Clone
      </h1>
      
      <div className="flex justify-center">
  <div className="relative w-[900px] h-[520px] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-700">
    <Camera
      webcamRef={webcamRef}
      setIsCameraReady={setIsCameraReady}
    />

    <HandTracker
      webcamRef={webcamRef}
      isCameraReady={isCameraReady}
      setLandmarks={setLandmarks}
    />

    <HandCanvas landmarks={landmarks} />
  </div>
</div>
    </div>
  );
}

export default App;
