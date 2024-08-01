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
    <section>
      <button onClick={toggleSortByLength}>
        {isSortedAscending ? "Сортировать по длине маршрута" : "Вернуть обратно"}
      </button>
      <div>
        {sortedRoads.map((road) => {
          return (
            <section key={road.id}>
              <Link to={`/roads/${road.id}`}>
                <h3>{road.title}</h3>
              </Link>
              <p>{road.description}</p>
              <p>
                Длина маршрута: <strong>{road.length}км</strong>
              </p>
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
    </section>
  );
}

export default RoadsPage;
