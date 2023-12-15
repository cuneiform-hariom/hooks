import React, { useState } from 'react'
import Form from './Form';

export default function Usestate() {

    const [text, setText] = useState("Blue")

    const toggletext = () => {
        text === "Blue" ? setText("Red") : setText("Blue");
    }

    const students = [
        {
            id: 1,
            name: "Hariom",
            subject: "Maths"
        },
        {
            id: 2,
            name: "Narayan",
            subject: "Bio"
        },
        {
            id: 3,
            name: "Sunil",
            subject: "Commerce"
        }
    ]

    const [studentArray, setStudentArray] = useState(students)

    const clearArray = () => {
        setStudentArray([])
    }

    const [myObject, setMyObject] = useState({
        myName: "Hariom",
        age: 25,
        state: "gujarat"
    })

    const updteName = () => {
        setMyObject({ ...myObject, myName: "Karn" })
    }

    const removeElement = (id) => {
        const myNewArray = studentArray.filter((slist) =>{
            return slist.id !== id;
        })

        setStudentArray(myNewArray)
    }

    return (
        <>
            <div style={{
                display: "grid",
                placeContent: "center",
                padding: "100px",
                textAlign: "center",
                background: text,
                color: "white"
            }}>
                <h1>useState </h1>
                <h2>{text}</h2>
                <button onClick={toggletext}>Toggle Text</button>
            </div>
            <div className="arraybox center">
                <h2>useState Array</h2>
                {
                    studentArray.map((slist) => {

                        return (<li key={slist.id} style={{ textAlign: "left", margin: "10px" }}>{slist.name} is from {slist.subject} subject <button onClick={ () => removeElement(slist.id)}>remove</button></li>)
                    })
                }

                <button onClick={clearArray}>Clear</button>

            </div>
            <div className="threedot center" >
                <h1>... operator(Threedot Operator)</h1>
                <h2>name: {myObject.myName}, Age: {myObject.age}, State:{myObject.state}</h2>
                <button onClick={updteName}>Update Name</button>
            </div>
            <hr />
            <Form/>
        </>
    )
}
