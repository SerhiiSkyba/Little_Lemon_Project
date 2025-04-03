
export default function Testimonial(prop){
    return(
            <article className="testimonialInfo column pad24 gap32">
                <div className="row widthAuto gap16 personInfo">
                    <img src={prop.profile} className="profileImage"/>
                    <div className="column">
                        <h5 className="testimaonialName">{prop.name}</h5>
                        <img src={prop.rating} className="rating"/>
                    </div>
                </div>
                <p className="testimonialText">{prop.text}</p>
            </article>
    )
}