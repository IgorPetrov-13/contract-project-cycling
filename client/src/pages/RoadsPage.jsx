import React, { useEffect } from "react";
import apiAxiosInstance from "../service/apiAxiosInstace";
import MapComponent from "../components/MapComponent";
import { Link } from "react-router-dom";

function RoadsPage({ roads, setRoads }) {
  const getRoads = async () => {
    const { data } = await apiAxiosInstance.get("/roads");
    console.log(data);
    setRoads(data.roads);
  };

  useEffect(() => {
    getRoads();
  }, []);

  return (
    <div>
      {roads.map((road) => {
        return (
          <section key={road.id}>
            <Link to={`/roads/${road.id}`}>{road.title}</Link>
            <br />
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Af2d0a3fc3a4d61df6fe47a98d6f3e3318349c4346e34c663962f5c5a4d3b5bdf&amp;source=constructor"
              width="300"
              height="200"
              frameborder="0"
            ></iframe>
          </section>
        );
      })}
    </div>
  );
}

export default RoadsPage;
