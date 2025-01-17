import React from 'react'


const P2 = ({ status }) => {


  const handleclick = () => {
    if (status == 'offline') {
      alert("User is offline")
    } else {
      alert("User is online")
    }
  }


  return (
    <div>
      <button className='btn' onClick={handleclick}>Check User is online or offline</button>
    </div>
  )
}

export default P2
