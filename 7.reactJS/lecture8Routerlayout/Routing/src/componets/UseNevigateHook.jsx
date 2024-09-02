import React from 'react'
import {useNavigate} from 'react-router-dom'

const UseNevigateHook = () => {

    const navigate = useNavigate()

  return (
    <div>
      <button 
      className='text-white bg-black p-2  text-sm mb-20'
      onClick={()=>navigate('/SignUp')}>
        Click For SignUp Page</button>
     
    </div>
  )
}

export default UseNevigateHook
