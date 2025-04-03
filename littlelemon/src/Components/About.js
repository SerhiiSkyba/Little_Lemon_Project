import Images from "../Resources/Images.png"

export default function About(){
    return(
        <section className="background">
            <section className="aboutSection">
                <article className="column">
                    <h1>About Little Lemon</h1>
                    <p>Welcome to Little Lemon, where we serve fresh and flavorful dishes in a cozy atmosphere. Our expert chefs use only the finest ingredients to craft mouth-watering meals that will leave you wanting more.</p>
                </article>
                <img src={Images}/>
            </section>
        </section>
    )
}