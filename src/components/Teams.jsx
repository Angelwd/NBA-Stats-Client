import { useState, useEffect, } from "react";
import TeamCard from "./TeamCard";
import axios from "axios";

const Teams = () => {
  const [allTeams, setAllTeams] = useState([]);

useEffect(()=>{
  const getTeams = async () => {
    axios
      .get(import.meta.env.VITE_SERVER_URL + "/teams")
      .then((response) => {
        setAllTeams(response.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
      
  };
  getTeams()
},[])


  return (
    <div className="allTeams">
      <h1>All Teams</h1>
      
      {allTeams && allTeams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      
    </div>
  );
};

export default Teams;
