import logo from './logo.svg';
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Commponents/Header.js';
import Main from './Commponents/Main.js';
import Footer from './Commponents/Footer.js';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
