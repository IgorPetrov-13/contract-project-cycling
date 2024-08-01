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
        </div>
    );
}

export default PesonalPage;