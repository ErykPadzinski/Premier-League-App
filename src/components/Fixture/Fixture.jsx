import React, { useState, useEffect } from "react";
import './fixture.css'

export default function Fixture() {
  const [fixture, setFixture] = useState(null);
  useEffect(() => {
    const url = "https://v3.football.api-sports.io/fixtures?league=39&next=1";
    const headers = {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "7d77a6317f82edbc5eeae3f2aa41f87a"
    }
      fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => setFixture(data.response[0]))
      .catch((error) => console.log(error));
    }, []);


  return (
    <div className="">
      {fixture ? (
        <div className="fixture">
        <p className="fixture-header" >Upcoming Match</p>
        <div className="fixture-teams">
          <div className="fixture-home" >
            <img className="fixture-team-logo" src={fixture.teams.home.logo} />
            <h2 className="fixture-team-name">{fixture.teams.home.name}</h2>
          </div>
          <div className="vs">
          <p>vs</p>
          </div>
          <div className="fixture-away">
            <img className="fixture-team-logo" src={fixture.teams.away.logo} />
            <h2 className="fixture-team-name">{fixture.teams.away.name}</h2>
          </div>
        </div>
        <p className="fixture-header"> Kick Off: {new Date(fixture.fixture.date).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
        <p className="fixture-header">{new Date(fixture.fixture.date).toDateString()}</p>
        </div>

      ) : (
        <p>loading</p>
      )}
      
    </div>
        
  )
}
