import React from "react";
import Slider from "../components/Slider";

function HomePage({ user }) {
  return (
    <div>
      Home
      <h2> Привет, {user ? user.name : "красавчик"}</h2>
      <section style={{width: "500px"}}>
        <Slider />
      </section>
    </div>
  );
}

export default HomePage;
