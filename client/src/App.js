import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Tagline from './components/tagline/Tagline';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Tagline/>
      <Footer/>
    </div>
  );
}

export default App;
