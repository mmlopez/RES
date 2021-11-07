import React from "react";
import Fade from "react-reveal/Fade";

function Subheader({ style, text }) {
  return (
        <span style={style} className="subheader">
          {text}
        </span>
  );
}
Subheader.defaultProps = {
  style: {
    color: "rgba(255,255,255,.3)",
    fontWeight: "light",
    textTransform: "lowercase",
    fontFamily: "raleway, roboto, lato, sans-serif",
    letterSpacing: -0.5,
    display: "block",
    margin: "-20px 0 20px 0",
    wordBreak: "break-word"
  }
};

export default Subheader;
