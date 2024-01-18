import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import axios from "axios";

const TeamRoster = () => {

    const { teamId } = useParams()
    const [roster, setRoster] = useState([]);

    useEffect(()=>{
      const getRoster = async () => {
        axios
          .get(import.meta.env.VITE_SERVER_URL + `/player/team/${teamId}`)
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
