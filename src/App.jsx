import {React, useState, useEffect} from 'react'
import './app.css'
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Standings from './pages/Standings/Standings';
function App() {

  const [tableData, setTableData] = useState([]);

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
            goalsAgainst: team.all.goals.against,
            goalsDiff: team.goalsDiff,
            played: team.all.played,
            win:team.all.win,
            draw:team.all.draw,
            lose:team.all.lose,



          };
        });
        setTableData(tableData);
      })
      .catch(error => console.log(error));
  }, []);



  return (
  <Router>
  <Routes>
    <Route path="/" element={<Home tableData={tableData} />}/>
    <Route path='/standings' element={<Standings tableData={tableData} />}/>
  </Routes>
</Router>
  )
}

export default App
