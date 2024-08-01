import React from "react";


function HomePage({user}) {
    return (
        <div>
      Home
           
            <h2> Привет, {user ? user.name : "красавчик" }</h2>
          

        </div>
    );
}

export default HomePage;
