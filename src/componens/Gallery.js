import React, { useState } from 'react'

const Menu = [
    {
        id: 1,
        image: require("../assets/images/img1.jpg"),
        name: "Dosa 1",
        category: "breakfast",
        price: "200",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptates consectetur voluptatem corrupti, veritatis ab natus pariatur nihil magni placeat.",

    },
    {
        id: 2,
        image: require("../assets/images/img2.jpg"),
        name: "Dosa 2",
        category: "lunch",
        price: "200",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptates consectetur voluptatem corrupti, veritatis ab natus pariatur nihil magni placeat.",

    },
    {
        id: 3,
        image: require("../assets/images/img3.jpg"),
        name: "Dosa 3",
        category: "evening",
        price: "200",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptates consectetur voluptatem corrupti, veritatis ab natus pariatur nihil magni placeat.",

    },
    {
        id: 4,
        image: require("../assets/images/img4.jpg"),
        name: "Dosa 4",
        category: "dinner",
        price: "200",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptates consectetur voluptatem corrupti, veritatis ab natus pariatur nihil magni placeat.",

    },
    {
        id: 5,
        image: require("../assets/images/img5.jpg"),
        name: "Dosa 5",
        category: "lunch",
        price: "200",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptates consectetur voluptatem corrupti, veritatis ab natus pariatur nihil magni placeat.",

    },
    {
        id: 6,
        image: require("../assets/images/img5.jpg"),
        name: "Dosa 5",
        category: "abc",
        price: "200",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptates consectetur voluptatem corrupti, veritatis ab natus pariatur nihil magni placeat.",

    },
    {
        id: 7,
        image: require("../assets/images/img5.jpg"),
        name: "Dosa 7",
        category: "xyz",
        price: "200",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptates consectetur voluptatem corrupti, veritatis ab natus pariatur nihil magni placeat.",

    }

]

export default function Gallery() {

    const [items, setItems] = useState(Menu)

    const allCategory = [... new Set(Menu.map((catg) => {
        return catg.category;
    }))]
    console.log("allCategory :", allCategory)

    // const [foodCategory, setFoodCategory] = useState(allCategory)


    const filterItem = (cat) => {
        const filterdItem = Menu.filter((curElem) => {
            return curElem.category === cat
        });
        setItems(filterdItem)
    }

    return (
        <div className='container'>
            <h1 className='text-center my-4'>Gallery</h1>
            <div className="menu-items d-flex justify-content-around">
            <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
                {
                    allCategory.map((catgElem, index) => {
                        return (
                            <button className="btn btn-warning" onClick={() => filterItem(`${catgElem}`)} key={index}>{catgElem}</button>
                        )
                    })
                }
                
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    {
                        items.map((elem) => {
                            return (
                                <div className="col-md-3" key={elem.id}>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-12">
                                                <img src={elem.image} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-12">
                                                <div className="card-body">
                                                    <h5 className="card-title">{elem.name}</h5>
                                                    <p className="card-text">{elem.desc}</p>
                                                    <h5>Price: {elem.price}</h5>
                                                    <button className="btn btn-warning btn-sm">Place Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
