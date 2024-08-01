import {NavLink} from 'react-router-dom'

function Navbar(props) {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/roads">Веломаршруты</NavLink>
            <NavLink to="/auth/authorization">Вход</NavLink>
            <NavLink to="/auth/registration">Регистрация</NavLink>
            <NavLink to='/persona'>Личный кабинет</NavLink>
        </nav>
    );
}

export default Navbar;