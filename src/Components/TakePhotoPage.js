import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

import "./TakePhotoPage.css";

function TakePhotoPage(props) {
  function TakePhoto(dataUri) {
    console.log("PhotoOK");
  }
  return (
    <Camera
      onTakePhoto={(dataUri) => {
        TakePhoto(dataUri);
      }}
    />
  );
}
export default TakePhotoPage;
