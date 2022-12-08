import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './pages/Header';
import Body from './pages/Body';
import { SubCapList } from './pages/Lineup';

function App() {    //関数宣言
  return (
    <BrowserRouter>
      <Header />  

      <Routes>

        <Route path="/" element={<Body />}></Route>
        <Route path="/lineup/:img" element={<SubCapList />}></Route>

      </Routes>

    </BrowserRouter>
  );
}


export default App;