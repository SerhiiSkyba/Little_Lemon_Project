import { useReducer, useState } from "react"
import { submitAPI } from "../APIs/api"

export default function ReservationForm(prop){

    const [selectedTime, setSelectedTime] = useState(prop.state.value[0])

    let today = new Date()
    
    let month = today.getMonth()
    let day = today.getDate()
    if (month < 10) {month = "0" + (month + 1)}
    if (day < 10) {day = "0" + (day + 1)}

    const [date, setDate] = useState(today.getFullYear() + '-' + month + '-' + day)

    const [numberOfGuests, setNumberOfGuests] = useState(1)

    const occasion = ["None","Anniversary","Birthday"]

    const [selectedOccasion, setSelectedOccasion] = useState(occasion[0])

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table was reserved successfully!")
    }

    const ErrorMessage = (prop) => {
        return (
            <p className="error">{prop.message}</p>
        )
    }

    const ValidForm = () =>{
        return(
            date !== '' &&
            new Date(date).getTime() >= new Date().getTime() &&
            numberOfGuests > 0 &&
            numberOfGuests < 10
        );
    }

    return(
    <form onSubmit={handleSubmit} className="column">
        <h3>Reserve a Table</h3>
        <label for="res-date">Choose date <span className="required">*</span></label>
        <input type="date" id="res-date" onChange={(e) => {setDate(e.target.value); prop.dispatch({ type: "update", date: new Date(e.target.value)})}} value={date}/>
        {date == '' ? <ErrorMessage message="Please, choose a date"/> : null}
        {new Date(date).getTime() <= new Date().getTime() ? <ErrorMessage message="Date should to be at least one day tomorrow from todays date"/> : null}
        <label for="res-time">Choose time <span className="required">*</span></label>
        <div className="customSelect">
            <select id="res-time" onChange={(e) => setSelectedTime(e.target.value)} placeholder="Select time of reservation" value={selectedTime}>
                {prop.state.value.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                ))}
            </select>
        </div>
        <label for="guests">Number of guests <span className="required">*</span></label>
        <input type="number" placeholder="Write a number of guests" min="1" max="10" id="guests" onChange={(e) => setNumberOfGuests(e.target.value)} value={numberOfGuests}/>
        {numberOfGuests == 0 || numberOfGuests < 0 || numberOfGuests > 10 ? <ErrorMessage message="Please, write a number of guests from 1 to 10"/> : null}
        <label for="occasion">Occasion</label>
        <div className="customSelect">
            <select id="occasion" onChange={(e) => setSelectedOccasion(e.target.value)} value={selectedOccasion}>
                {occasion.map((occasion, index) => (
                        <option key={index} value={occasion}>{occasion}</option>
                ))}
            </select>
        </div>
       
        <input type="submit" className="SubmitButton" onClick={console.log(submitAPI())} value="Make Your reservation" disabled={!ValidForm()}/>
    </form>
    )
}