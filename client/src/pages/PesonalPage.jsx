import { useEffect, useState } from "react";
import apiAxiosInstance from "../service/apiAxiosInstace";
import { Link } from "react-router-dom";

function PesonalPage({user}) {
    const [userRoads, setUserRoads] = useState([])

    const getRoad = (event) => {
        // event.preventDefault();

    apiAxiosInstance.get(`/roads/2`) //не забыть поменять на `/roads/${user.id}`
    .then(({data})=> setUserRoads(data.userRoads))
    .catch(err=> console.error(err))
    }
    
    useEffect(()=> {
        getRoad()
    }, [])

    const [title, setTitle]  = useState('')
    const [description, setDescription]  = useState('')
    const [map, setMap]  = useState('')
    const [length, setLength]  = useState(null)
    const [city, setCity]  = useState('')


    const addNewRoad= (event) => {
        event.preventDefault();
        apiAxiosInstance.post('/roads',  {title,description,map,length, city,userId: 2})
        .then(({data})=> setUserRoads(prevstate => [...prevstate, data.newRoad]))
        .catch(err=> console.error(err))
    }



    return (
        <div>
            <h1>Все твои маршруты</h1>
            <h2></h2>
            {userRoads.map(userRoad => {
                return (
                <section key={userRoad.id}>
                        <Link to={`/myroads/${userRoad.id}`}>{userRoad.title}</Link>
                    </section>
            )
            })}
            <form  onSubmit={addNewRoad}>
                <input type="text" placeholder="Описание" onChange={(event)=> setTitle(event.target.value)}/>
                <input type="text" placeholder="description" onChange={(event)=> setDescription(event.target.value)}/>
                <input type="text" placeholder="Ссылка на велодорогу" onChange={(event)=> setMap(event.target.value)}/>
                <input type="text" placeholder="Длина дороги в км" onChange={(event)=> setLength(event.target.value)}/>
                <input type="text" placeholder="Город" onChange={(event)=> setCity(event.target.value)}/>
                <button type="submit">Добавить маршрут</button>
            </form>
        </div>
    );
}

export default PesonalPage;