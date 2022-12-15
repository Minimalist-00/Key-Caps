import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CategorizedProductList(props) {

  const params = useParams();  //URLのパラメータを取得
  const categoryId = params.categoryId;  //URLの数字 = ProductsDataのcategorizedProductsの配列の番号

  const item = props.categorizedProducts[categoryId];

  const productsList = item.products.map(
    (product, index) => {
      return (
        <div key={index}>
          <Link to={'/ProductsDetail/' + categoryId + "/" + index}>
            <img src={"/images/products/" + item.img + "/" + product.capname + "_0.jpg"} alt="product.capname" class="col-md-12" />
          </Link>
          <div className="product-box">
          <p class="text-center">{product.capname}キー</p>
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
    <div>
      <body>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to={'/'} className="go-back-page" >
                トップページ
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{item.categoryName}</li>
          </ol>
        </nav>
        <div class="container" >
        <h2 >{item.categoryName} キーキャップ一覧</h2>
          <div class="row row-cols-4 bg-white border pt-4 px-3">
            {productsList}
          </div>
        </div>
        <p class="py-5" />
        <p id="page-top" >
          <a onClick={returnTop}>Page Top</a>
        </p>
      </body>
    </div>
  );

}

export default CategorizedProductList;