import React, { useEffect, Fragment, useState } from "react";
import { createPortal } from "react-dom";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Fullscreen from "@material-ui/icons/Fullscreen";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

function ToggleModal({
  content,
  header,
  showModal,
  style,
  defaultStyle,
  iconStyle
}) {
  const [clicked, click] = useState(false);
  return (
    <Fragment>
      <div style={{ display: "block", padding: 8 }}>
        {<div style={{ display: "inline", marginLeft: 20 }}>{header}</div>}
        {showModal ? (
          <IconButton
            style={{
              margin: -10,
              float: "right"
            }}
          >
            <Fullscreen onClick={() => click(!clicked)} style={iconStyle} />
          </IconButton>
        ) : (
          ""
        )}
      </div>

      <div children={content} style={{ ...defaultStyle, ...style }} />

      {clicked && showModal && (
        <Modal
          content={content}
          header={header}
          toggle={() => click(!clicked)}
        />
      )}
    </Fragment>
  );
}
ToggleModal.defaultProps = {
  // Expand and close buttons
  iconStyle: {
    fontSize: 40,
    color: "#555"
  },
  defaultStyle: {
    overflow: "auto"
  },
  showModal: true
};

function Modal({
  header,
  content,
  modalBackgroundStyle,
  iconStyle,
  toggle,
  modalContentStyle
}) {
  useEffect(() => {
    function windowClick(event) {
      if (event.target.id === "modal-popup") toggle();
    }
    window.addEventListener("click", windowClick);
    return () => window.removeEventListener("click", windowClick);
  });

  return createPortal(
    <Fragment>
      <div style={modalBackgroundStyle}>
        <div
          style={{
            ...modalContentStyle,
            display: "block",
            padding: 15,
            borderRadius: "10px 10px 0 0"
          }}
        >
          {<div style={{ display: "inline", marginLeft: 20 }}>{header}</div>}
          <IconButton
            style={{
              margin: -10,
              float: "right"
            }}
          >
            <CloseIcon onClick={toggle} style={iconStyle} />
          </IconButton>
        </div>
        <div
          id="modal-popup"
          style={{ ...modalContentStyle, marginBottom: 200, paddingTop: 0 }}
          children={content}
        />
        <IconButton
          style={{
            position: "fixed",
            backgroundColor: "white",
            border: "2px solid lightgrey",
            borderRadius: "100%",
            bottom: 35,
            right: 50
          }}
        >
          <ArrowUpward
            style={iconStyle}
            onClick={() => {
              document.getElementById("modal-popup").scrollTop = 0;
            }}
          />
        </IconButton>
      </div>
    </Fragment>,
    document.getElementById("modal")
  );
}
Modal.defaultProps = {
  // the black overlay effect for the modal
  modalBackgroundStyle: {
    position: "fixed",
    zIndex: 1,
    paddingTop: 100,
    left: 0,
    top: 0,
    width: "100%",
    height: "calc(100% - 100px)",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.6)",
    showModal: false
  }, // the white container for the modal
  modalContentStyle: {
    zIndex: 2,
    backgroundColor: "#fefefe",
    margin: "auto",
    padding: "15px",
    width: "90%",
    overflow: "auto"
  },
  iconStyle: {
    fontSize: 40,
    color: "#555"
  },
  defaultStyle: {
    overflow: "auto"
  }
};

export default ToggleModal;
