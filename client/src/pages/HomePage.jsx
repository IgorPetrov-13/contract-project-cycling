import Slider from "../components/Slider";

function HomePage({ user }) {
  return (
    <div style={{ width: "500px" , marginBottom: "50px", marginTop: "20px" }}>
      <h2  style={{marginBottom: "50px"}}> Привет, {user ? user.name : "красавчик"}</h2>
      <h3  style={{marginBottom: "50px"}}> {user ? "" : "давай зарегистрируемся или войдем?"} </h3>
      <section   style={{marginBottom: "50px"}} className="d-flex flex-column justify-content-center align-items-center">
        <Slider />
      </section>
    </div>
  );
}

export default HomePage;
