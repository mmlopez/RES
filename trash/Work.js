import React from "react";
import Projects from "./Projects.js";
import Design from "./Design.js";
import Grid from "@material-ui/core/Grid";

function Work({ max }) {
  return (
    <Grid container spacing={1}>
      <Grid item sm={7}>
        <Projects />
      </Grid>
      <Grid item sm={5}>
        <Design max={max} />
      </Grid>
    </Grid>
  );
}

export default Work;
