import { useEffect } from "react";
import { initializeHandDetector } from "../utils/handDetector";
import { calculateDistance } from "../utils/gestureDist";


function HandTracker({webcamRef, isCameraReady, setHands}) {
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

    const hands = (results.landmarks || []).map((landmarks, index) => ({
    landmarks,
    handedness: results.handedness[index][0].categoryName
}));


setHands(hands);
hands.forEach((hand) => {

    const thumbTip = hand.landmarks[4];
    const indexTip = hand.landmarks[8];

    const distance = calculateDistance(
        thumbTip,
        indexTip
    );

    if (distance < 0.05) {
        console.log("Pinch");
    }

});
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