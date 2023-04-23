import React, { useState, useEffect } from "react";
import './smallTable.css'
import tabulate from "tabulate";



export default function SmallTable({ tableData }) {
  
  return (
    <div className="small-table">
    {tableData.slice(0, 10).map(team => (
      <div className="rank" key={team.rank} >
        <div className="rank-name">
      <p>{team.rank}</p>
      <img className="team-logo" src={team.logo} alt="team-logo-image"/>
      <p>{team.name}</p>
        </div>
      <p>{team.points}</p>
      </div>
    ))}

    
      
    </div>
    
  );

}









