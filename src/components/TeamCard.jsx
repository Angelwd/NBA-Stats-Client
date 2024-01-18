
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/components/Card.css"

const TeamCard = (props) => {
  return (
    <div>
      <div className="col-xs-12 col-sm-4">
        <div className="card">
          <Link className="img-card" to ={`/TeamRoster/${props.team._id}`}>
            <img src={props.team.logo} />
            </Link>
          
          <div className="card-content">
            <h4 className="card-title">
              <Link to= {`/TeamRoster/${props.team._id}`}>{props.team.name}</Link> 
                </h4>

          </div>
          <div className="card-view-roster">
            <Link className="btn btn-link btn-block" to ={`/TeamRoster/${props.team.code}`}>View Roster</Link>
               
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
