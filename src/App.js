import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Products from './Component/Pages/Products';
import Contact from './Component/Pages/Contact';
import Singleproduct from './Component/Pages/SingleProduct';
import Cart from './Component/Pages/Cart';
import ErrorPage from './Component/Pages/ErrorPage';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Component/Style/GlobalStyle';
import Header from './Component/Header';
import Footer from './Component/Pages/Footer';

function App() {
  const theme={
    colors:{
      bg: "#e1ecec;",
      hover: "#cc9e47;",
      icon:"#6f71dd",
    },
    media:{
      mobile: "750px"
    }
  }
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path='/singleProduct/:id' element={<Singleproduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
