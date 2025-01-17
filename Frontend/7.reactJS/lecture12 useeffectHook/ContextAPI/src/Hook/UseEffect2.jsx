import React  from 'react'
import { useEffect } from 'react'

const UseEffect2 = ({children}) => {

    useEffect(()=> console.log('child Rendered!') ,[children])

  return (
    <div>
      <h1 className='text-center bg-purple-500 text-2xl p-5'>This is useEffect2 Hook</h1>
      {children}
    </div>
  ) 
}

export default UseEffect2
