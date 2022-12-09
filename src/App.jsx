import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/Header';
import Home from './pages/Home';
import CategorizedProductList from './pages/CategorizedProductList';
import ProductsDetail from './pages/ProductsDetail';

function App() {    //関数宣言

  const CategorizedProducts = new Map();  //商品データを全て管理
  CategorizedProducts.set("number", {
    type: "数字キー", products: [
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
    ]
  })

  CategorizedProducts.set("alphabet", {
    type: "アルファベットキー", products: [
      { Capname: "A", price: 80 },
      { Capname: "B", price: 80 },
      { Capname: "C", price: 80 },
      { Capname: "D", price: 80 },
      { Capname: "E", price: 80 },
      { Capname: "F", price: 80 },
      { Capname: "G", price: 80 },
      { Capname: "H", price: 80 },
      { Capname: "I", price: 80 },
      { Capname: "J", price: 80 },
      { Capname: "K", price: 80 },
      { Capname: "L", price: 80 },
      { Capname: "M", price: 80 },
      { Capname: "N", price: 80 },
      { Capname: "O", price: 80 },
      { Capname: "P", price: 80 },
      { Capname: "Q", price: 80 },
      { Capname: "R", price: 80 },
      { Capname: "S", price: 80 },
      { Capname: "T", price: 80 },
      { Capname: "U", price: 80 },
      { Capname: "V", price: 80 },
      { Capname: "W", price: 80 },
      { Capname: "X", price: 80 },
      { Capname: "Y", price: 80 },
      { Capname: "Z", price: 80 }
    ]
  })

  CategorizedProducts.set("functionNum", {
    type: "ファンクションキー", products: [
      { Capname: "F1", price: 80 },
      { Capname: "F2", price: 80 },
      { Capname: "F3", price: 80 },
      { Capname: "F4", price: 80 },
      { Capname: "F5", price: 60 },
      { Capname: "F6", price: 60 },
      { Capname: "F7", price: 60 },
      { Capname: "F8", price: 60 },
      { Capname: "F9", price: 80 },
      { Capname: "F10", price: 80 },
      { Capname: "F11", price: 80 },
      { Capname: "F12", price: 80 }
    ]
  })

  CategorizedProducts.set("numericKeypad", {
    type: "テンキー", products: [
      { Capname: "num0", price: 130 },
      { Capname: "num1", price: 80 },
      { Capname: "num2", price: 80 },
      { Capname: "num3", price: 80 },
      { Capname: "num4", price: 80 },
      { Capname: "num5", price: 80 },
      { Capname: "num6", price: 80 },
      { Capname: "num7", price: 80 },
      { Capname: "num8", price: 80 },
      { Capname: "num9", price: 80 },
      { Capname: "dot", price: 80 },
      { Capname: "numlock", price: 60 },
      { Capname: "slash", price: 60 },
      { Capname: "asterisk", price: 60 },
      { Capname: "minus", price: 60 },
      { Capname: "plus", price: 110 },
      { Capname: "enter", price: 110 }
    ]
  })

  CategorizedProducts.set("cursor", {
    type: "カーソルキー", products: [
      { Capname: "up", price: 70 },
      { Capname: "down", price: 70 },
      { Capname: "left", price: 70 },
      { Capname: "right", price: 70 },
    ]
  })

  CategorizedProducts.set("other1", {
    type: "その他のキー1", products: [
      { Capname: "space", price: 250 },
      { Capname: "minus", price: 80 },
      { Capname: "Equal", price: 80 },
      { Capname: "leftsquare", price: 80 },
      { Capname: "rightsquare", price: 80 },
      { Capname: "semicolon", price: 80 },
      { Capname: "singlequotation", price: 80 },
      { Capname: "comma", price: 80 },
      { Capname: "period", price: 80 },
      { Capname: "slash", price: 80 },
    ]
  })

  CategorizedProducts.set("other2", {
    type: "その他のキー2", products: [
      { Capname: "escape", price: 60 },
      { Capname: "tilde", price: 60 },  // ~
      { Capname: "tab", price: 90 },
      { Capname: "capslock", price: 100 },
      { Capname: "leftshift", price: 120 },
      { Capname: "leftcontrol", price: 80 },
      { Capname: "windows", price: 80 },
      { Capname: "leftalt", price: 80 },
      { Capname: "rightalt", price: 80 },
      { Capname: "fn", price: 80 },
      { Capname: "application", price: 80 },
      { Capname: "rightcontrol", price: 80 },
      { Capname: "rightshift", price: 140 },
      { Capname: "enter", price: 110 },
      { Capname: "backslash", price: 90 },
      { Capname: "backspace", price: 130 }
    ]
  })

  CategorizedProducts.set("other3", {
    type: "その他のキー3", products: [
      { Capname: "printscreen", price: 60 },
      { Capname: "scrolllock", price: 60 },
      { Capname: "pausebreak", price: 60 },
      { Capname: "insert", price: 60 },
      { Capname: "delete", price: 60 },
      { Capname: "home", price: 60 },
      { Capname: "end", price: 60 },
      { Capname: "pageup", price: 60 },
      { Capname: "pagedown", price: 60 }
    ]
  })

  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/" element={<Home CategorizedProducts={CategorizedProducts} />}></Route>
        <Route path="/CategorizedProducts/:img" element={<CategorizedProductList CategorizedProducts={CategorizedProducts} />}></Route>

        <Route path="/CategorizedProducts/:img/ProductsDetail" element={<ProductsDetail CategorizedProducts={CategorizedProducts} />}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;