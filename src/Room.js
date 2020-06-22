import React , { useState } from 'react'
import './Room.css'

const Room = () =>{
    const [roomLight, setLight] = useState(true)
    const [Age, setAge] = useState(20)
    return(
        <div className= {`room ${roomLight? "on":"off"}`}>
            Light: {roomLight ? "ON":"OFF"}
            <br/>
            Age : {Age}
            <br/>
            <button onClick={ () => setLight(!roomLight) }>Toggle Button</button>
            <br/>
            <button onClick={ () => {
                console.log("Age Increaed");
                setAge(Age+1)
            }}>Age Botton</button>
        </div>
    )
}

export default Room