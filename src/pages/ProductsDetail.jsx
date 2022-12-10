import React from 'react';
import Button from '@mui/material/Button';
import { useParams, Link } from 'react-router-dom';


function ProductsDetail(props) {

    const params = useParams();  //URLのパラメータを取得
    const category = params.category;  //URLの数字 = categorizedProductsの配列の番号
    const capname = params.capname;  //URLの2つめの/の後の数字 = productsの配列の番号

    const product = props.categorizedProducts[category].products[capname]  //ProductData内のcategorizedProductsのcategory番目の要素のオブジェクトの中のproductsのcapname番目の要素のオブジェクトが入ってる
    const products = props.categorizedProducts[category]



    return (
        <div>
            <img src={"/images/products/" + capname + ".jpg"} alt="capname" className="products"></img>
            <p>{products.categoryName}</p>
            <p>{product.category}</p>
            <h2>キーキャップ 「{product.capname}」</h2>
            <p>「{product.capname}」が印字されたキーキャップです。</p>
            <p>価格：¥{product.price}</p>

            <select class="custom-select">
                <option selected>個数を選択</option>
                <option quantity="1">1</option>
                <option quantity="2">2</option>
                <option quantity="3">3</option>
                <option quantity="4">4</option>
                <option quantity="5">5</option>
            </select>

            <p>
                {/* space */}
            </p>
            <Button variant="outlined">カートに入れる</Button>
        </div>
    );
}

export default ProductsDetail;