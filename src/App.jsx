import Camera from "./components/camera";
import HandTracker from "./components/Handtracker";

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-6">
      <h1 className="text-3xl font-semibold mb-6">
        SoundGo Clone
      </h1>

      <div className="flex justify-center">
        <div className="w-[900px] h-[520px] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-700">
          <Camera />
          <HandTracker />
        </div>
      </div>
    </div>
  );
}

export default App;
