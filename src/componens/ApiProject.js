import React, { useEffect, useState } from 'react'
import Loading from '../Loading'

export default function ApiProject() {

    const [users, setUsers] = useState([])

    const [loading, setLoading] = useState(true)

    const getUsers = async () => {
        try{
            let newurl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=07976c05ec5745479940d02e61d850df`
            let data = await fetch(newurl)
            let parsedData = await data.json()
            setUsers(parsedData.articles)
            setLoading(false)
        }catch(error){
            console.log("API error")
        }
    }


    useEffect(() => {
        getUsers();
    }, [])

    if(loading){
        return <Loading/>
    }

    const imageUrl = 'https://images.app.goo.gl/m19Vk6p8yp1bHxVn9'

    return (
        <div className='git'>
            <h2 className="center">Github Users</h2>
            <div className="container mt-5 p-5">
                <div className="row">

                    {
                        users.map((userElem) => {
                            return (
                                <div className="col-lg-4 newsitems" key={userElem.title}>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-12">
                                                <img src={userElem.urlToImage ? userElem.urlToImage : imageUrl} className="img-fluid rounded-start" />
                                            </div>
                                            <div className="col-md-12">
                                                <div className="card-body">
                                                    <h5 className="card-title">{userElem.title}</h5>
                                                    <p className="card-text">{userElem.content}</p>
                                                    <a href={userElem.url} target='blank' className="btn btn-primary">Read more</a>
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
