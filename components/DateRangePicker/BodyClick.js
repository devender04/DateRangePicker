import React from 'react'

const BodyClick = (props) => {
  const {} = props ;
  return (
    <div className='absolute flex-center' style={{background:'rgba(18, 18, 18, 0.8)', height:'100vh', width:'100vw', top:'0'}}>
      <div className='flex-center flex-col' style={{height:'200px', width:'800px', background:'white', borderRadius:'10px', gap:'25%'}}>
        <h2>Do yo want to close without confirmation</h2>
        <div>
          <button style={{fontSize:'20px', padding:'5px 30px',margin:'0 5px'}}>Yes</button>
          <button style={{fontSize:'20px', padding:'5px 30px',margin:'0 5px'}}>No</button>
        </div>
      </div>
    </div>
  )
}

export default BodyClick