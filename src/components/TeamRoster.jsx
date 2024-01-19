import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import { get } from '../services/authService'

const TeamRoster = () => {

    const { teamId } = useParams()
    const [roster, setRoster] = useState([]);

    useEffect(()=>{
      const getRoster = async () => {
          get(`/player/team/${teamId}`)
          .then((response) => {
            console.log("Players", response.data)
            setRoster(response.data);
            
          })
          .catch((err) => {
            console.log(err);
          });
          
      };
      getRoster()
    },[teamId])
    



 return (
    <div>

      { roster.length > 0 &&

      <>
      
        <h1>Roster for Team {roster[0].team}</h1>
        

        <>
        
            {
              roster.map((player) => {
                return (<PlayerCard key={player.id} player={player} />)
              })
            }
        
        </>

      
      
      
      
      </>        
        
        }
      
    </div>
  )
}

export default TeamRoster
