import React from 'react'
import './Pag.css'

export default function Pag({pageSize,totalPages,onPagechange,currentPage}) {
  const handleprev=()=>{
    if(currentPage>1){
        onPagechange(currentPage-1)

    }
  }
  const handleNext=()=>{
    if(currentPage<(totalPages/pageSize)){
       onPagechange(currentPage+1);
      
       
    }
  }
  const handlePrevtwo=Array.from({length:2},(_,index)=> currentPage-1-index ).filter((value) => value>0).reverse();
  const handleNexttwo=Array.from({length:3},(_,index)=> currentPage+index).filter((value)=>value<=Math.ceil(totalPages/pageSize))
  const paginationArray=[...handlePrevtwo,...handleNexttwo]
  console.log(paginationArray);
  
  const handleButt=(index)=>{
    onPagechange(index)

  }
    return (
  <div className="pag-container">
    <div className="pagination">
        <button onClick={handleprev} disabled={currentPage===1}>Prev</button>
        {paginationArray.map((dataa,i)=>
          <button
            key={i + 1}
           
            
            className={currentPage === dataa ? 'active' : ''} onClick={()=>handleButt(dataa)}>
            {dataa}
          </button>
        )}
        <button onClick={handleNext} disabled={currentPage>=(totalPages/pageSize)}>Next</button>
    </div>
  </div>
  )
}
