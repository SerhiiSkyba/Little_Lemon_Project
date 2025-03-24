import First from "./Sections/First.js";
import About from "./Sections/About.js";
import Testimonials from "./Sections/Testimonials.js";
import ThisWeekSpecial from "./Sections/ThisWeekSpecial.js";

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