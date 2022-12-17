import React, { useState } from 'react';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

function Review() {
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

    const [value, setValue] = React.useState(0);  //星の数を変える

    const list = textList.map(
        (text, i) => <p>{i + 1} : {text}</p>
    );

    return (
        <div>
            <div className="bg-white border p-3 m-5" >
                <div className="row">
                    <h2 className="pb-2">KeyCapsへのレビューを書く</h2>
                    <Box sx={{ '& > legend': { mt: 2 }, }}>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                    </Box>
                    <div className="col-md-5">
                        <div className="form-floating pb-3">
                            <textarea className="form-control w-75" placeholder="Leave a comment here" style={{ height: 150 }} value={inputText} onChange={(e) => setInputText(e.target.value)} />
                            {/* onChange={(e) => setInputText(e.target.value)} が、goods.jsのhandleChangeと同じことを表している。仮引数eとしてアロー関数で記述。これによりsetInputTextが常に更新される */}
                            <label for="floatingTextarea">レビュー</label>
                        </div>
                        <Button variant="outlined" endIcon={<SendIcon />} onClick={updateList}>投稿する</Button>
                    </div>
                    <div className="col-md-6 border rounded">
                        <div className="print">
                            <p className="my-2 mx-1">{list}</p>
                        </div>
                    </div>
                </div>
                <p className="py-5" />
            </div>
        </div>
    );
}

export default Review;