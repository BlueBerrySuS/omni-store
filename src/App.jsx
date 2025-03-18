import MainHeader from './components/Layout/MainHeader';
import Footer from './components/Layout/Footer';
import './App.css'
import Shop1 from './pages/Shop';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
        <MainHeader />
        <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/shop' element={<Shop1 />}/>
         </Routes>
        <Footer />
    </>
  );
};

export default App;