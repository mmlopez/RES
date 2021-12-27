import React from "react";
import Fade from "react-reveal/Fade";
import Grid from "@material-ui/core/Grid";

function SocialLink({ name, user }) {
  return (
    <Grid item sm>
      <Fade>
        <li>
          <a
            href={"https://www." + name + ".com/" + user}
            className={"icon-" + name}
          >
            {name}
          </a>
        </li>
      </Fade>
    </Grid>
  );
}

function SocialLinks() {
  return (
    <ul className="social-networks">
      <Grid
        container
        justify="center"
        style={{
          margin: "auto",
          marginTop: 45,
          marginBottom: 25
        }}
      >
        <SocialLink name="github" user="mmlopez" />
        <SocialLink name="linkedin" user="in/mike-lopez-3541b9137" />
        <SocialLink name="instagram" user="lopzinsky/" />
        <SocialLink name="facebook" user="mike.lopez.710/" />
      </Grid>
    </ul>
  );
}

export default SocialLinks;
