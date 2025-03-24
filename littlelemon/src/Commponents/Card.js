export default function Card(prop){
    return(
        <card>
            <img></img>
            <article>
                <div>
                    <h3>{prop.title}</h3>
                    <h4>{prop.price}</h4>
                </div>
                <p>{prop.text}</p>
                <a>Order a delivery <img /></a>
            </article>
        </card>
    )
}