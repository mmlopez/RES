import React from "react";
import ReactDOM from "react-dom";
import useWindowSize from "../../GetWindowSize.js";
import Top from "../../sections/Top.js";
import Experience from "../../sections/Experience.js";
import Projects from "../../sections/Projects.js";

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
        <Experience />
        <Projects />
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
