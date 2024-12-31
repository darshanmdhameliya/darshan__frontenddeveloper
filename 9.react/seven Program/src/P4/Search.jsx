import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()

  const [value, setvalue] = useState()

  const handlevalue = (e) => {
    setvalue(e.target.value)
  }



  return (
    <div>
      <div className="heading">This is Search Page</div>
      <div className="flex flex-col  justify-center">
        <input type="text" className='w-15 h-10 place-self-center border-2 border-black mt-5 rounded-xl' onChange={handlevalue} />
        <button className={`btn place-self-center ${value}`} onClick={()=>navigate(`/${value}`)}>Submit</button>
      </div>

    </div>
  )
}

export default Search
