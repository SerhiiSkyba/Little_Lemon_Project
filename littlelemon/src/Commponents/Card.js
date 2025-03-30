import Icon from "../Resources/Bike.svg"

export default function Card(prop){
    return(
        <div className="column card">
            <img className="cardImage" src={prop.image} />
            <article className="cardInfo column pad24 gap32">
                <div className="row cardTitleAndPrice">
                    <div className="invisible"><h4>{prop.title}</h4></div>
                    <div className="invisible"/>
                    <div className="invisible"><h5>{prop.price}</h5></div>
                </div>
                <p className="cardDesc">{prop.text}</p>
                <button className="OrderDeliveryButton">Order a delivery <img src={Icon} /></button>
            </article>
        </div>
    )
}