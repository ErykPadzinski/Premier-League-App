import React, { useEffect, useState } from 'react'
import './topScorer.css'

export default function TopScorer() {

  const [scorer, setScorer] = useState(null)


  useEffect(() => {
    const url = 'https://v3.football.api-sports.io/players/topscorers?league=39&season=2022';
    const headers = {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "7d77a6317f82edbc5eeae3f2aa41f87a"
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url, { headers });
        const data = await response.json();
        setScorer(data.response[0]);
      } catch (error) {
        console.error(error)
      }
    };


    // 2 sec delay api call
    const delayFetchData = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(delayFetchData);   
  }, []);

  return (
    <div className='top-scorer'>
      <h2>Top Scorer</h2>
      {scorer && (
        <>
          <img className='scorer-img' src={scorer.player.photo} alt={scorer.player.name} />
          <p className='scorer-info'>{scorer.player.name}</p>
          <p className='scorer-info'>{scorer.statistics[0].goals.total} goals</p>
          <p className='scorer-team'>{scorer.statistics[0].team.name}</p>

        </>
      )}
    </div>
  )
}

