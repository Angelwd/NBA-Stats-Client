import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/components/Card.css"

const PlayerCard = (props) => {
  return (
    <div>
      <div className="col-xs-12 col-sm-4">
        <div className="card">
          <Link className="img-card" to ={`/PlayerProfile/${props.player._id}`}>
            <img src={props.player.teamLogo} />
            </Link>
          
          <div className="card-content">
            <h4 className="card-title">
              {props.player.firstname} {props.player.lastname}
                </h4>

          </div>
          <div className="card-view-roster">
          <Link className="btn btn-link btn-block" to ={`/PlayerProfile/${props.player._id}`}>View Profile</Link>
               
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
