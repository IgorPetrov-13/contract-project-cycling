import React from 'react';
import apiAxiosInstance from '../service/apiAxiosInstace';

function RoadsPage({roads, setRoads}) {

    function getRoads(){
        apiAxiosInstance.get('/roads')
    }


    return (
        <div>
            Тут маршруты
        </div>
    );
}

export default RoadsPage;