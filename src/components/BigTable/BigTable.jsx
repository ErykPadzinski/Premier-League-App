import React from 'react'
import './bigtable.css'

export default function BigTable({tableData}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="club-header">Club</th>
          <th>PM</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>Pts</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((team) => (
          <tr key={team.rank} className="row">
            <td className="club-data">
              <td>{team.rank}</td>
              <img className="team-logo" src={team.logo} alt="team-logo-image" />
              <div className="team-name">{team.name}</div>
            </td>
            <td>{team.played}</td>
            <td>{team.win}</td>
            <td>{team.draw}</td>
            <td>{team.lose}</td>
            <td>{team.points}</td>
            <td>{team.goalsFor}</td>
            <td>{team.goalsAgainst}</td>
            <td>{team.goalsDiff}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
    
