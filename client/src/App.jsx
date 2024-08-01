
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import NavBar from "./components/Navbar";
import AuthorizationPage from "./pages/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage";
import RoadsPage from "./pages/RoadsPage";
import { useEffect, useState } from "react";
import apiAxiosInstance, { setAccessToken } from "./service/apiAxiosInstace";
import PersonalPage from './pages/PersonalPage';
import CurrenRoadId from './pages/CurrenRoadId';
import OneRoadPage from "./pages/OneRoadPage";



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
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route
            path="/auth/authorization"
            element={<AuthorizationPage user= {user} setUser={setUser} />}
          />
          <Route
            path="/auth/registration"
            element={<RegistrationPage setUser={setUser} />}
          />

          <Route path="/roads" element={<RoadsPage roads={roads} setRoads={setRoads}/>}/>
          <Route path='/myroads/:id' element={<CurrenRoadId roads={roads}/>} /> 
          <Route path='/user' element={<PersonalPage user={user} setRoads={setRoads}/>}/>
          <Route path="/roads/:id" element={<OneRoadPage roads={roads} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
