import Card from './Card.js'
import Food1 from '../Resources/Food1.png'
import Food2 from '../Resources/Food2.png'
import Food3 from '../Resources/Food3.png'

export default function ThisWeekSpecial(){
    return(
        <section className='background column'>
            <section className='column gap32'>
                <section className='row'>
                    <div><h1>This weeks specials!</h1></div>
                    <div className='invisible' />
                    <div><button>Online Menu</button></div>
                </section>
                <section className='row gap32'>
                    <Card image={Food1} title='Greek salad' price='$12.99' text='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'/>
                    <Card image={Food2} title='Bruchetta' price='$5.99' text='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'/>
                    <Card image={Food3} title='Lemon Dessert' price='$5.00' text='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'/>
                </section>
            </section>
        </section>
    )
}