import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import News from '../../components/News/News'
import SmallTable from '../../components/SmallTable/SmallTable'
import './home.css'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='home-content'>
      <SmallTable />
      <News />

      </div>
      
    </div>
  )
}

export default Home
