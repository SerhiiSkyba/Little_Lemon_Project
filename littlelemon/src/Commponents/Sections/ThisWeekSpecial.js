import Card from '../Card.js'

export default function ThisWeekSpecial(){
    return(
        <div>
            <section>
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </section>
            <section>
                <Card title='Greek salad' price='$12.99' text='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'/>
                <Card title='Bruchetta' price='$5.99' text='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'/>
                <Card title='Lemon Dessert' price='$5.00' text='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'/>
            </section>
        </div>
    )
}