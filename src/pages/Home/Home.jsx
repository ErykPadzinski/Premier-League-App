import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import News from '../../components/News/News'
import SmallTable from '../../components/SmallTable/SmallTable'
import './home.css'
import Fixture from '../../components/Fixture/Fixture'
import TopScorer from '../../components/TopScorer/TopScorer'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='home-content'>
        <div className='home-left'>
      <SmallTable />
      <Fixture />
        </div>
      <News />
      <div className='home-right'>
      <TopScorer />

      </div>
      </div>
      
    </div>
  )
}

export default Home
