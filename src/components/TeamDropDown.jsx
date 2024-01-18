import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


const TeamDropDown = ({  team }) => {
  return (
    
        <li className="dropdown-item">
          <Link  to={`/TeamRoster/${team.code}`}>
            {team.name}
          </Link>
        </li>
      
    
  );
};

export default TeamDropDown;
