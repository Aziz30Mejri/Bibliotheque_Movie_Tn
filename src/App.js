import React,{useState} from'react';
import './App.css';
import Accueil from './components/Pages/Accueil/Accueil';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Series from './components/Pages/Series/Series';
import Films from './components/Pages/Films/Films';
import Footer from './components/Footer';
import Contact from './components/Pages/Contact/Contact';
import FavoritePage from './components/Pages/FavoritePage/FavoritePage';

const App = () => {
    return(
      <Router>
        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/series' element={<Series/>}/>
          <Route path='/films' element={<Films/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/favorites" element={<FavoritePage/>}/>
        </Routes>
        <Footer/>
      </Router>
    );
}

export default App;

