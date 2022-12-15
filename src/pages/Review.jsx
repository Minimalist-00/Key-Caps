import React, { useState } from 'react';


function Review() {

    const [inputText, setInputElement] = useState("");
    const [text, setText] = useState("あああああ");

    const printText = () => {
        if (inputText !== "") {
            setText(inputText);
            setInputElement("");
        }
        else {
            setText("文字を入力してください。");
        }
    }

    return (
        <div>
            <h1>入力した文章を表示するアプリ</h1>
            <div className="print">
                <p>{text}</p>
            </div>
            <div className="ctr">
                <input value={inputText} onChange={(e) => setInputElement(e.target.value)} type="text" placeholder="入力してください" />
                <button onClick={printText}>表示する</button>
            </div>


        </div>
    );
}

export default Review;