import React, { useEffect, useState } from 'react'

const getLocalItems = () => {
    let locallist = localStorage.getItem('list')

    if (locallist) {
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return []
    }
}

export default function Todo() {

    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState(getLocalItems())
    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [editedItem, setEditedItem] = useState(null)

    const addItem = () => {
        if (!inputData) {
            alert("enter data")

        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === editedItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem
                })
            )
            setToggleSubmit(true)
            setInputData('')
            setEditedItem(null)
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData])
            setInputData('')
        }
    }

    const deleteItem = (id) => {
        const updatedItem = items.filter((elem, index) => {
            return (
                elem.id !== id
            )
        })

        setItems(updatedItem)
    }

    const editItem = (id) => {
        let editItem = items.find((elem) => {
            return elem.id === id
        })
        console.log(editItem)
        setToggleSubmit(false)
        setInputData(editItem.name)
        setEditedItem(id)
    }

    const deleteAll = () => {
        setItems([])
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(items))
    }, [items]);


    return (
        <div className='mx-auto' style={{ width: "500px" }}>
            <h2 className="center">Todo List</h2>

            <div className="additems my-5">
                <input
                    type="text"
                    placeholder='Add item...'
                    value={inputData}
                    name='inputData'
                    onChange={(e) => { setInputData(e.target.value) }}
                />
                {toggleSubmit ? <button onClick={addItem}>Add Item</button> : <button onClick={addItem}>Save Item</button>}
            </div>

            <div className="allitems">

                {
                    items.map((elem, id) => {
                        return (

                            <div className='my-2 d-flex' key={elem.id}>
                                <span className='mx-3'>{elem.name}</span>
                                <button onClick={() => deleteItem(elem.id)}>Remove item</button>
                                <button onClick={() => editItem(elem.id)}>Edit item</button>
                            </div>
                        )
                    })
                }
                <button onClick={deleteAll}>Remove All</button>
            </div>
        </div>
    )
}
