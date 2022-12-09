// 商品のラインナップ
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function GoodsList(props) {

    // const params = useParams();
    // const img = params.img;

    // const[item, setItem] = useState(props.Captype[img]);

    // const keylist = props.number.map(
    //     (s) => {
    //       return (
    //         <div>
    //           <Link to={'/keys/' + s.img}>
    //             <img src={"images/keys/" + s.img + ".jpg"} alt="s.img" className="keysicon" ></img>
    //           </Link>
    //           <p>{s.type}</p>
    //         </div>
    //       )
    //     }
    //   );

    return (
        <div>
            <h1>GoodsListのページです</h1>
            {/* <p>{item.img}</p> */}
            {/* <div>{list}</div> */}
        </div>
    );

}

export default GoodsList;