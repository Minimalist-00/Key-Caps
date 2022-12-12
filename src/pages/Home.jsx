import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Home(props) {

  const list = props.categorizedProducts.map(
    (s, index) => {  //ラムダ式（アロー関数）sは引数（引数が1つの場合、()を省略可能）
      return (
        <div key={index}>
          <Link to={'/categorizedProducts/' + index} preventScrollReset={false}>
            <img src={"images/categorizedProducts/" + s.img + ".jpg"} alt="s.img" className="Lineupicon" />
          </Link>
          <p>{s.categoryName}</p>
        </div>
      )
    }
  );

  return (
    <div>
      <div className="home">
        <AliceCarousel autoPlay autoPlayInterval="5000" autoPlayStrategy='all' infinite keyboardNavigation >
          <img src={"images/Home/Home1.jpg"} className="slider" alt="Home0.jpg" />
          <img src={"images/Home/Home2.jpg"} className="slider" alt="Home2.jpg" />
          <img src={"images/Home/Home3.jpg"} className="slider" alt="Home3.jpg" />
          <img src={"images/Home/Home4.jpg"} className="slider" alt="Home1.jpg" />
          <img src={"images/Home/Home5.jpg"} className="slider" alt="Home1.jpg" />
          <img src={"images/Home/Home6.jpg"} className="slider" alt="Home1.jpg" />
        </AliceCarousel>
        <h2>LINE UP</h2>
        <div>{list}</div>
      </div>
      <Outlet />
      {/* ここにルーター内のFooterを表示させる */}
    </div>
  );
}


export default Home;