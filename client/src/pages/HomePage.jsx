import React from 'react';

function HomePage({user}) {
    return (
        <div>
            Привет 
            <h2>{user ? user.name : "красавчик" }</h2>
        </div>
    );
}

export default HomePage;