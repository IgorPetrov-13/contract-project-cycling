import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function OneRoadPage({ roads }) {
  const { id } = useParams();
  const currRoad = roads.find((road) => road.id === Number(id));

  //!Нужно будет сделать src на currentRoad.link
  return (
    <div>
      <h2>{currRoad.title}</h2>
      <p>Город: {currRoad.city}</p>
      <iframe
        src={currRoad.mapLink}
        width="500"
        height="400"
        frameborder="0"
      ></iframe>
      <p>
        Расстояние: {currRoad.length}
        <strong>км</strong>
      </p>
      <p>Описание: {currRoad.description}</p>
    </div>
  );
}

export default OneRoadPage;
