import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiAxiosInstance from '../service/apiAxiosInstace';

function CurrenRoadId({roads}) {
    const {id} = useParams()
    
    const [curRoad, setCurRoad]= useState({})
    const [updateStatus, setUpdateStatus] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [mapLink, setMapLink] = useState('')
    const navigate = useNavigate()

    function getCurrRoad (){
        // const currentRoad = roads.find(road=> road.id===Number(id))
        // setTitle(currentRoad.title)
        // setDescription(currentRoad.description)
        // setMapLink(currentRoad.mapLink)

        apiAxiosInstance.get((`/roads/${id}`))
        .then(({data})=> setCurRoad(data.road))
        .catch(err=> console.log(err))
    }

    useEffect(() => {
        getCurrRoad()      
    }, [])

    const deleteRoads = () => {
        apiAxiosInstance.delete(`/roads/${id}`)
        .then(()=> {
            navigate('/user')
        })
    }

    const updateRoads=()=> {
        apiAxiosInstance.put(`/roads/${id}`, {title, description})
        .then(() => {
            navigate('/user')
        })
        .catch(err => console.log(err))
    }

    console.log(curRoad.title, curRoad.description)
    return (
        <>
            <h1>{curRoad.title}</h1>
            <h2>{curRoad.description}</h2>
            <iframe src={curRoad.mapLink} 
                width="300"
                height="200"
                frameborder="0"></iframe>

            {updateStatus ? 
            <>
            <section>
                <input type="text" onChange={(event)=> setTitle(event.target.value)} defaultValue={curRoad.title}/>
                <input type="text" onChange={(event)=> setDescription(event.target.value)} defaultValue={curRoad.description}/>
            </section>
            </>
            : 
            <></>}



            <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={deleteRoads}>Delete</button>
            {updateStatus?<button onClick={updateRoads}>Save</button>:<button onClick={() => setUpdateStatus(prevState => !prevState)}>Edit</button> }
        </>
    );
}

export default CurrenRoadId;