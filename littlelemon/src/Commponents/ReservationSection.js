import ReservationForm from "./ReservationForm"
import { useReducer, useState } from "react"
function updateTimes(){
    return (["17:00","18:00","19:00","20:00","21:00"])
}
function initializeTimes(){

}

const availableTimes = (state, action) =>{
    switch(action){
        case "update":
            state = updateTimes();
            return(state)
        case "initialize":
            state = initializeTimes();
            return(state)
    }
}

export default function ReservationSection(){
    
    
    return(
        
        
        <main>
            <section className="row">
                <ReservationForm time={time}/>
                <img />
            </section>
        </main>
    )
}