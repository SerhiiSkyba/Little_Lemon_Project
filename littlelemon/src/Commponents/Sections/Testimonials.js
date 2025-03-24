import Testimonial from "../Testimonial.js"

export default function Testimonials(){
    return(
        <section>
            <Testimonial rating='Rating' name='Name' text='Review text'/>
            <Testimonial rating='Rating' name='Name' text='Review text'/>
            <Testimonial rating='Rating' name='Name' text='Review text'/>
            <Testimonial rating='Rating' name='Name' text='Review text'/>
        </section>
    )
}