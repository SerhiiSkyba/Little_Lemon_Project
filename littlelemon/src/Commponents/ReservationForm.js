import { useState } from "react"

export default function ReservationForm(){
    const [date, setDate] = useState({
        value: "",
        isTouched: false
    })

    const [time, setTime] = useState({
        value: "17:00",
    })

    const [numberOfGuests, setNumberOfGuests] = useState(1)

    const [occasion, setOccasion] = useState("None")

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
            numberOfGuests > 0 &&
            numberOfGuests < 10
        );
    }

    return(
    <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
        <h3>Reserve a Table</h3>
        <label for="res-date">Choose date <span className="required">*</span></label>
        <input type="date" id="res-date" onChange={(e) => setDate({...date, value: e.target.value})} onBlur={(e) => setDate({...date, isTouched: true})} placeholder="Select a date of reservation"/>
        {date.isTouched && date.value == '' ? <ErrorMessage message="Please, choose a date"/> : null}
        <label for="res-time">Choose time <span className="required">*</span></label>
        <div className="customSelect">
            <select id="res-time" onChange={(e) => setTime({...time, value: e.target.value})} onBlur={(e) => setTime({...time, isTouched: e.target.value})} placeholder="Select time of reservation">
                <option>17:00</option>
                <hr />
                <option>18:00</option>
                <hr />
                <option>19:00</option>
                <hr />
                <option>20:00</option>
                <hr />
                <option>21:00</option>
                <hr />
                <option>22:00</option>
            </select>
        </div>
        {time.value == '' ? <ErrorMessage message="Please, choose a time"/> : null}
        <label for="guests">Number of guests <span className="required">*</span></label>
        <input type="number" placeholder="Write a number of guests" min="1" max="10" id="guests" onChange={(e) => setNumberOfGuests(e.target.value)}/>
        {numberOfGuests == 0 || numberOfGuests < 0 || numberOfGuests > 10 ? <ErrorMessage message="Please, write a number of guests from 1 to 10"/> : null}
        <label for="occasion">Occasion</label>
        <div className="customSelect">
            <select id="occasion" onChange={(e) => setOccasion({...occasion, value: e.target.value})}>
                <option>None</option>
                <hr />
                <option>Birthday</option>
                <hr />
                <option>Anniversary</option>
            </select>
        </div>
       
        <input type="submit" className="SubmitButton" value="Make Your reservation" disabled={!ValidForm()}/>
    </form>
    )
}