import Webcam from "react-webcam";

function Camera({ webcamRef, setIsCameraReady }) {

  return (
    <Webcam
      ref={webcamRef}
      audio={false}
      mirrored={true}
      onUserMedia={() => {

        console.log("Camera Ready");

        setIsCameraReady(true);

    }}
      className="w-full h-full object-cover"
    />
  );

}

export default Camera;