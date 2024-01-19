import "/src/components/ComparisonCard.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { get } from "../services/authService";

const ComparisonCard = ({comparison, setThisComparison}) => {
  

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



  return (
    <div >
      { comparison && 

 
      
 
      
      <div className="center" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <div className="card">
          <div className="additional">
            <div className="user-card">
              <div className="level center">Level 13</div>
              <div className="points center">5,312 Points</div>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                className="img-fluid d-block mx-auto rounded-circle img-thumbnail mb-4"
              />
            </div>
            <div className="more-info">
              <h1>
                {comparison.player1.firstname} {comparison.player1.lastname}
              </h1>
              <div className="coords">
                <span>{comparison.player1.team}</span>
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
            <h1 style={{width: "35vw", marginLeft: "-70%"}}>
              {comparison.player1.firstname} {comparison.player1.lastname}
            </h1>
            <ul>
              <li className={isMore(comparison.player1Stats?.games_played, comparison.player2Stats?.games_played)}>Games:  {comparison.player1Stats?.games_played}</li>
              <li className={isMore(comparison.player1Stats?.min, comparison.player2Stats?.min)}>MINS:  {comparison.player1Stats?.min}</li>
              <li className={isMore(comparison.player1Stats?.fgm, comparison.player2Stats?.fgm)}>FGM:   {comparison.player1Stats?.fgm}</li>
              <li className={isMore(comparison.player1Stats?.fga, comparison.player2Stats?.fga)}>FGA:   {comparison.player1Stats?.fga}</li>
              <li className={isMore(comparison.player1Stats?.fg3m, comparison.player2Stats?.fg3m)}>3FGM:   {comparison.player1Stats?.fg3m}</li>
              <li className={isMore(comparison.player1Stats?.fg3a, comparison.player2Stats?.fg3a)}>3FGA:   {comparison.player1Stats?.fg3a}</li>
              <li className={isMore(comparison.player1Stats?.ftm, comparison.player2Stats?.ftm)}>FTM:   {comparison.player1Stats?.ftm}</li>
              <li className={isMore(comparison.player1Stats?.fta, comparison.player2Stats?.fta)}>FTA:  {comparison.player1Stats?.fta}</li>
              <li className={isMore(comparison.player1Stats?.oreb, comparison.player2Stats?.oreb)}>OREB: {comparison.player1Stats?.oreb}</li>
              <li className={isMore(comparison.player1Stats?.dreb, comparison.player2Stats?.dreb)}>DREB: {comparison.player1Stats?.dreb}</li>
              <li className={isMore(comparison.player1Stats?.reb, comparison.player2Stats?.reb)}>REB: {comparison.player1Stats?.reb}</li>
              <li className={isMore(comparison.player1Stats?.ast, comparison.player2Stats?.ast)}>AST: {comparison.player1Stats?.ast}</li>
              <li className={isMore(comparison.player1Stats?.stl, comparison.player2Stats?.stl)}>STL: {comparison.player1Stats?.stl}</li>
              <li className={isMore(comparison.player1Stats?.blk, comparison.player2Stats?.blk)}>BLK: {comparison.player1Stats?.blk}</li>
              <li className={isMore(comparison.player1Stats?.turnover, comparison.player2Stats?.turnover)}>TO: {comparison.player1Stats?.turnover}</li>
              <li className={isMore(comparison.player1Stats?.pf, comparison.player2Stats?.pf)}>PF: {comparison.player1Stats?.pf}</li>
              <li className={isMore(comparison.player1Stats?.pts, comparison.player2Stats?.pts)}>PTS: {comparison.player1Stats?.pts}</li>
              <li className={isMore(comparison.player1Stats?.fg_pct, comparison.player2Stats?.fg_pct)}>FGPCT: {comparison.player1Stats?.fg_pct} %</li>
              <li className={isMore(comparison.player1Stats?.fg3_pct, comparison.player2Stats?.fg3_pct)}>3FGPCT: {comparison.player1Stats?.fg3_pct} %</li>
              <li className={isMore(comparison.player1Stats?.ft_pct, comparison.player2Stats?.ft_pct)}>FTPCT: {comparison.player1Stats.ft_pct} %</li>
            </ul>
            
          {/* <span className="more">Mouse over the card for more info</span> */}
          </div>
        </div>
      
      
      

        {
          comparison.player2 && 


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
                <h1>
                  {comparison.player2.firstname} {comparison.player2.lastname}
                </h1>
              <div className="more-info">
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
              <h1 style={{width: "35vw", marginLeft: "-70%"}}>
                {comparison.player2.firstname} {comparison.player2.lastname}
              </h1>
              <ul>
                <li className={isMore(comparison.player2Stats?.games_played, comparison.player1Stats?.games_played)}>Games: {comparison.player2Stats?.games_played}</li>
                <li className={isMore(comparison.player2Stats?.min, comparison.player1Stats?.min)}>MINS: {comparison.player2Stats?.min}</li>
                <li className={isMore(comparison.player2Stats?.fgm, comparison.player1Stats?.fgm)}>FGM: {comparison.player2Stats?.fgm}</li>
                <li className={isMore(comparison.player2Stats?.fga, comparison.player1Stats?.fga)}>FGA: {comparison.player2Stats?.fga}</li>
                <li className={isMore(comparison.player2Stats?.fg3m, comparison.player1Stats?.fg3m)}>3FGM: {comparison.player2Stats?.fg3m}</li>
                <li className={isMore(comparison.player2Stats?.fg3a, comparison.player1Stats?.fg3a)}>3FGA: {comparison.player2Stats?.fg3a}</li>
                <li className={isMore(comparison.player2Stats?.ftm, comparison.player1Stats?.ftm)}>FTM: {comparison.player2Stats?.ftm}</li>
                <li className={isMore(comparison.player2Stats?.fta, comparison.player1Stats?.fta)}>FTA: {comparison.player2Stats?.fta}</li>
                <li className={isMore(comparison.player2Stats?.oreb, comparison.player1Stats?.oreb)}>OREB: {comparison.player2Stats?.oreb}</li>
                <li className={isMore(comparison.player2Stats?.dreb, comparison.player1Stats?.dreb)}>DREB: {comparison.player2Stats?.dreb}</li>
                <li className={isMore(comparison.player2Stats?.reb, comparison.player1Stats?.reb)}>REB: {comparison.player2Stats?.reb}</li>
                <li className={isMore(comparison.player2Stats?.ast, comparison.player1Stats?.ast)}>AST: {comparison.player2Stats?.ast}</li>
                <li className={isMore(comparison.player2Stats?.stl, comparison.player1Stats?.stl)}>STL: {comparison.player2Stats?.stl}</li>
                <li className={isMore(comparison.player2Stats?.blk, comparison.player1Stats?.blk)}>BLK: {comparison.player2Stats?.blk}</li>
                <li className={isMore(comparison.player2Stats?.turnover, comparison.player1Stats?.turnover)}>TO: {comparison.player2Stats?.turnover}</li>
                <li className={isMore(comparison.player2Stats?.pf, comparison.player1Stats?.pf)}>PF: {comparison.player2Stats?.pf}</li>
                <li className={isMore(comparison.player2Stats?.pts, comparison.player1Stats?.pts)}>PTS: {comparison.player2Stats?.pts}</li>
                <li className={isMore(comparison.player2Stats?.fg_pct, comparison.player1Stats?.fg_pct)}>FGPCT: {comparison.player2Stats?.fg_pct} %</li>
                <li className={isMore(comparison.player2Stats?.fg3_pct, comparison.player1Stats?.fg3_pct)}>3FGPCT: {comparison.player2Stats?.fg3_pct} %</li>
                <li className={isMore(comparison.player2Stats?.ft_pct, comparison.player1Stats?.ft_pct)}>FTPCT: {comparison.player2Stats.ft_pct} %</li>
              </ul>
              <span className="more">Mouse over the card for more info</span>
            </div>
          </div>



}
</div>

      

      
      
      
      }
    </div>
  );
};

export default ComparisonCard;

// "games_played":37,
//       "player_id":237,
//       "season":2018,
//       "min":"34:46",
//       "fgm":9.92,
//       "fga":19.22,
//       "fg3m":2.05,
//       "fg3a":5.73,
//       "ftm":5.08,
//       "fta":7.54,
//       "oreb":0.95,
//       "dreb":7.59,
//       "reb":8.54,
//       "ast":7.38,
//       "stl":1.32,
//       "blk":0.65,
//       "turnover":3.49,
//       "pf":1.59,
//       "pts":26.97,
//       "fg_pct":0.516,
//       "fg3_pct":0.358,
//       "ft_pct":0.674
