import React , { useState } from 'react'

const Room = () =>{
    const [isLit, setLit] = useState(true)
    const [Age, setAge] = useState(20)
    const ageBotton = () => setAge(Age+3)
    const buttonFunc = () => (
        console.log("Botton Clicked"),
        setLit(!isLit)
    )
    return(
        <div>
            Light: {isLit ? "light":"dark"}
            <br/>
            Age : {Age}
            <br/>
            <button onClick={buttonFunc}>Toggle Button</button>
            <br/>
            <button onClick={ageBotton}>Age Botton</button>
        </div>
    )
}

export default Room