import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainHeader from './components/Layout/MainHeader';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import './App.css'

const App = () => {
  return (
    <>
        <MainHeader />
         <Home />
        <Footer />
    </>
  );
};

export default App;