import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get } from '../services/authService'
import "/src/components/ProfileCard.css";

const ProfileCard = (props) => {

  const navigate = useNavigate()

  const createComparison = () => {
    get(`/comparisons/create/${props.player._id}`)
      .then((response) => {
        console.log("New Comparison", response.data);
        props.setThisComparison(response.data);
      })
      .catch((err) => console.log(err));
  };

  const addToComparison = () => {
    get(`/comparisons/add/${props.player._id}/${props.comparison._id}`)
    .then((response) => {
      console.log("Added Comparison", response.data);
      props.setThisComparison(response.data);
    })
    .catch((err) => console.log(err));
  }


  const addPlayerToComparison = () => {
    if (props.comparison) {
      addToComparison()
      navigate('/comparison')
    } else (
      navigate('/teams')
    )
  }

  const createNewComparison = () => {

    {
      props && 
        props.setThisComparison(null)


         
        setTimeout(() => {
          createComparison()
          navigate('/comparison')
        }, 400)
    }

  }

  return (
    <div>
      <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                <a href="#">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                  ></img>
                </a>
                <h1>{(props.player.firstname, props.player.lastname)}</h1>
                <p>{props.team}</p>
              </div>

              <ul className="nav nav-pills nav-stacked">
                <li className="active">
                  <a href="#">
                    {" "}
                    <i className="fa fa-user"></i> Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-calendar"></i> Recent Activity{" "}
                    <span className="label label-warning pull-right r-activity">
                      9
                    </span>
                  </a>
                </li>
                <li>
                  {/* <a href="#">
                    {" "}
                    <i className="fa fa-edit"></i> Edit profile
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-info col-md-9">
            {/* <div className="panel"> */}
            {/* <form>
              <textarea placeholder="Whats in your mind today?" rows="2" className="form-control input-lg p-text-area"></textarea>
          </form> */}
            {/* <footer className="panel-footer">
              <button className="btn btn-warning pull-right">Post</button>
              <ul className="nav nav-pills">
                  <li>
                      <a href="#"><i className="fa fa-map-marker"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fa fa-camera"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className=" fa fa-film"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fa fa-microphone"></i></a>
                  </li>
              </ul>
          </footer> */}
            {/* </div> */}
            <div className="panel">
              <div className="bio-graph-heading">Player Profile</div>
              <div className="panel-body bio-graph-info">
                <h1>Bio Graph</h1>
                <div className="row">
                  <div className="bio-row">
                    <p>
                      <span>First Name </span>: {props.player.firstname}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Last Name </span>: {props.player.lastname}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Country </span>: {props.player.birth.country}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Birthday</span>: {props.player.birth.date}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Height</span>: {props.player.height.feets}'{" "}
                      {props.player.height.inches}""
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Weight </span>: {props.player.weight.pounds}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>College </span>: {props.player.college}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Team</span>: {props.player.team}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-desk">
                        <h4 className="red">Career Points</h4>
                        <strong>{careerstats}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-desk">
                        <h4 className="terques">Career Rebounds </h4>
                        <strong>{careerstats}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-desk">
                        <h4 className="green">Career Assists</h4>
                        <strong>{careerstats}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-desk">
                        <h4 className="purple">Career Blocks</h4>
                        <strong>{careerstats}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel">
                    <div className="panel-body">
                      <div className="bio-desk">
                        <h4 className="green">Steals</h4>
                        <strong>{careerstats}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <button onClick={() => createNewComparison()}>
              Create new comparison
            </button>
            {props.comparison && <button onClick={() => addPlayerToComparison()} >Add to Comparison</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
