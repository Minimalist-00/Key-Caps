import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/Header';
import Home from './pages/Home';
import CategorizedProductList from './pages/CategorizedProductList';
import ProductsDetail from './pages/ProductsDetail';
import { categorizedProducts } from './pages/ProductsData';

function App() {    //関数宣言

  const Category = categorizedProducts

  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/" element={<Home categorizedProducts={Category} />}></Route>
        <Route path="/categorizedProducts/:categoryId" element={<CategorizedProductList categorizedProducts={Category} />}></Route>

        <Route path="/ProductsDetail/:category/:capname" element={<ProductsDetail categorizedProducts={Category} />}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;