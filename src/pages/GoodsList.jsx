// 商品のラインナップ
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function GoodsList(props) {

    const params = useParams();
    const name = params.img;

    const item = props.Captype.get(name);

    return (
        <div>
            <h1>GoodsListのページです</h1>
            <p>{item.type}</p>
        </div>
    );

}

export default GoodsList;