import Webcam from "react-webcam";

function Camera() {
  return (
    <Webcam
      audio={false}
      mirrored={true}
      className="w-full h-full object-cover rounded-xl"
    />
  );
}

export default Camera;