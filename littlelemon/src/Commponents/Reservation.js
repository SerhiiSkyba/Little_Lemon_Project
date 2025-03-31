import { useState } from "react"

export default function Reservation(){
    const [date, setDate] = useState({
        value: "",
        isTouched: false
    })

    const [time, setTime] = useState({
        value: "",
        isTouched: false
    })

    const [numberOfGuests, setNumberOfGuests] = useState({
        value: "1"
    })

    const [occasion, setOccasion] = useState({
        value: "None"
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table was reserved successfully!")
    }

    const ErrorMessage = (prop) => {
        return (
            <p style={{color: '#D32525'}}>{prop.message}</p>
        )
    }

    const ValidForm = () =>{
        return(
            date.value != '' &&
            date.isTouched &&
            time.value != '' &&
            time.isTouched &&
            numberOfGuests > 0 &&
            numberOfGuests < 10
        );
    }

    return(
    <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={(e) => setDate({...date, value: e.target.value})} onBlur={(e) => setDate({...date, isTouched: true})} placeholder="Select a date of reservation"/>
        {date.isTouched && date.value == '' ? <ErrorMessage message="Please, choose a date"/> : null}
        <label for="res-time">Choose time</label>
        <select id="res-time" onChange={(e) => setTime({...time, value: e.target.value})} onBlur={(e) => setTime({...time, isTouched: e.target.value})} placeholder="Select time of reservation">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        {time.isTouched && time.value == '' ? <ErrorMessage message="Please, choose a time"/> : null}
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setNumberOfGuests({...numberOfGuests, value: e.target.value})}/>
        {numberOfGuests == 0 || numberOfGuests < 0 || numberOfGuests > 10 ? <ErrorMessage message="Please, write a number of guests from 1 to 10"/> : null}
        <label for="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => setOccasion({...occasion, value: e.target.value})}>
            <option>Birthday</option>
            <option>None</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" disabled={!ValidForm()}/>
    </form>
    )
}