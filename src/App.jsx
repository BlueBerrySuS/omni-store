import MainHeader from './components/Layout/MainHeader';
import Footer from './components/Layout/Footer';
import './App.css'
import Shop1 from './pages/Shop';
import Home from './pages/Home';
import ProductDetailsPage from './pages/ProductPage';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <>
        <MainHeader />
        <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/shop' element={<Shop1 />}/>
         <Route path='/product' element={<ProductDetailsPage />}/>
         <Route path='/cart' element={<ShoppingCart />}/>
         <Route path='/checkout' element={<Checkout />}/>
         </Routes>
        <Footer />
    </>
  );
};

export default App;