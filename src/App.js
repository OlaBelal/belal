import logo from './logo.svg';
import './App.css';
import AppNavbar from './componant/Navbar';
import { Route, Routes } from 'react-router-dom';
import Weman from './componant/Weman';
import Men from './componant/Men';
import Home from './componant/Home';

import Cart from './componant/Cart';

import About from './componant/About';
import UsersInfo from './componant/UsersInfo';
import ProductDetails from './componant/ProductPage';
import Accessories from './componant/Accessories'; 
import Login from './componant/Login';
import Signup from './componant/Signup';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weman" element={<Weman />} />
        <Route path="/Men" element={<Men />} />
        
        <Route path="/Cart" element={<Cart />} />
        
        <Route path="/About" element={<About />} />
        <Route path="/products/add" element={<UsersInfo />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
