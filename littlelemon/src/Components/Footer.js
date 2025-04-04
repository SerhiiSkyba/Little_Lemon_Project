import LogoMonochrome from "../Resources/Little Lemon Logo Monochrome.png"

export default function Footer(){
    return(
        <footer>
            <Link to="/"><img src={LogoMonochrome} alt="Little Lemon Logo"/></Link>
            <nav className="row ">
                <ul className="column">
                    <li><h4>Doormat Navigation</h4></li>
                    <Link to="/"><img src={Logo} alt="Logo Little Lemon"></img></Link>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
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