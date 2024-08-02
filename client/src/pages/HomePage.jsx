import Slider from "../components/Slider";

function HomePage({ user }) {

    return (
      <div style={{ width: "500px", marginBottom: "50px", marginTop: "20px" }}>
        <h2 style={{ marginBottom: "50px" }}>
          {" "}
          Привет, {user ? user.name : "красавчик"}!{" "}
        </h2>
        <h4>
        {user ? '': "Давай"}
           {" "}
          {user ? (
            ""
          ) : (
            <a href="http://localhost:5173/auth/registration">
              {""}
              зарегистрируемся
            </a>
          )}{" "}
           {user ? '': "или "}
          
          {user ? (
            ""
          ) : (
            <a href="http://localhost:5173/auth/authorization">
              {""}
              войдем
            </a>
          )}
           {user ? '': "?"}
        </h4>
        <Slider />
      </div>
    );
  }
  
  export default HomePage;

