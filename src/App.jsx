import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/Header';
import Body from './pages/Body';
import GoodsList from './pages/GoodsList';

function App() {    //関数宣言

  const Captype = new Map();
  Captype.set("number", { type: "数字キー" })
  Captype.set("aplhabet", { type: "アルファベットキー" })
  Captype.set("functionNum", { type: "ファンクションキー" })
  Captype.set("numericKeypad", { type: "テンキー" })
  Captype.set("cursor", { type: "カーソルキー" })
  Captype.set("space", { type: "スペースキー" })
  Captype.set("other1", { type: "その他のキー1" })
  Captype.set("other2", { type: "その他のキー2" })


  const [number, setNumber] = useState([
    { Capname: "1", price: 80 },
    { Capname: "2", price: 80 },
    { Capname: "3", price: 80 },
    { Capname: "4", price: 80 },
    { Capname: "5", price: 80 },
    { Capname: "6", price: 80 },
    { Capname: "7", price: 80 },
    { Capname: "8", price: 80 },
    { Capname: "9", price: 80 },
    { Capname: "0", price: 80 }
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
        <Route path="/goodslist/:img" element={<GoodsList Captype={Captype} />}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;