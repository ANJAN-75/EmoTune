import { useEffect, useRef, useState } from "react";
import { init, detect } from "./utils/utils";
import "./styles/face.scss";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    init({
      videoRef,
      landmarkerRef,
      streamRef,
      setExpression,
    });

    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="video_container">
      <video className="video" ref={videoRef} playsInline />

      <h2>{expression}</h2>

      <button
        className="ditect-button"
        onClick={() =>
          detect({
            landmarkerRef,
            videoRef,
            setExpression,
          })
        }
      >
        Detect expression
      </button>
    </div>
  );
}
