import React from "react";
import Grid from "@material-ui/core/Grid";

function Container({ content }) {
  return (
    <Grid
      container
      justify="center"
      style={{
        width: "90%",
        margin: "5%"
      }}
    >
      {content}
    </Grid>
  );
}

export default Container;
