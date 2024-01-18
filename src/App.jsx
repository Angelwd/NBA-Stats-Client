import "./App.css";

import Navbar from "./components/Navbar";

import LoggedNavbar from "./components/LoggedNavBar";

import { useContext } from "react";

import { AuthContext } from "./context/auth.context";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import Home from "./pages/Home";

import Profile from "./pages/Profile";

import "bootstrap/dist/css/bootstrap.min.css";

import Teams from "./components/Teams";
import PlayerProfile from "./components/PlayerProfile";
import TeamRoster from "./components/TeamRoster";

function App() {
  const { getToken } = useContext(AuthContext);

  const IsLoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="login" />;
  };

  const IsLoggedOut = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };
  return (
    <>
      {getToken() ? <LoggedNavbar /> : <Navbar />}

      {/* <Teams /> */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<IsLoggedOut />}>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<IsLoggedIn />}>
          <Route path="profile" element={<Profile />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<Teams />} />
          <Route path="/TeamRoster/:teamId" element={<TeamRoster />} />
          <Route path="/PlayerProfile/:playerId" element={<PlayerProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
