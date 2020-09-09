import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./ImagePreview.css";

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
      <img src={dataUri} alt="" />
      <Button component={Link} to={"/addnewkid"}>
        Use Picture
      </Button>
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool,
};

export default ImagePreview;
