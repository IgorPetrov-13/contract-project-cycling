import React, { useEffect, useState } from "react";
import apiAxiosInstance from "../service/apiAxiosInstace";
import MapComponent from "../components/MapComponent";
import { Link } from "react-router-dom";

function RoadsPage({ roads, setRoads }) {
  const [sortedRoads, setSortedRoads] = useState([]);
  const [isSortedAscending, setIsSortedAscending] = useState(true);

  const getRoads = async () => {
    const { data } = await apiAxiosInstance.get("/roads");
    setRoads(data.roads);
    setSortedRoads(data.roads);
  };

  const toggleSortByLength = () => {
    if (isSortedAscending) {
      // Сортируем по возрастанию
      const sorted = [...sortedRoads].sort((a, b) => a.length - b.length);
      setSortedRoads(sorted);
    } else {
      // Возвращаем в исходный порядок
      setSortedRoads(roads);
    }
    setIsSortedAscending(!isSortedAscending); // Меняем состояние
  };

  useEffect(() => {
    getRoads();
  }, []);

  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <button onClick={toggleSortByLength} style={{marginTop: "20px", marginBottom: "30px"}}>
        {isSortedAscending
          ? "Сортировать по длине маршрута"
          : "Вернуть обратно"}
      </button>
      <div>
        {sortedRoads.map((road) => {
          return (
            <section
              key={road.id}
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ backgroundColor: "#f7f8fa", margin: "0 auto", marginBottom: "40px", borderRadius: "10px"}}

            >
              <Link to={`/road/${road.id}`}>
                <h3>{road.title}</h3>
              </Link>
              <p>{road.city}</p>
              <p>
                Длина маршрута: <strong>{road.length}км</strong>
              </p>
              <iframe
                src={road.mapLink}
                width="300"
                height="200"
                frameborder="0"
              ></iframe>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default RoadsPage;
