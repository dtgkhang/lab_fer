import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation'
import Main from './components/Main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { createContext, useState } from 'react';
import "./components/dark.css"
import DetailPage from './components/DetailPage'
import Contact from './components/contact/Contact';
export const ThemeContext = createContext(null)
function App() {

  return (
      <BrowserRouter>
        <div className='App'>
        <Navigation/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
      <Footer/>
        </div>
      </BrowserRouter>
      


  );
}

export default App;
