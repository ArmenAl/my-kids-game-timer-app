import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview/ImagePreview";

function TakePhotoPage(props) {
  const [dataUri, setDataUri] = useState("");

  function TakePhoto(dataUri) {
    console.log("PhotoOK");
    setDataUri(dataUri);
  }

  const isFullscreen = false;

  return (
    <div>
      {dataUri ? (
        <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
      ) : (
        <Camera
          onTakePhotoAnimationDone={TakePhoto}
          isFullscreen={isFullscreen}
        />
      )}
    </div>
  );
}
export default TakePhotoPage;
