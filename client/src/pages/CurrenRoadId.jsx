import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiAxiosInstance from '../service/apiAxiosInstace';

function CurrenRoadId({roads}) {
    const {id} = useParams()
    const currentRoads = roads.find(road=> road.id===Number(id))
    const [title, setTitle] = useState('');
    const [updateStatus, setUpdateStatus] = useState(false);
    const [description, setDescription] = useState('');
    const [mapLink, setMapLink] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setTitle(currentRoads.title)
        setDescription(currentRoads.description)
        setMapLink(currentRoads.mapLink)
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

    console.log(title, description)
    return (
        <>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af9955f13709f81924320a42fc1abaf906d90c585e14767b5e305252eebbd265f&amp;source=constructor" 
                width="300"
                height="200"
                frameborder="0"></iframe>

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