import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Home(props) {

  const list = props.categorizedProducts.map(
    (s, index) => {  //ラムダ式（アロー関数）sは引数（引数が1つの場合、()を省略可能）
      return (
        <div key={index}>
          <Link to={'/categorizedProducts/' + index}>
            <img src={"images/categorizedProducts/" + s.img + ".jpg"} alt="s.img" class="col-md-12" />
          </Link>
          <div className="products-box">
            <p class="text-center" >{s.categoryName}</p>
          </div>
        </div>
      )
    }
  );

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fadein-home">
      <AliceCarousel autoPlay autoPlayInterval="3500" autoPlayStrategy='all' infinite keyboardNavigation >
        <img src={"images/Home/Home1.jpg"} class="img-fluid" alt="Home0.jpg" />
        <img src={"images/Home/Home2.jpg"} class="img-fluid" alt="Home2.jpg" />
        <img src={"images/Home/Home3.jpg"} class="img-fluid" alt="Home3.jpg" />
        <img src={"images/Home/Home4.jpg"} class="img-fluid" alt="Home1.jpg" />
        <img src={"images/Home/Home5.jpg"} class="img-fluid" alt="Home1.jpg" />
        <img src={"images/Home/Home6.jpg"} class="img-fluid" alt="Home1.jpg" />
      </AliceCarousel>
      <div className="category-box">
        <div className="category-box-tape" />
        <p className="category-box-title">Caps Category</p>
      </div>
      <div class="container bg-white border pt-4" >
        <div class="row row-cols-3">
          {list}
        </div>
      </div>
      <p class="py-5" />
      <p id="page-top" >
        <a onClick={returnTop}>Page Top</a>
      </p>
    </div >
  );
}

export default Home;