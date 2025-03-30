import Testimonial from "./Testimonial.js"
import Ruben from "../Resources/Ruben.png"
import Sanaa from "../Resources/Sanaa.png"
import Brooke from "../Resources/Brooke.png"
import Rating0 from "../Resources/Rating0.png"
import Rating1 from "../Resources/Rating1.png"
import Rating2 from "../Resources/Rating2.png"
import Rating3 from "../Resources/Rating3.png"
import Rating4 from "../Resources/Rating4.png"
import Rating5 from "../Resources/Rating5.png"


export default function Testimonials(){
    return(
        <section className="background column gap32">
            <section className="column">
                <h1>What customers are thinking about us</h1>
                <section className="row gap32">
                    <Testimonial rating={Rating5} name='Brooke Mendez' profile={Brooke} text='Little Lemon’s fresh, flavorful food and cozy vibe make every visit special. The staff is amazing, and I always leave happy. Highly recommend!'/>
                    <Testimonial rating={Rating5} name='Sanaa Mcconnell' profile={Sanaa} text='Little Lemon never disappoints! Great food, friendly service, and a welcoming atmosphere. Perfect for any occasion. My favorite spot in town!'/>
                    <Testimonial rating={Rating4} name='Ruben Oneal' profile={Ruben} text='The food is incredible, the service is top-notch, and the ambiance is perfect. I always bring friends here, and they love it too!'/>
                </section>
            </section>
        </section>
    )
}