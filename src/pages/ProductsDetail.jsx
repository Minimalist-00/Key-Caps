import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';


function ProductsDetail(props) {

    const params = useParams();  //URLのパラメータを取得
    const categoryId = params.categoryId;  //URLの数字 = categorizedProductsの配列の番号
    const productsId = params.productsId;  //URLの2つめの/の後の数字 = productsの配列の番号

    const product = props.categorizedProducts[categoryId].products[productsId];  //ProductData内のcategorizedProductsのcategory番目の要素のオブジェクトの中のproductsのcapname番目の要素のオブジェクトが入ってる
    const products = props.categorizedProducts[categoryId];

    const [amount, setAmount] = useState(0);

    const [image, setImage] = useState(0);


    let submitButton = <Link to={'/thanksPurchase'} type="button" class="btn btn-outline-dark">購入する</Link>; //

    if (amount == 0) {
        submitButton = <button type="button" class="btn btn-outline-dark">購入する</button>;
        
        //アラートの表示をさせたい
    }

    return (
        <div>
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <Link to={'/'} className="go-back-page" >
                                トップページ
                            </Link>
                        </li>
                        <li class="breadcrumb-item">
                            <Link to={'/categorizedProducts/' + productsId} className="go-back-page">
                                {products.categoryName}
                            </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">キーキャップ 「{product.capname}」</li>
                    </ol>
                </nav>
            </div>
            <div className="d-flex justify-content-start">
                <div>
                    <img onClick={_ => setImage(0)} src={"/images/products/" + productsId + "_0.jpg"} alt="productsId" className="products d-block" />
                    <img onClick={_ => setImage(1)} src={"/images/products/" + productsId + "_1.jpg"} alt="productsId" className="products d-block" />
                    <img onClick={_ => setImage(2)} src={"/images/products/" + productsId + "_2.jpg"} alt="productsId" className="products d-block" />
                </div>
                <img src={"/images/products/" + productsId + "_" + image + ".jpg"} alt="productsId" className="products" />
            </div>
            <h2>キーキャップ 「{product.capname}」</h2>
            <p>「{product.capname}」が印字されたキーキャップです。</p>
            <p>価格：¥{product.price}</p>

            <select value={amount} onChange={e => setAmount(e.currentTarget.value)} class="custom-select">
                <option value={0}>個数を選択</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            <p></p>
            <div>合計金額：¥{amount * product.price}</div>
            <p></p>

            {/*  */}

            {submitButton}
        </div>
    );
}

export default ProductsDetail;


<img>
    <div className="">

    </div>
</img>