import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiAxiosInstance from '../service/apiAxiosInstace';

function CurrenRoadId({roads}) {
    const {id} = useParams()
    const currentRoads = roads.find(road=> road.id===Number(id))
    const [title, setTitle] = useState('');
    const [updateStatus, setUpdateStatus] = useState(false);
    const [description, setDescription] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        setTitle(currentRoads.title)
        setDescription(currentRoads.description)
    }, [])

    const deleteRoads = () => {
        apiAxiosInstance.delete(`/roads/${id}`)
        .then(()=> {
            navigate('/persona')
        })
    }

    const updateRoads=()=> {
        apiAxiosInstance.put(`/roads/${id}`, {title, description})
        .then(() => {
            navigate('/persona')
        })
        .catch(err => console.log(err))
    }

    console.log(title, description)
    return (
        <>
            <h1>{title}</h1>
            <h2>{description}</h2>

            {updateStatus ? 
            <>
            <section>
                <input type="text" onChange={(event)=> setTitle(event.target.value)} defaultValue={title}/>
                <input type="text" onChange={(event)=> setDescription(event.target.value)} defaultValue={description}/>
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