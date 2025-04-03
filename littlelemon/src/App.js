import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import ReservationSection from './Components/ReservationSection.js';
import Login from './Components/Login.js';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Reservation' element={<ReservationSection />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
