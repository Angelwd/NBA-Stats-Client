import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { get } from "../services/authService";

const PlayerProfile = () => {
  const { playerId } = useParams();
  const [playerBio, setPlayerBio] = useState(null);

  useEffect(() => {
    const getPlayer = async () => {
      get(`/player/this-player/${playerId}`)
        .then((response) => {
          console.log("Found player", response.data);
          setPlayerBio(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPlayer();
  }, [playerId]);

  return (
    <div>
      <h1>Player Bio</h1>

      {playerBio && <ProfileCard key={playerBio._id} player={playerBio} />}
    </div>
  );
};

export default PlayerProfile;
