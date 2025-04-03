import ReservationForm from "./ReservationForm"
import { useEffect, useReducer, useState } from "react"
import Food from "../Resources/Food2.png"


const updateTimes = () => {return(["17:00","18:00","19:00","20:00","21:00"])} 
const initializeTimes = () => {return(["0:00","1:00"])}
    
const timeAction = (state, action) =>{
    switch(action.type){
        case "update":
            return {value: updateTimes()}
    }
}

export default function ReservationSection(){

    const [state, dispatch] = useReducer(timeAction, {value: initializeTimes()})

    const [data, setData] = useState()

    fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
    .then(response => response.text())
    .then(script => {
        setData(script); // Executes the JavaScript file
    })
    .catch(error => console.error('Error fetching script:', error));

    console.log(data)
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