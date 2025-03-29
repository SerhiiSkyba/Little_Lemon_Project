
export default function Testimonial(prop){
    return(
            <article className="testimonialInfo column pad24 gap32">
                <div className="row gap32">
                    <img src={prop.profile} width='56px'/>
                    <div className="column reviewerInfo">
                        <div className="invisible"><h4>{prop.name}</h4></div>
                        <div className="invisible alignLeft"><img src={prop.rating} /></div>
                    </div>
                </div>
                <p className="cardDesc">{prop.text}</p>
            </article>
    )
}