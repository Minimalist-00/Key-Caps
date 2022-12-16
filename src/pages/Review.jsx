import React, { useState } from 'react';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Review() {

    //今回は受け取るものがないので初期値はなし

    const [inputText, setInputText] = useState('');  //文字を入力する部分
    const [textList, setTextList] = useState([]);  //文字を表示させる部分  初期値には空のリスト

    const updateList = () => {
        const newList = [...textList, inputText];  //「...〇〇」- スプレッド構文：配列の中に要素を加える

        if (inputText !== '') {
            setTextList(newList);
            setInputText('');  //formの中身をリセット
        }
        else {
        }
    }

    const list = textList.map(
        (text, i) => <p>{i+1} : {text}</p>
    );

    return (
        <div class="bg-white border p-3 m-5" >
            <div class="row">
                <h2 class="pb-2">KeyCapsへのレビューを書く</h2>
                <div class="col-md-5">
                    <div class="form-floating pb-3">
                        <textarea class="form-control w-75" placeholder="Leave a comment here" style={{ height: 150 }} value={inputText} onChange={(e) => setInputText(e.target.value)} />
                        {/* onChange={(e) => setInputText(e.target.value)} が、goods.jsのhandleChangeと同じことを表している。仮引数eとしてアロー関数で記述。これによりsetInputTextが常に更新される */}
                        <label for="floatingTextarea">レビュー</label>
                    </div>
                    <Button variant="outlined" endIcon={<SendIcon />} onClick={updateList}>投稿する</Button>
                </div>
                <div class="col-md-6 border rounded">
                    <div className="print">
                        <p class="my-2 mx-1">{list}</p>
                    </div>
                </div>
            </div>
            <p class="py-5" />
        </div>
    );
}

export default Review;