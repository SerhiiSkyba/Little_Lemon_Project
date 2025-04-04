import { Link } from "react-router-dom"
import Logo from "../Resources/Logo.png"
export default function Header(){
    return (
        <header>
            <Link to="/"><img src={Logo} alt="Logo Little Lemon"></img></Link>
            <nav>
                <ul className="row">
                    <li><Link to="/"><a>Home</a></Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <Link to="/Reservation"><li><a href="#">Reservations</a></li></Link>
                    <li><a href="#">Order Online</a></li>
                    <li><Link to="/Login"><a>Login</a></Link></li>
                </ul>
            </nav>
        </header>
    );
}