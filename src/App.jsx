import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import CategorizedProductList from './pages/CategorizedProductList';
import ProductsDetail from './pages/ProductsDetail';
import { categorizedProducts } from './pages/ProductsData';
import ThanksPurchase from "./pages/ThanksPurchase";

function App() {    //関数宣言

  const Category = categorizedProducts

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home categorizedProducts={Category} />}></Route>
          <Route path="/categorizedProducts/:categoryId" element={<CategorizedProductList categorizedProducts={Category} />}></Route>
          <Route path="/ProductsDetail/:categoryId/:productsId" element={<ProductsDetail categorizedProducts={Category} />}></Route>
          <Route path="/thanksPurchase" element={<ThanksPurchase categorizedProducts={Category} />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
