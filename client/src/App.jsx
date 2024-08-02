import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import NavBar from "./components/Navbar";
import AuthorizationPage from "./pages/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage";
import RoadsPage from "./pages/RoadsPage";
import { useEffect, useState } from "react";
import apiAxiosInstance, { setAccessToken } from "./service/apiAxiosInstace";
import PersonalPage from "./pages/PersonalPage";
import CurrenRoadId from "./pages/CurrenRoadId";
import OneRoadPage from "./pages/OneRoadPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  const [roads, setRoads] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    apiAxiosInstance.get("/tokens/refresh").then(({ data }) => {
      setAccessToken(data.accessToken);
      setUser(data.user);
    });
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <NavBar user={user} />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Routes>
            <Route path="/" element={<HomePage user={user} />} />
            <Route
              path="/auth/authorization"
              element={<AuthorizationPage user={user} setUser={setUser} />}
            />
            <Route
              path="/auth/registration"
              element={<RegistrationPage setUser={setUser} />}
            />

            <Route
              path="/roads"
              element={<RoadsPage roads={roads} setRoads={setRoads} />}
            />
            <Route
              path="/myroads/:id"
              element={<CurrenRoadId roads={roads} />}
            />
            <Route
              path="/user"
              element={<PersonalPage user={user} setRoads={setRoads} />}
            />
            <Route path="/roads/:id" element={<OneRoadPage roads={roads} />} />
            <Route
              path="/auth/logout"
              element={<LogoutPage user={user} setUser={setUser} />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
