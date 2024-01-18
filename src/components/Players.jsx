import { useState, useEffect } from "react";
import PlayerProfile from "./ProfileCard";
import axios from "axios";

const Players = () => {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      axios
        .get(import.meta.env.VITE_SERVER_URL + "/players")
        .then((response) => {
          setAllPlayers(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPlayers();
  }, []);

  return (
    <div className="allPlayers">
      <h1>All Players</h1>
      <ul>
        {allPlayers &&
          allPlayers.map((player) => <PlayerProfile player={player} />)}
      </ul>
    </div>
  );
};

export default Players;
