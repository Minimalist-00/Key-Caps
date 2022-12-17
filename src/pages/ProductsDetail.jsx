import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function ProductsDetail(props) {

    const params = useParams();  //URLのパラメータを取得
    const categoryId = params.categoryId;  //URLの数字 = categorizedProductsの配列の番号
    const productsId = params.productsId;  //URLの2つめの/の後の数字 = productsの配列の番号

    const product = props.categorizedProducts[categoryId].products[productsId];  //ProductData内のcategorizedProductsのcategory番目の要素のオブジェクトの中のproductsのcapname番目の要素のオブジェクトが入ってる
    const products = props.categorizedProducts[categoryId];

    const [amount, setAmount] = useState(0);

    const [image, setImage] = useState(0);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    let submitButton = <Link to={'/thanksPurchase'} type="button" className="btn btn-secondary">購入する</Link>;


    if (amount === 0) {
        submitButton = <button type="button" className="btn btn-secondary" onClick={() => alert("個数を選択してください！")} style={{ cursor: 'help' }}>購入する</button>
    }

    return (
        <div>
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to={'/'} className="go-back-page" >
                                トップページ
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to={'/categorizedProducts/' + categoryId} className="go-back-page">
                                {products.categoryName}
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">キーキャップ 「{product.capname}」</li>
                    </ol>
                </nav>
            </div>
            <div className="container bg-white border p-3">
                <div className="row">
                    <div className="col-md-1">
                        <img onClick={_ => setImage(0)} src={"/images/products/" + products.img + "/" + product.capname + "_0.jpg"} alt="productsId" className="col-md-12 py-2" />
                        <img onClick={_ => setImage(1)} src={"/images/products/" + products.img + "/" + product.capname + "_1.jpg"} alt="productsId" className="col-md-12 py-2" />
                        <img onClick={_ => setImage(2)} src={"/images/products/" + products.img + "/" + product.capname + "_2.jpg"} alt="productsId" className="col-md-12 py-2" />
                    </div>
                    <div className="col-md-6">
                        <img src={"/images/products/" + products.img + "/" + product.capname + "_" + image + ".jpg"} alt="productsId" className="col-md-11 border border-dark" />
                    </div>
                    <div className="col-md-5 ">
                        <div className="detail">
                            <h2 className="pb-2">キーキャップ 「{product.capname}」</h2>
                            <p className="pb-1">Light Blue & White 109 JIS配列キーボード キーキャップ</p>
                            <p className="pb-1">「{product.capname}」 が印字されたキーキャップです。</p>
                            <ul>
                                <li className="pb-1">ダブルショット(2色成型)のキーキャップです</li>
                                <li className="pb-1">文字部分はバックライトを透過します</li>
                                <li className="pb-1">81/87/104キー標準キーボードに適しています</li>
                                <li className="pb-1">表面はザラザラとしたコーティングがされています</li>
                            </ul>
                            {/* 商品詳細のボックス */}
                            <div className="detail-box">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p>素材</p>
                                        <p>特徴</p>
                                        <p>即日</p>
                                        <p>送料</p>
                                    </div>
                                    <div className="col-md-8">
                                        <p>プラスチック 100%</p>
                                        <p>無地</p>
                                        <p>即日発送不可</p>
                                        <p>無料</p>
                                    </div>
                                </div>
                            </div>
                            {/* 商品情報のボックス */}
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="pb-3">価格：¥{product.price} (tax in)</p>
                                    <select value={amount} onChange={e => setAmount(e.currentTarget.value)} className="custom-select select-amount">
                                        <option value={0} className="font">個数を選択</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                </div>
                                <div className="col-sm-6">
                                    <div className="pb-3">合計金額：¥{amount * product.price} (tax in)</div>
                                    {submitButton}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="py-5" />
        </div>
    );
}

export default ProductsDetail;