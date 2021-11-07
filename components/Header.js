import React from "react";

// className={classes.b}
function Header({ style, text }) {
  return (
    <span style={style} className="header">
      {text}
    </span>
  );
}
Header.defaultProps = {
  style: {
    //borderBottom: "1px dotted gray",
    //borderTop: "1px dotted gray",
  }
};

export default Header;
