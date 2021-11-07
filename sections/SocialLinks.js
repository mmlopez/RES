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
        <SocialLink name="github" user="jajanet" />
        <SocialLink name="linkedin" user="in/janet-vu" />
        <SocialLink name="instagram" user="veryjanet" />
        <SocialLink name="facebook" user="jnetvu" />
      </Grid>
    </ul>
  );
}

export default SocialLinks;
