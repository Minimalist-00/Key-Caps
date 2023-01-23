import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './pages/Header';
import Home from './pages/Home';
import CategorizedProductList from './pages/CategorizedProductList';
import ProductsDetail from './pages/ProductsDetail';
import { categorizedProducts } from './pages/ProductsData';
import ThanksPurchase from "./pages/ThanksPurchase";
import NoMatch from './pages/NoMatch';
import SignIn from "./pages/SignIn"
import Cart from "./pages/Cart";
import AboutKeyCaps from "./pages/AboutKeyCaps";
import Review from "./pages/Review";
import DesignProposal from "./pages/DesignProposal"

export function ScrollTop() {  //画面遷移時 スクロール位置をページ最上部に固定
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {    //関数宣言

  const Category = categorizedProducts

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home categorizedProducts={Category} />} />
          <Route path="/categorizedProducts/:categoryId" element={<CategorizedProductList categorizedProducts={Category} />} />
          <Route path="/ProductsDetail/:categoryId/:productsId" element={<ProductsDetail categorizedProducts={Category} />} />
          <Route path="/thanksPurchase" element={<ThanksPurchase categorizedProducts={Category} />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/AboutKeyCaps" element={<AboutKeyCaps />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/DesignProposal" element={<DesignProposal />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}