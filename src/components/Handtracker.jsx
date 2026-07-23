import { useEffect, useRef } from "react";
import { initializeHandDetector } from "../utils/handDetector";
import { calculateDistance } from "../utils/gestureDist";
import { playNote } from "../audio/audioEngine";
import { getNoteFromX } from "../utils/musicUtils";
import { getChordNotes } from "../utils/chordNotes";
import { getAngle } from "../utils/angleUtils";
import { getChordFromAngle } from "../utils/chordUtils";
import { playChord } from "../audio/audioEngine";

function HandTracker({webcamRef, isCameraReady, setHands, setSelectedNote, selectedNote, setSelectedChord, selectedChord}) {
    const wasPinching = useRef(false);
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

    

    if (hand.handedness === "Left") {
        const thumbTip = hand.landmarks[4];
        const indexTip = hand.landmarks[8];

        const distance = calculateDistance(
            thumbTip,
            indexTip
        );

        const note = getNoteFromX(indexTip.x);

        setSelectedNote(note);
        const isPinching = distance < 0.05;

        if (isPinching && !wasPinching.current) {
            const notes = getChordNotes(note, selectedChord);
            playChord(notes);
        }
        wasPinching.current = isPinching;

    }
    if (hand.handedness == "Right"){
        const indexTip = hand.landmarks[8];
        const wrist = hand.landmarks[0];

        const angle = getAngle(wrist, indexTip);
        const chord = getChordFromAngle(angle);
        setSelectedChord(chord);

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