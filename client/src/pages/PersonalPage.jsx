import { useEffect, useState } from "react";
import apiAxiosInstance from "../service/apiAxiosInstace";
import { Link } from "react-router-dom";
import NewRoadForm from "../components/NewRoadForm";

function PersonalPage({ user }) {
  const [userRoads, setUserRoads] = useState([]);

  const getRoad = () => {
    apiAxiosInstance
      .get(`user/${user.id}`)
      .then(({ data }) => setUserRoads(data.userRoads))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (user) {
      getRoad();
    }
  }, [user]);

  return (
    <div>
      {user && <h2>Все маршруты пользователя {user.name}</h2>}
      {user ? (
        userRoads.length ? (
          userRoads.map((userRoad) => (
            <section key={userRoad.id}>
              <Link to={`/myroads/${userRoad.id}`}>{userRoad.title}</Link>
            </section>
          ))
        ) : (
          <p>У вас нет созданных маршрутов</p>
        )
      ) : (
        <p>Необходимо зарегистрироваться</p>
      )}
      {user && (
        <NewRoadForm
          user={user}
          setUserRoads={setUserRoads}
          userRoads={userRoads}
        />
      )}
    </div>
  );
}

export default PersonalPage;
