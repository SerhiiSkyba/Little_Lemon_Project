import logo from './logo.svg';
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Commponents/Header.js';
import Main from './Commponents/Main.js';
import Footer from './Commponents/Footer.js';
import Reservation from './Commponents/Reservation.js';
import Login from './Commponents/Login.js';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Reservation' element={<Reservation />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
