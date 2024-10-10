import React from 'react'
import './Buttons.css'

export default function Buttons({setButton}) {
  return (
   <div className="buttons-main">
    <button className="btns" value='geopolitics' onClick={()=> setButton('geopolitics')}>Geopolitics</button>

    
    <button className="btns" value='sport' onClick={()=> setButton('sport')}>Sports</button>
    <button className="btns" value='economy' onClick={()=> setButton('economy')}>Economy</button>
    <button className="btns" value='crime' onClick={()=> setButton('crime')}>Crime</button>
   </div>
  )
}
