import React, { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Announce from './Announcemnet/Announce'
import Buttons from './Content/Buttons'
import Newscontent from './Newspage/Newscontent'
export default function App() {
    const [searchTerm,setsearchTerm]=useState('')
   
    
 return(
  <>
   <Announce />
  <Navbar setsearchTerm={setsearchTerm}/>
 <Buttons setButton={setsearchTerm} />
 <Newscontent searchTerm={searchTerm}/>
  </>
 )
}
