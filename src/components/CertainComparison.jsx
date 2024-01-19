import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { get } from "../services/authService";
import "/src/components/ComparisonCard.css";

const CertainComparison = () => {

    const [thisComparison, setThisComparison] = useState(null)
 
    const {comparisonId} = useParams()

    const isMore = (left, right) => {

      if (left && !right) {
        return 'better'
      }
      if (right && !left) {
        return "worse"
      }
      if (left == right) {
        return "better"
      } 
      
      return left > right ? "better" : "worse"
      
      // } else {
  
      //   return ""
      // }
  
    }

    useEffect(() => {

        get(`/comparisons/certain-comparison/${comparisonId}`)
            .then((response) => {
                console.log("Found comparison", response.data)
                setThisComparison(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    return (
        <div >
          { thisComparison && 
    
     
          
     
          
          <div className="center" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
            <div className="card">
              <div className="additional">
                <div className="user-card">
                  <div className="level center">Level 13</div>
                  <div className="points center">5,312 Points</div>
                  <img
                    src={"https://bootdey.com/img/Content/avatar/avatar1.png"}
                    className="img-fluid d-block mx-auto rounded-circle img-thumbnail mb-4"
                  />
                </div>
                <div className="more-info">
                  <h1>
                    {thisComparison.player1.firstname} {thisComparison.player1.lastname}
                  </h1>
                  <div className="coords">
                    <span>{thisComparison.player1.team}</span>
                    <span>Joined January 2019</span>
                  </div>
                  <div className="coords">
                    <span>Position/Role</span>
                    <span>City, Country</span>
                  </div>
                  <div className="stats">
                    <div>
                      <div className="title">Awards</div>
                      <i className="fa fa-trophy"></i>
                      <div className="value">2</div>
                    </div>
                    <div>
                      <div className="title">Matches</div>
                      <i className="fa fa-gamepad"></i>
                      <div className="value">27</div>
                    </div>
                    <div>
                      <div className="title">Pals</div>
                      <i className="fa fa-group"></i>
                      <div className="value">123</div>
                    </div>
                    <div>
                      <div className="title">Coffee</div>
                      <i className="fa fa-coffee"></i>
                      <div className="value infinity">∞</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="general">
                <h1 h1 style={{width: "35vw", marginLeft: "-70%"}}>
                  {thisComparison.player1.firstname} {thisComparison.player1.lastname}
                </h1>
                <ul>
                <li className={isMore(thisComparison.player1Stats?.games_played, thisComparison.player2Stats?.games_played)}>Games:  {thisComparison.player1Stats?.games_played}</li>
              <li className={isMore(thisComparison.player1Stats?.min, thisComparison.player2Stats?.min)}>MINS:  {thisComparison.player1Stats?.min}</li>
              <li className={isMore(thisComparison.player1Stats?.fgm, thisComparison.player2Stats?.fgm)}>FGM:   {thisComparison.player1Stats?.fgm}</li>
              <li className={isMore(thisComparison.player1Stats?.fga, thisComparison.player2Stats?.fga)}>FGA:   {thisComparison.player1Stats?.fga}</li>
              <li className={isMore(thisComparison.player1Stats?.fg3m, thisComparison.player2Stats?.fg3m)}>3FGM:   {thisComparison.player1Stats?.fg3m}</li>
              <li className={isMore(thisComparison.player1Stats?.fg3a, thisComparison.player2Stats?.fg3a)}>3FGA:   {thisComparison.player1Stats?.fg3a}</li>
              <li className={isMore(thisComparison.player1Stats?.ftm, thisComparison.player2Stats?.ftm)}>FTM:   {thisComparison.player1Stats?.ftm}</li>
              <li className={isMore(thisComparison.player1Stats?.fta, thisComparison.player2Stats?.fta)}>FTA:  {thisComparison.player1Stats?.fta}</li>
              <li className={isMore(thisComparison.player1Stats?.oreb, thisComparison.player2Stats?.oreb)}>OREB: {thisComparison.player1Stats?.oreb}</li>
              <li className={isMore(thisComparison.player1Stats?.dreb, thisComparison.player2Stats?.dreb)}>DREB: {thisComparison.player1Stats?.dreb}</li>
              <li className={isMore(thisComparison.player1Stats?.reb, thisComparison.player2Stats?.reb)}>REB: {thisComparison.player1Stats?.reb}</li>
              <li className={isMore(thisComparison.player1Stats?.ast, thisComparison.player2Stats?.ast)}>AST: {thisComparison.player1Stats?.ast}</li>
              <li className={isMore(thisComparison.player1Stats?.stl, thisComparison.player2Stats?.stl)}>STL: {thisComparison.player1Stats?.stl}</li>
              <li className={isMore(thisComparison.player1Stats?.blk, thisComparison.player2Stats?.blk)}>BLK: {thisComparison.player1Stats?.blk}</li>
              <li className={isMore(thisComparison.player1Stats?.turnover, thisComparison.player2Stats?.turnover)}>TO: {thisComparison.player1Stats?.turnover}</li>
              <li className={isMore(thisComparison.player1Stats?.pf, thisComparison.player2Stats?.pf)}>PF: {thisComparison.player1Stats?.pf}</li>
              <li className={isMore(thisComparison.player1Stats?.pts, thisComparison.player2Stats?.pts)}>PTS: {thisComparison.player1Stats?.pts}</li>
              <li className={isMore(thisComparison.player1Stats?.fg_pct, thisComparison.player2Stats?.fg_pct)}>FGPCT: {thisComparison.player1Stats?.fg_pct} %</li>
              <li className={isMore(thisComparison.player1Stats?.fg3_pct, thisComparison.player2Stats?.fg3_pct)}>3FGPCT: {thisComparison.player1Stats?.fg3_pct} %</li>
              <li className={isMore(thisComparison.player1Stats?.ft_pct, thisComparison.player2Stats?.ft_pct)}>FTPCT: {thisComparison.player1Stats.ft_pct} %</li>
                </ul>
                <span className="more">Mouse over the card for more info</span>
              </div>
            </div>
          
          
          
    
            {
              thisComparison.player2 && 
    
    
              <div className="card green">
                <div className="additional">
                  <div className="user-card">
                    <div className="level center">Level 13</div>
                    <div className="points center">5,312 Points</div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      className="img-fluid d-block mx-auto rounded-circle img-thumbnail mb-4"
                    />
                  </div>
                  <div className="more-info">
                    <h1>
                      {thisComparison.player2.firstname} {thisComparison.player2.lastname}
                    </h1>
                    <div className="coords">
                      <span>Group Name</span>
                      <span>Joined January 2019</span>
                    </div>
                    <div className="coords">
                      <span>Position/Role</span>
                      <span>City, Country</span>
                    </div>
                    <div className="stats">
                      <div>
                        <div className="title">Awards</div>
                        <i className="fa fa-trophy"></i>
                        <div className="value">2</div>
                      </div>
                      <div>
                        <div className="title">Matches</div>
                        <i className="fa fa-gamepad"></i>
                        <div className="value">27</div>
                      </div>
                      <div>
                        <div className="title">Pals</div>
                        <i className="fa fa-group"></i>
                        <div className="value">123</div>
                      </div>
                      <div>
                        <div className="title">Coffee</div>
                        <i className="fa fa-coffee"></i>
                        <div className="value infinity">∞</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="general">
                  <h1 h1 style={{width: "35vw", marginLeft: "-70%"}}>
                    {thisComparison.player2.firstname} {thisComparison.player2.lastname}
                  </h1>
                  <ul>
                  <li className={isMore(thisComparison.player2Stats?.games_played, thisComparison.player1Stats?.games_played)}>Games: {thisComparison.player2Stats?.games_played}</li>
                <li className={isMore(thisComparison.player2Stats?.min, thisComparison.player1Stats?.min)}>MINS: {thisComparison.player2Stats?.min}</li>
                <li className={isMore(thisComparison.player2Stats?.fgm, thisComparison.player1Stats?.fgm)}>FGM: {thisComparison.player2Stats?.fgm}</li>
                <li className={isMore(thisComparison.player2Stats?.fga, thisComparison.player1Stats?.fga)}>FGA: {thisComparison.player2Stats?.fga}</li>
                <li className={isMore(thisComparison.player2Stats?.fg3m, thisComparison.player1Stats?.fg3m)}>3FGM: {thisComparison.player2Stats?.fg3m}</li>
                <li className={isMore(thisComparison.player2Stats?.fg3a, thisComparison.player1Stats?.fg3a)}>3FGA: {thisComparison.player2Stats?.fg3a}</li>
                <li className={isMore(thisComparison.player2Stats?.ftm, thisComparison.player1Stats?.ftm)}>FTM: {thisComparison.player2Stats?.ftm}</li>
                <li className={isMore(thisComparison.player2Stats?.fta, thisComparison.player1Stats?.fta)}>FTA: {thisComparison.player2Stats?.fta}</li>
                <li className={isMore(thisComparison.player2Stats?.oreb, thisComparison.player1Stats?.oreb)}>OREB: {thisComparison.player2Stats?.oreb}</li>
                <li className={isMore(thisComparison.player2Stats?.dreb, thisComparison.player1Stats?.dreb)}>DREB: {thisComparison.player2Stats?.dreb}</li>
                <li className={isMore(thisComparison.player2Stats?.reb, thisComparison.player1Stats?.reb)}>REB: {thisComparison.player2Stats?.reb}</li>
                <li className={isMore(thisComparison.player2Stats?.ast, thisComparison.player1Stats?.ast)}>AST: {thisComparison.player2Stats?.ast}</li>
                <li className={isMore(thisComparison.player2Stats?.stl, thisComparison.player1Stats?.stl)}>STL: {thisComparison.player2Stats?.stl}</li>
                <li className={isMore(thisComparison.player2Stats?.blk, thisComparison.player1Stats?.blk)}>BLK: {thisComparison.player2Stats?.blk}</li>
                <li className={isMore(thisComparison.player2Stats?.turnover, thisComparison.player1Stats?.turnover)}>TO: {thisComparison.player2Stats?.turnover}</li>
                <li className={isMore(thisComparison.player2Stats?.pf, thisComparison.player1Stats?.pf)}>PF: {thisComparison.player2Stats?.pf}</li>
                <li className={isMore(thisComparison.player2Stats?.pts, thisComparison.player1Stats?.pts)}>PTS: {thisComparison.player2Stats?.pts}</li>
                <li className={isMore(thisComparison.player2Stats?.fg_pct, thisComparison.player1Stats?.fg_pct)}>FGPCT: {thisComparison.player2Stats?.fg_pct} %</li>
                <li className={isMore(thisComparison.player2Stats?.fg3_pct, thisComparison.player1Stats?.fg3_pct)}>3FGPCT: {thisComparison.player2Stats?.fg3_pct} %</li>
                <li className={isMore(thisComparison.player2Stats?.ft_pct, thisComparison.player1Stats?.ft_pct)}>FTPCT: {thisComparison.player2Stats.ft_pct} %</li>
                  </ul>
                  <span className="more">Mouse over the card for more info</span>
                </div>
              </div>
    
    
    
    }
    </div>
    
          
    
          
          
          
          }
        </div>
      );
}

export default CertainComparison