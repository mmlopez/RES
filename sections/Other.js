import React from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal";
import Header from "../components/Header.js";
import Design from "./Design.js";

function Other({ width, height }) {
  return (
    <Grid container spacing={2} style={{ marginBottom: 100 }}>
      <Grid item sm={8}>
        <Design max={width * 0.7} />
      </Grid>
      <Grid item sm={4} xs={12}>
        <Header text="Media" />
        <div
          className="embed-container"
          style={{
            position: "relative",
            height,
            overflow: "hidden",
            width: "auto",
            maxHeight: 500
          }}
        >
          <Fade>
            <iframe
              title="playlist"
              src="https://open.spotify.com/embed/playlist/5nalNg7HGGNBTxMb6Xyivt"
              allowtransparency="true"
              allow="encrypted-media"
              style={{
                opacity: 0.5,
                height: "-webkit-fill-available",
                maxHeight: 500,
                border: "none"
              }}
            />
          </Fade>
        </div>
      </Grid>
    </Grid>
  );
}

export default Other;
