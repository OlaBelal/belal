import logo from './logo.svg';
import './App.css';
import AppNavbar from './componant/AppNavbar';
import { Route, Routes } from 'react-router-dom';
import Weman from './componant/Weman';
import Men from './componant/Men';
import Home from './componant/Home';
import Kids from './componant/Kids';
import Cart from './componant/Cart';
import Acount from './componant/Acount';
import About from './componant/About';
import UsersInfo from './componant/UsersInfo';

import ProductDetails from './componant/ProductDetails';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/Weman" element={<Weman/>} />
      <Route path="/Men" element={<Men />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Acount" element={<Acount />} />
      <Route path="/About" element={<About />} />
      <Route path="/products/add" element={<UsersInfo />} />
      <Route path="/product/:productId" element={<ProductDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
