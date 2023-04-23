import React from 'react'
import './standings.css'
import Navbar from '../../components/Navbar/Navbar'
import SmallTable from '../../components/SmallTable/SmallTable'
import BigTable from '../../components/BigTable/BigTable'


export default function Standings({tableData}) {
  
  
  return (



    
    <div>
      
      <Navbar />
      <div className='big-table'>
      <BigTable tableData={tableData}/>
      </div>
      
    </div>
  )
}
