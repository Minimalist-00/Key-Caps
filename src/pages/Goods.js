// 岩本先生のプログラムより
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const mockdata = [  //const型のmockdataに書き込む（サーバーから取ってくることもできる（次回に解説））
                    //商品の配列 1つ1つはオブジェクトになっている
                    //URLに書かれているidと対応
    { id: 0, name: "テリア", sum: "甘えん坊で、お留守番は苦手。", desc: "", img: "0.jpg", stock: 3, comment: [] },
    { id: 1, name: "ゴールデンレトリバー", sum: "社交的な性格で、人間好き。", desc: "ゴールデン・レトリーバーは、イギリス原産の大型犬である。賢さ及び忠誠心を兼ね備え、穏和な性格の犬種であるためペットとして広く愛好されている。", img: "1.jpg", stock: 3, comment: [] },
    { id: 2, name: "ふーこ", sum: "たまに岩本研究室に連れてこられる", desc: "足が細い", img: "5.jpg", stock: 1, comment: [] },
    { id: 3, name: "右フック犬", sum: "つよそう", desc: "説明文3", img: "2.jpg", stock: 0, comment: [] },
    { id: 4, name: "Doge", sum: "なんか見たことある犬", desc: "説明文3", img: "2.jpg", stock: 1, comment: [] },
    { id: 5, name: "イヌ", sum: "詳しいことは知らないほうが幸せだ。", desc: "説明文3", img: "10.jpg", stock: 999, comment: [] },
]

export function GoodsList(props) {  //グッズのリストを表示する関数コンポーネント

    const list = mockdata.map(      //mockdataという配列の関数mapをとる
        (c) => {    //cという仮引数をとる関数を定義
            return (
                <div>
                    <Link to={'/detail/' + c.id}>
                        {/* detail + idにすることで、対応したページ飛ぶようになっている */}
                        <p>{c.name}</p>
                        {/* トップページに載せる部分を取り出している */}
                    </Link>
                </div>
            )
        }
    );

    return (    //上で作ったリストをreturnしているだけ
        <div>
            <div>{list}</div>
        </div>
    )
}


export function Detail(props) {     //詳細を表示する関数コンポーネント
    // URL parameter の受け取り
    const params = useParams();  //URLの一部をパラメータとして取ってくることができる
    const id = params.id;  //paramsの中にidという変数をいれる。このidはdetail/:idからきている

    const [item, setItem] = useState(mockdata[id]);  //mockdata[id]を初期値としたstateをitemという変数で作成
                                                     //SetItemによりitemの値を変更可能。mockdateをいじっても変わらない
    const [comtext, setCom] = useState('');

    function handleChange(event) {
        setCom(event.target.value);
    }

    function handleSubmit(event) {
        let copy = Object.assign({}, item);  //itemをコピーするにはitemだけではだめ。これによりオブジェクト自体が変更される
        copy.comment.push(comtext);
        setItem(copy);
        event.preventDefault();
    }

    const comments = item.comment.map((c) => {
        return (<p>{c}</p>)
    })

    return (
        <div>
            <h1>詳細ページです</h1>
            <p>犬のid: {item.id}</p>
            <p>犬の名前: {item.name}</p>
            <p>犬の説明: {item.sum}</p>
            <p>犬の詳細な説明: {item.desc}</p>
            <p>犬の画像</p>
            <img src={item.img} />
            <p>{comments}</p>

            <form onSubmit={handleSubmit}>
                <label>コメント
                    <input type="text" value={comtext} onChange={handleChange} />
                </label>
                <input type="submit" value="投稿" />
            </form>
            <Link to="/">もどる</Link>
        </div>
    );

}