import { NavLink } from "react-router-dom";


function Navbar({ user }) {
  return (
    <nav className="navbar  navbar-light bg-light" style={{margin: "0 auto", marginBottom: "20px" }}>
      <NavLink to="/">
        <span className="navbar-brand">Home</span>
      </NavLink>
      <NavLink to="/roads">
        <span className="navbar-brand">Веломаршруты</span>
      </NavLink>
      {user ? (
        <>
          <NavLink to="/user">
            <span className="navbar-brand">Личный кабинет</span>
          </NavLink>
          <NavLink to="/auth/logout">
            <span className="navbar-brand">Выход</span>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/auth/authorization">
            <span className="navbar-brand">Вход</span>
          </NavLink>

          <NavLink to="/auth/registration">
            <span className="navbar-brand">Регистрация</span>
          </NavLink>
        </>
      )}

    </nav>
  );
}

export default Navbar;
