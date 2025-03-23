import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "../Resources/Logo.png"
export default Header = () =>{
    return (
        <header>
            <img src={Logo}></img>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}