import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CategorizedProductList(props) {

  const params = useParams();  //URLのパラメータを取得
  const categoryId = params.categoryId;  //URLの数字 = ProductsDataのcategorizedProductsの配列の番号

  const item = props.categorizedProducts[categoryId];

  const productsList = item.products.map(
    (product, index) => {
      return (
        <div>
          <Link to={'/ProductsDetail/' + categoryId + "/" + index}>
            <img src={"/images/products/" + product.capname + ".jpg"} alt="product.capname" className="products"></img>
          </Link>
          <p>{product.capname}</p>
        </div>
      )
    }
  );

  return (
    <div>
      <h2>{item.categoryName} キーキャップ一覧</h2>
      <div>{productsList}</div>
    </div>
  );

}

export default CategorizedProductList;