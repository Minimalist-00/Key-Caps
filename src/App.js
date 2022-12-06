import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
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