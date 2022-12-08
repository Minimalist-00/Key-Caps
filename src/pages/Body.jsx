// ホームのBodyに当たる部分

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Body() {
  return (
    <div>
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={"images/Home0.jpg"} className="slider" />
          <img src={"images/Home1.jpg"} className="slider" />
          <img src={"images/Home2.jpg"} className="slider" />
          <img src={"images/Home3.jpg"} className="slider" />
        </AliceCarousel>
      <h2>LINE UP</h2>
    </div>
  );
}

export default Body;