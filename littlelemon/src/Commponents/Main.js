import First from "./First.js";
import About from "./About.js";
import Testimonials from "./Testimonials.js";
import ThisWeekSpecial from "./ThisWeekSpecial.js";

export default function Main(){
    return (
        <main>
            <First />
            <ThisWeekSpecial />
            <Testimonials />
            <About />
        </main>
    );
}