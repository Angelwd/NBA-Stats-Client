import { Link, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import TeamDropDown from "./TeamDropDown"
import { get } from "../services/authService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoggedNavBar = () => {
  const [allTeams, setAllTeams] = useState([]);

  const { logOutUser } = useContext(AuthContext);

  useEffect(() => {
    const getTeams = async () => {
      
        get("/teams")
        .then((response) => {
          setAllTeams(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTeams();
  }, []);

  return (
    <div style={{position: "fixed", top: "0px", left: "0px", width: "99vw"}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width: "100%"}}>
        <div className="container-fluid" style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
          <a className="navbar-brand" href="#">
            NBA Stats
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/profile'>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="#" to="/teams">
                  Teams
                </Link>
              </li>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Search players by team
                </button>
                <ul className="dropdown-menu">
                  {allTeams.map((team) => (
                    <TeamDropDown key={team.id} team={team} />
                  ))}
                </ul>

                {/* <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Atlanta Hawks
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Boston Celtics
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Brooklyn Nets
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Charlotte Hornets
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Chicago Bulls
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Cleveland Cavaliers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dallas Mavericks
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Denver Nuggets
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Detroit Pistons
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Golden State Warriors
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Houston Rockets
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Indiana Pacers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      LA Clippers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Los Angeles Lakers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Memphis Grizzlies
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Miami Heat
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Milwaukee Bucks
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Minnesota Timberwolves
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      New Orleans Pelicans
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      New York Knicks
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Oklahoma City Thunder
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Orlando Magic
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Philadelphia 76ers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Phoenix Suns
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Portland Trail Blazers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sacramento Kings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      San Antonio Spurs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Toronto Raptors
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Utah Jazz
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Washington Wizards
                    </a>
                  </li>

                </ul> */}
              </div>
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Team or Player"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button className="btn btn-danger" onClick={logOutUser}>
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LoggedNavBar;
