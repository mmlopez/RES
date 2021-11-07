import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

function Design({ max }) {
  return (
    <div style={{ maxWidth: max }}>
      <Header text="Design" />
      <Gallery
        images={[
          {
            src: "https://i.ibb.co/QpVVWrZ/massmeeting.png",
            caption: "Flyer for Michigan Hackers Fall 2018 Mass Meeting"
          },
          {
            src: "https://i.ibb.co/BCMN4VK/3.png",
            caption: "Concept for one of my high school's theatre productions"
          },
          {
            src: "https://i.ibb.co/F3sry9C/apposter.png",
            caption:
              "Flyer created to encourage students at my high school to take AP classes, as a majority of students are minorities, first-generation students, or economically disadvantaged"
          },
          {
            src: "https://i.ibb.co/BP8n3pK/poster-No-Bleed.png",
            caption:
              "Poster created for Business Professionals of America Graphic Design competition"
          },
          {
            src: "https://i.ibb.co/Bj9hXsZ/ignorarchyremastered-edited.png",
            caption: "AP World History shirt design"
          },
          {
            src: "https://i.ibb.co/KxVJjzV/zombieland.png",
            caption: "Concept for my high schools haunted house feature"
          },
          {
            src: "https://i.ibb.co/6yk8wPz/nhs.png",
            caption: "National Honor Society redesigned logo and shirt front"
          },
          {
            src: "https://i.ibb.co/6gRFPvx/botsmixum.png",
            caption:
              "Design for the 'Battle of the Schools' hackathon between University of Michigan and Michigan State University students"
          },
          {
            src: "https://i.ibb.co/8Dwr9SF/massmeetingdraft.png",
            caption:
              "Fun concept for social media marketing, through Facebook Profile pictures, for the Michigan Hackers Mass Meeting"
          }
        ]}
        height={(max * 5) / 3}
        width={max}
      />
    </div>
  );
}

export default Design;
