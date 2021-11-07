import React from "react";
import Gallery from "../components/Gallery";

function Photos({ height }) {
  return (
    <React.Fragment>
      <Gallery
        images={[
          {
            src: "https://i.ibb.co/983NWGz/IMG-4373.jpg",
            caption: "Me!"
          },
          {
            src: "https://i.ibb.co/b2Mvj8L/IMG-3270-1.jpg",
            caption: "Miniature me :)"
          },
          {
            src: "https://i.ibb.co/bP1HL6X/IMG-3296.jpg",
            caption:
              "My cousins and I about to watch the Incredibles 2 at the movie theatre"
          },
          {
            src: "https://i.ibb.co/Pz9sccP/IMG-4736.jpg",
            caption: "Michigan Hackers Leadership for Fall 2018"
          },
          {
            src: "https://i.ibb.co/RBwrML9/IMG-1862.jpg",
            caption: "Sniffing flowers"
          },
          {
            src: "https://i.ibb.co/xjpdmVC/IMG-3495.jpg",
            caption: "4th of July fun with friends"
          }
        ]}
        height={height}
      />
    </React.Fragment>
  );
}

export default Photos;
