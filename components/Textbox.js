import React from "react";

function Textbox({ defaultStyle, style, children }) {
  return (
    <span>
      <div style={{ ...defaultStyle, ...style }}>{children}</div>
    </span>
  );
}
Textbox.defaultProps = {
  defaultStyle: {
    background:
      "linear-gradient(to bottom left, rgba(30, 30, 30, .5), rgba(30, 30, 30, .2))",
    color: "rgb(200,200,200)",
    fontSize: ".9em",
    fontFamily: "raleway, roboto, lato, sans-serif",
    wordBreak: "break-word",
    borderRadius: 15,
    padding: 20,
    margin: "-10px 0 10px 0"
  }
};

export default Textbox;
