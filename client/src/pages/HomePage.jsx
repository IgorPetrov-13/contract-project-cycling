import React from "react";
import Slider from "../components/Slider";

function HomePage({ user }) {
  return (
    <div style={{width: "500px"}}>
      Home

           
            <h2> Привет, {user ? user.name : "красавчик" }</h2>
            <h3> {user ?  "": "давай зарегистрируемся или войдем?" } </h3>
          

        </div>
    );

}

export default HomePage;
