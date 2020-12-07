import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cal1 from ".././images/cal1.jpg";
import cal2 from ".././images/cal2.jpg";
import cal3 from ".././images/cal3.jpg";
function App() {
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop >
      <div>
        <img src={cal1} alt="offer" />
      </div>
      <div>
        <img src={cal2} alt="offer" />
      </div>
      <div>
        <img src={cal3} alt="offer" />
      </div>
    </Carousel>
  );
}

export default App;
