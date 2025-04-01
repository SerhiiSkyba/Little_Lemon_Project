import { Route, Routes } from "react-router-dom";
import Image1 from "../Resources/Image1.png"
import Reservation from "./ReservationForm";
import { Link } from "react-router-dom";
export default function First(){
    function Reserve(){
        return(
            <Routes><Route path="/Reservation" element={<Reservation/>}></Route></Routes>
        );
    }

    return(
        <section className="background firstSection" style={{background: "#495E57"}}>
            <section className="row">
                <article className="column">
                    <h1 style={{color: "#F4CE14"}}>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p style={{color: "#EDEFEE"}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/Reservation"><button>Reserve a Table</button></Link>
                </article>
            <div className="invisible" />
            <img src={Image1} alt="Woman, holding delicious dish" style={{marginBottom: '-128px'}}/>
            </section>
        </section>
    );
}