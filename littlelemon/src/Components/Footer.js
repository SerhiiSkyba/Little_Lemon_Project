import LogoMonochrome from "../Resources/Little Lemon Logo Monochrome.png"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer>
            <Link to="/"><img src={LogoMonochrome} alt="Little Lemon Logo"/></Link>
            <nav className="row ">
                <ul className="column">
                    <li><h4>Doormat Navigation</h4></li>
                    <li><Link to="/"><a>Home</a></Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <Link to="/Reservation"><li><a href="#">Reservations</a></li></Link>
                    <li><a href="#">Order Online</a></li>
                    <li><Link to="/Login"><a>Login</a></Link></li>
                </ul>
                <ul className="column">
                    <li><h4>Contact</h4></li>
                    <li><a href="#">Adress</a></li>
                    <li><a href="#">Phone Number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
                <ul className="column">
                    <li><h4>Social Media links</h4></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </nav>
        </footer>
    );
}