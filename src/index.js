import React from "react";
import ReactDOM from "react-dom";
import useWindowSize from "../GetWindowSize.js";
import Top from "../sections/Top.js";
import About from "../sections/About.js";
import SocialLinks from "../sections/SocialLinks.js";
import Experience from "../sections/Experience.js";
import Other from "../sections/Other.js";
import Projects from "../sections/Projects.js";
import { IconButton } from "@material-ui/core";

function App() {
  const window = useWindowSize();
  return (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          top: 0,
          textAlign: "center",
          width: "70%",
          marginLeft: "15%",
          paddingRight: "15%",
          paddingTop: 10,
          height: window.innerHeight,
          overflow: "auto"
        }}
      >
        <Top />
        <SocialLinks />
        <About width={window.innerWidth} />
        <Experience />
        <Projects />
        <Other width={window.innerWidth} height={window.innerHeight} />
      </div>
      <IconButton
        style={{ position: "absolute", bottom: 10, left: 10 }}
        variant="fab"
      >
        <a style={{ color: "white" }} href={""} className={"icon-arrow"} />
      </IconButton>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
