import Slider from "../components/Slider";

function HomePage({ user }) {
  return (
    <div style={{ width: "500px" }}>
      <h2> Привет, {user ? user.name : "красавчик"}</h2>
      <h4>
        {" "}
        {user ? (
          ""
        ) : (
          <a href="http://localhost:5173/auth/registration">
            {""}
            зарегистрируемся
          </a>
        )}{" "}
      </h4>
      <h4> {user ? "" : "или"} </h4>
      <h4>
        {" "}
        {user ? (
          ""
        ) : (
          <a href="http://localhost:5173/auth/authorization">
            {""}
            войдем?
          </a>
        )}{" "}
      </h4>
      <Slider />
    </div>
  );
}

export default HomePage;
