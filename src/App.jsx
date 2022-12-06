import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './pages/Header';
import AppBar from './pages/AppBar';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Home() {  //基準となるHomeページ
  return (
    <div>
    </div>
  );
}