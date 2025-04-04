import ReservationForm from "./ReservationForm"
import { useReducer, useState } from "react"
import Food from "../Resources/Food2.png"
import { fetchAPI } from "../APIs/api"

let initializeDate = new Date()

const updateTimes = (date) => {return fetchAPI(date)} 
const initializeTimes = (date) => {return fetchAPI(date)}
    
const timeAction = (state, action) =>{
    switch(action.type){
        case "update":
            console.log(action.date)
            return {value: updateTimes(action.date)}
    }
}


export default function ReservationSection(){

    const [date, setDate] = useState()

    const [state, dispatch] = useReducer(timeAction, {value: initializeTimes(initializeDate)})

    console.log(state)
    return(
        <main>
            <section className="background">
                <section className="row gap32">
                    <ReservationForm state={state} dispatch={dispatch}/>
                    <img className="ReservationImage" src={Food} alt=""/>
                </section>
            </section>
        </main>
    )
}