
export default function Testimonial(prop){
    return(
            <article className="testimonialInfo column pad24 gap32">
                <div className="row widthAuto gap16">
                    <img src={prop.profile} width='56px' height='56px'/>
                    <div className="column">
                        <h5 className="testimaonialName">{prop.name}</h5>
                        <img src={prop.rating} height='16px' width='120px'/>
                    </div>
                </div>
                <p className="testimonialText">{prop.text}</p>
            </article>
    )
}