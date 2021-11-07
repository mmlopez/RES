import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Textbox from "../components/Textbox";

function Projects() {
  return (
    <React.Fragment>
      <Header text="Projects" />
      <Textbox children="content goes in here so that we can test whar i looks like ya kno" />
    </React.Fragment>
  );
}

export default Projects;
