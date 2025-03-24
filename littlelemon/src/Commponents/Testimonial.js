export default function Testimonial(prop){
    return(
        <testimonial>
            <h4>{prop.rating}</h4>
            <div><img />{prop.name}</div>
            <p>{prop.text}</p>
        </testimonial>
    )
}