import {useEffect, useRef } from "react";
const HAND_COLORS = {
    Left: "#1558c5",
    Right: "#2f814d",
};
const FINGERTIPS = [4, 8, 12, 16, 20];
const CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4],

  [0, 5], [5, 6], [6, 7], [7, 8],

  [0, 9], [9,10], [10,11], [11,12],

  [0,13], [13,14], [14,15], [15,16],

  [0,17], [17,18], [18,19], [19,20],

  [5,9],
  [9,13],
  [13,17]
];
function HandCanvas({hands}) {
    const canvasRef = useRef(null);
    useEffect(() => {

    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.fillStyle = "white";

if (hands.length === 0) return;

hands.forEach((handData) => {

    const hand = handData.landmarks;

    const color = HAND_COLORS[handData.handedness] || "white";

    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    CONNECTIONS.forEach(([start, end]) => {

        const p1 = hand[start];
        const p2 = hand[end];

        ctx.beginPath();

        ctx.moveTo(
            (1 - p1.x) * canvas.width,
            p1.y * canvas.height
        );

        ctx.lineTo(
            (1 - p2.x) * canvas.width,
            p2.y * canvas.height
        );

        ctx.stroke();

    });

    hand.forEach((landmark, index) => {

        const x = (1 - landmark.x) * canvas.width;
        const y = landmark.y * canvas.height;

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            5,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = FINGERTIPS.includes(index)
    ? "#FFD700"   // Gold
    : color;

ctx.fill();

    });

});
}, [hands]);
  return (
    <canvas
      ref = {canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}

export default HandCanvas;