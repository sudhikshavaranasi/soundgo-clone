import { useEffect } from "react";
import { initializeHandDetector } from "../utils/handDetector";


function HandTracker({webcamRef, isCameraReady, setLandmarks}) {
  useEffect(() => {
    if (!isCameraReady) return;

    console.log("Camera Ready");

    async function loadDetector() {
      console.log("Initializing MediaPipe");

      const detector = await initializeHandDetector();
      const video = webcamRef.current.video;
      function detectHands() {

    const results = detector.detectForVideo(
        video,
        performance.now()
    );

    setLandmarks(results.landmarks);
    requestAnimationFrame(detectHands);
}

detectHands();

      console.log(video);

      console.log("Detector Ready", detector);
    }

    loadDetector();
  }, [isCameraReady]);

  return null;
}

export default HandTracker;