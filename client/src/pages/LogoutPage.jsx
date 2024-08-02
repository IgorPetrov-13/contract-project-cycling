import { useNavigate } from "react-router-dom";
import apiAxiosInstance, { setAccessToken } from "../service/apiAxiosInstace";

/* eslint-disable react/prop-types */
function LogoutPage({ user, setUser }) {
  const navigate = useNavigate();

  const logoutUser = () => {
    apiAxiosInstance
      .delete("/auth/logout")
      .then(({ data }) => {
        setAccessToken(data.accessToken);
        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Покинуть страницу {user.name}?</h1>
      <button onClick={logoutUser}>Выход</button>
    </>
  );
}

export default LogoutPage;
