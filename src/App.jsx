import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/Header';
import Body from './pages/Body';
import GoodsList from './pages/GoodsList';

function App() {    //関数宣言

  const [Captype, SetCaptype] = useState([
    { type: "数字キー", img: "number" },
    { type: "アルファベットキー", img: "alphabet" },
    { type: "ファンクションキー", img: "functionNum" },
    { type: "テンキー", img: "numericKeypad" },
    { type: "カーソルキー", img: "cursor" },
    { type: "スペースキー", img: "space" },
    { type: "その他のキー1", img: "other1" },
    { type: "その他のキー2", img: "other2" }
  ])

  const [number, setNumber] = useState([
    { Capname: "1", price: 80 },
    { Capname: "2" },
    { Capname: "3" },
    { Capname: "4" },
    { Capname: "5" },
    { Capname: "6" },
    { Capname: "7" },
    { Capname: "8" },
    { Capname: "9" },
    { Capname: "0" }
  ])

  const [alphabet, setAlphabet] = useState([
    { Capname: "A", img: "1", price: 80 },
    { Capname: "B" },
    { Capname: "C" },
    { Capname: "D" },
    { Capname: "E" },
    { Capname: "F" },
    { Capname: "G" },
    { Capname: "H" },
    { Capname: "I" },
    { Capname: "J" },
    { Capname: "K" },
    { Capname: "L" },
    { Capname: "M" },
    { Capname: "N" },
    { Capname: "O" },
    { Capname: "P" },
    { Capname: "Q" },
    { Capname: "R" },
    { Capname: "S" },
    { Capname: "T" },
    { Capname: "U" },
    { Capname: "V" },
    { Capname: "W" },
    { Capname: "X" },
    { Capname: "Y" },
    { Capname: "Z" }
  ])

  const [functionNum, setFunctionNum] = useState([
    { Capname: "F1" },
    { Capname: "F2" },
    { Capname: "F3" },
    { Capname: "F4" },
    { Capname: "F5" },
    { Capname: "F6" },
    { Capname: "F7" },
    { Capname: "F8" },
    { Capname: "F9" },
    { Capname: "F10" },
    { Capname: "F11" },
    { Capname: "F12" }
  ])

  const [numericKeypad, setNumericKeypad] = useState([
    { Capname: "num0" }
  ])

  const [cursor, setCursor] = useState([
    { Capname: "left" }
  ])

  const [space, Setspace] = useState([
    { Capname: "space" }
  ])

  const [other1, setOther1] = useState([
    { Capname: "esc" }
  ])

  const [other2, setother2] = useState([
    { Capname: "PrintScreen" }
  ])


  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/" element={<Body Captype={Captype} />}></Route>
        <Route path="/goodslist/:img" element={<GoodsList />}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;