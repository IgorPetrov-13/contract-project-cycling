import React, { useEffect } from 'react';
import apiAxiosInstance from '../service/apiAxiosInstace';

function RoadsPage({roads, setRoads}) {

    const getRoads=()=>{
        apiAxiosInstance.get('/roads')
        .then(({data}) => setRoads(data))
        .catch(err => console.log(err))
    }

    useEffect(()=> {
        getRoads()
    }, [])

    return (
        <div>
            {roads.length? : }
        </div>
    );
}

export default RoadsPage;