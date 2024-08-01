import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function OneRoadPage({ roads }) {
  const { id } = useParams();
  const currRoad = roads.find((road) => road.id === Number(id));

  //!Нужно будет сделать src на currentRoad.link
  return (
    <div>
      <h2>{currRoad.title}</h2>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Af2d0a3fc3a4d61df6fe47a98d6f3e3318349c4346e34c663962f5c5a4d3b5bdf&amp;source=constructor"
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
