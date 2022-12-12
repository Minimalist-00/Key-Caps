import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import CategorizedProductList from './pages/CategorizedProductList';
import ProductsDetail from './pages/ProductsDetail';
import { categorizedProducts } from './pages/ProductsData';
import ThanksPurchase from "./pages/ThanksPurchase";
import NoMatch from './pages/NoMatch';
import Cart from "./pages/Cart";
import Login from "./pages/Login";


function App() {    //関数宣言

  const Category = categorizedProducts

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home categorizedProducts={Category} />}>
            <Route path="/" element={< Footer />} />
          </Route>
          <Route path="/categorizedProducts/:categoryId" element={<CategorizedProductList categorizedProducts={Category} />} />
          <Route path="/ProductsDetail/:categoryId/:productsId" element={<ProductsDetail categorizedProducts={Category} />} />
          <Route path="/thanksPurchase" element={<ThanksPurchase categorizedProducts={Category} />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
