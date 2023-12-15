import React, { useState } from 'react'

export default function Form() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allEntry, setAllEntry] = useState([])

    const formSubmit = (e) => {
        e.preventDefault()

        if (email && password) {
            const newEntry = {
                id: new Date().getTime().toString(),
                email: email,
                password: password
            }

            setAllEntry([...allEntry, newEntry])
            console.log(allEntry)
            setEmail("")
            setPassword("")
        }
        else {
            alert("please fill data")
        }
    }

    return (
        <div className='formbox'>
            <h2 className="center">Login Form</h2>
            <form action="" onSubmit={formSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>

                <div>
                    {
                        allEntry.map((entries) => {
                            return (
                                <li key={entries.id}>
                                    id: {entries.id} -
                                    email: {entries.email} -
                                    password: {entries.password}
                                </li>
                            )
                        })
                    }
                </div>
            </form>

            {/* <h2 className="center">Register Form</h2> */}
        </div>
    )
}
