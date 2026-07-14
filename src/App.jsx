import Camera from "./components/camera";
import HandTracker from "./components/Handtracker";
import { useRef, useState } from "react";
import HandCanvas from "./components/HandCanvas";
import { startAudio, playNote } from "./audio/audioEngine";

function App() {
  const webcamRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [hands, setHands] = useState([]);
  return (
    
    <div className="min-h-screen bg-[#111111] text-white p-6">
      <h1 className="text-3xl font-semibold mb-6">
        SoundGo Clone
      </h1>
      
      <div className="flex justify-center">
    <button
  onClick={async () => {
    await startAudio();
    playNote("C4");
  }}
>
Start Audio
</button>
  <div className="relative w-[900px] h-[520px] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-700">
    <Camera
      webcamRef={webcamRef}
      setIsCameraReady={setIsCameraReady}
    />

    <HandTracker
      webcamRef={webcamRef}
      isCameraReady={isCameraReady}
      setHands={setHands}
    />

    <HandCanvas hands={hands} />
  </div>
</div>
    </div>
  );
}

export default App;
