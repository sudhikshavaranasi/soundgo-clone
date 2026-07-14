import {useEffect, useRef } from "react";

function HandCanvas({landmarks}) {
    const canvasRef = useRef(null);
    useEffect(() => {

    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (landmarks.length === 0) return;

    landmarks.forEach((hand) => {

    hand.forEach((point) => {

        const x = (1 - point.x) * canvas.width;
        const y = point.y * canvas.height;

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            5,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "white";

        ctx.fill();

    }); });


}, [landmarks]);
  return (
    <canvas
      ref = {canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}

export default HandCanvas;