import Camera from "./components/camera";
import HandTracker from "./components/Handtracker";
import { useRef, useState } from "react";
import HandCanvas from "./components/HandCanvas";
import { startAudio, playNote } from "./audio/audioEngine";
import NoteSelector from "./components/notes";

function App() {
  const webcamRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [hands, setHands] = useState([]);
  const [selectedNote, setSelectedNote] = useState("C");
  const [selectedChord, setSelectedChord] = useState("Major");
  return (
    
    <div className="min-h-screen bg-[#111111] text-white p-6">
      <h1 className="text-3xl font-semibold mb-6">
        SoundGo Clone
        Selected Chord: {selectedChord}
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
      setHands={setHands}
      setSelectedNote = {setSelectedNote}
      selectedNote={selectedNote}
      setSelectedChord = {setSelectedChord}
      selectedChord={selectedChord}
    />

    <HandCanvas hands={hands} />
  </div>
</div>
<NoteSelector selectedNote={selectedNote} />

    </div>

  );
}

export default App;
