import React , { useState } from 'react'

const Room = () =>{
    const [roomLight, setLight] = useState(true)
    const [Age, setAge] = useState(20)
    const ageBotton = () => setAge(Age+1)
    return(
        <div>
            Light: {roomLight ? "ON":"OFF"}
            <br/>
            Age : {Age}
            <br/>
            <button onClick={ () => setLight(!roomLight) }>Toggle Button</button>
            <br/>
            <button onClick={ageBotton}>Age Botton</button>
        </div>
    )
}

export default Room