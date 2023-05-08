import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'


export default function ClubDetails() {

  useEffect(() => {
    const fetchTeamStats = async () => {
      const response = await fetch('https://v3.football.api-sports.io/teams/statistics?team=33', {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': '7d77a6317f82edbc5eeae3f2aa41f87a',
        },
      });
      const data = await response.json();
      setTeamStats(data.response);
    };

    fetchTeamStats();
  }, []);

  return (
    <div>
      <Navbar />
      
    </div>
  )
}
