import ReservationForm from "./ReservationForm"
import { useReducer, useState } from "react"
const updateTimes = () => {return(["17:00","18:00","19:00","20:00","21:00"])} 
const initializeTimes = () => {return(["1:00","2:00","3:00"])}
    
const timeAction = (state, action) =>{
    switch(action.type){
        case "update":
            return {value: updateTimes()}
    }
}

export default function ReservationSection(){
    const [state, dispatch] = useReducer(timeAction, {value: initializeTimes()})

    return(
        <main>
            <section className="row">
                <ReservationForm state={state} dispatch={dispatch}/>
                <img />
            </section>
        </main>
    )
}