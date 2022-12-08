// 商品のラインナップ（大きな区分け）
import { Link } from 'react-router-dom';

const Captype = [
    { type: "数字キー", img: "number" },
    { type: "アルファベットキー", img: "alphabet" },
    { type: "ファンクションキー", img: "function" },
    { type: "テンキー", img: "numeric-keypad" },
    { type: "カーソルキー", img: "cursor" },
    { type: "スペースキー", img: "space" },
    { type: "その他のキー1", img: "other1" },
    { type: "その他のキー2", img: "other2" }
]

export function CapsList(props) {
    const list = Captype.map(
        (s) => {
            return (
                <div>
                    <Link to={'/lineup/' + s.img}>
                        <img src={"images/Lineup/" + s.img + ".jpg"} alt="s.img" className="Lineupicon" ></img>
                    </Link>
                    <p>{s.type}</p>
                </div>
            )
        }
    );

    return (  //上で作ったリストをreturnする
        <div>
            <div>{list}</div>
        </div>
    )
}
