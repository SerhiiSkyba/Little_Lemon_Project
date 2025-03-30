import Logo from "../Resources/Logo.png"
export default function Header(){
    return (
        <header>
            <img src={Logo}></img>
            <nav>
                <ul className="row">
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