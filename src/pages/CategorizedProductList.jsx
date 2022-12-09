// 商品のラインナップ
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CategorizedProductList(props) {

    const params = useParams();
    const name = params.img;

    const item = props.CategorizedProducts.get(name);

    const list = Array.from(props.CategorizedProducts.keys()).map(
        (s) => {
          return (
            <div>
              <Link to={'/CategorizedProducts/number/keys' + s}>
                <img src={"images//" + s + ".jpg"} alt="s" className="Lineupicon" ></img>
              </Link>
              <p>{props.CategorizedProducts.get(s).type}</p>
            </div>
          )
        }
      );

    return (
        <div>
            <h1>GoodsListのページです</h1>
            <h2>{item.type} キーキャップ一覧</h2>
            {/* <div>{list}</div> */}
        </div>
    );

}

export default CategorizedProductList;