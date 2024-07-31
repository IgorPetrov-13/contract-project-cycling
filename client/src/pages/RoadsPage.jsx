import React, { useEffect } from 'react';
import apiAxiosInstance from '../service/apiAxiosInstace';

function RoadsPage({roads, setRoads}) {

    const getRoads=async()=>{
        const {data} = await apiAxiosInstance.get('/roads')
        console.log(data)
        setRoads(data.roads)
    }

    useEffect(()=> {
        getRoads()
    }, [])

    return (
        <div>
            {roads.map(road=>{
                return <section key={road.id}>{road.title} </section>
            })}
        </div>
    );
}

export default RoadsPage;