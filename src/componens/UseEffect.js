import React, { useEffect, useState } from 'react'

export default function UseEffect() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count >= 1) {
            document.title = `chats(${count})`
        }
    },[count])

    const [screenWidth, setScreenWidth] = useState(window.screen.width)

    useEffect(() => {
      window.addEventListener("resize", actualWidth)

      return () =>{
        window.removeEventListener("resize", actualWidth)
      }

    })
    
    const actualWidth = () =>{
      setScreenWidth(window.innerWidth)
    }

    return (
        <div className='center'>
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click</button>

            <div>
                <p>size of window is </p>
                <h2>{screenWidth}</h2>
            </div>
        </div>
    )
}
