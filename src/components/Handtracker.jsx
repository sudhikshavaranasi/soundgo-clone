import { useEffect } from "react";
import { initializeHandDetector } from "../utils/handDetector";

function HandTracker({webcamRef, isCameraReady}) {
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

    if (results.landmarks.length > 0) {

    console.log(results.landmarks[0]);}

    requestAnimationFrame(detectHands);
}

detectHands();

      console.log(video);
      const results = detector.detectForVideo(video,performance.now());

      console.log(results);

      console.log("Detector Ready", detector);
    }

    loadDetector();
  }, [isCameraReady]);

  return null;
}

export default HandTracker;