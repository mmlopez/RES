import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Carousel } from "react-responsive-carousel";
import Fade from "react-reveal/Fade";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ToggleImageLightBox({ content }) {
  const [isShown, setIsShown] = React.useState(false);
  return (
    <React.Fragment>
      <div onClick={() => setIsShown(!isShown)} style={{ cursor: "pointer" }}>
        <Image {...content} height={content.height} />
      </div>
      {isShown && (
        <Modal
          children={<Image {...content} height="100%" />}
          toggle={() => setIsShown(!isShown)}
        />
      )}
    </React.Fragment>
  );
}

function Modal({ children, modalBackgroundStyle, toggle }) {
  useEffect(() => {
    function windowClick(event) {
      if (event.target.id === "modal") toggle();
    }
    window.addEventListener("click", windowClick);
    return () => window.removeEventListener("click", windowClick);
  });

  return createPortal(
    <div id="modal" style={modalBackgroundStyle}>
      {children}
    </div>,
    document.getElementById("modal")
  );
}
Modal.defaultProps = {
  // the black overlay effect for the modal
  modalBackgroundStyle: {
    position: "fixed",
    zIndex: 10,
    margin: 0,
    padding: "50px 20px 100px 20px",
    left: 0,
    top: 0,
    width: "calc(100% - 40px)",
    height: "calc(100% - 150px)",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.6)",
    textAlign: "center"
  }
};

function LightBoxImage(props) {
  return (
    <Fade>
      <ToggleImageLightBox content={props} />
    </Fade>
  );
}

function Image({ src, caption, height }) {
  return (
    <React.Fragment>
      <img src={src} alt={src} style={{ height, width: "auto" }} />
      {caption ? (
        <p
          className="legend"
          style={{
            textShadow: "1px 1px rgba(0,0,0,.8)",
            backgroundColor: "transparent",
            padding: 0,
            bottom: 20
          }}
        >
          {caption}
        </p>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
Image.defaultProps = { height: 200 };

function Gallery({ images, height }) {
  return (
    <Carousel
      autoPlay
      interval={5000}
      infiniteLoop
      useKeyboardArrows
      dynamicHeight
      showThumbs={false}
      emulateTouch
      onClickItem={e => console.log(e)}
    >
      {images.map((img, i) => (
        <LightBoxImage {...img} key={i} height={height / 3} />
      ))}
    </Carousel>
  );
}
export default Gallery;
