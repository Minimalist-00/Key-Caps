// ホームのBodyに当たる部分
import React from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Body(props) {

  const list = Array.from(props.Captype.keys()).map(
    (s) => {
      return (
        <div>
          <Link to={'/goodslist/' + s}>
            <img src={"images/GoodsList/" + s + ".jpg"} alt="s" className="Lineupicon" ></img>
          </Link>
          <p>{props.Captype.get(s).type}</p>
        </div>
      )
    }
  );

  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="100000">
        <img src={"images/Home0.jpg"} className="slider" alt="Home0.jpg" />
        <img src={"images/Home1.jpg"} className="slider" alt="Home1.jpg" />
        <img src={"images/Home2.jpg"} className="slider" alt="Home2.jpg" />
        <img src={"images/Home3.jpg"} className="slider" alt="Home3.jpg" />
      </AliceCarousel>
      <h2>LINE UP</h2>
      <div>{list}</div>
    </div>
  );
}


export default Body;