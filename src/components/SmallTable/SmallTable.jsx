import React, { useState, useEffect } from "react";
import './smallTable.css'



function SmallTable() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    const url = "https://v3.football.api-sports.io/standings?league=39&season=2022";
    const headers = {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "7d77a6317f82edbc5eeae3f2aa41f87a"
    };

    fetch(url, { headers })
      .then(response => response.json())
      .then(data => {
        const tableData = data.response[0].league.standings[0].map(team => {
          return {
            rank: team.rank,
            name: team.team.name,
            logo: team.team.logo,
            points: team.points,
            goalsFor: team.all.goals.for,
            goalsAgainst: team.all.goals.against
          };
        });
        setTable(tableData);
      })
      .catch(error => console.log(error));
  }, []);

  const headers = ["Rank", "Name", "Points", "Goals For", "Goals Against"];

  return (
    <div className="smallTable">
    {table.slice(0, 10).map(team => (
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

export default SmallTable;





