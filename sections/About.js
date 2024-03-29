import React, { Fragment } from "react";
import Header from "../components/Header";
import Textbox from "../components/Textbox";
import Grid from "@material-ui/core/Grid";
import Photos from "./Photos.js";
import { Button } from "@material-ui/core";

function ContactLink({ action, label, value }) {
  return (
    <div>
      {label}
      {": "}
      <a href={action + ":" + value}>{value}</a>
    </div>
  );
}

var attr = {
  age: 20,
  homeTown: `Grand Rapids, MI`,
  nationality: `Vietnamese-American`,
  graduationDate: `May 2021`,
  location: `Los Angeles, CA`
};
function About({ width }) {
  return (
    <Fragment>
      <Header text="About" />
      <Textbox>
        <Grid container spacing={2}>
          <Grid item sm={7} style={{ fontSize: "1.15em" }}>
            Welcome to my little space online. I have my contact info, websites,
            and resume here.
            <br />
            <br />
            <ContactLink action="tel" value="6236983036" label="Cell Phone" />
            <ContactLink
              action="mailto"
              value="lopez975@gmail.com"
              label="Personal Email"
            />
            <ContactLink
              action="mailto"
              value="info@usedforkliftpartsaz.com"
              label="Business"
            />
            <br />
            <a
              href="https://docs.google.com/document/d/1n4l282QCp01k7ZLYrEbx_NApyLOAhVlUTL5RAfFh998/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button children="Resume" />
            </a>
            <a href="tel:6167275559" target="_blank" rel="noopener noreferrer">
              <button children="Call" />
            </a>
            <a
              href="mailto:lopez975@gmail.comm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button children="Email" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <button children="Calendar" />
            </a>
          </Grid>
          <Grid item sm={5}>
            <div
              style={{
                maxWidth: width * 0.6,
                width: "100%",
                margin: "auto"
              }}
            >
              <Photos height={600} />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item sm>
            <div
              style={{
                margin: "auto"
              }}
            >
              <pre
                style={{
                  fontFamily: "inherit",
                  textAlign: "left",
                  whiteSpace: "pre-wrap"
                }}
              ></pre>
            </div>
          </Grid>
        </Grid>
      </Textbox>
    </Fragment>
  );
}

export default About;
