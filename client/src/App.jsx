import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar'
import AuthorizationPage from './pages/AuthorizationPage';
import RegistrationPage from './pages/RegistrationPage';
import RoadsPage from './pages/RoadsPage';
import { useState } from 'react';
import PesonalPage from './pages/PesonalPage';
import CurrenRoadId from './pages/CurrenRoadId';

function App() {
  const [roads, setRoads] = useState([])
  const [user, setUser] = useState(null)
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/auth/authorization" element={<AuthorizationPage setUser={setUser}/>}/>
          <Route path="/auth/registration" element={<RegistrationPage setUser={setUser}/>}/>
          <Route path="/roads" element={<RoadsPage roads={roads} setRoads={setRoads}/>}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='/myroads/:id' element={<CurrenRoadId roads={roads}/>} /> 
          <Route path='/persona' element={<PesonalPage user={user}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
