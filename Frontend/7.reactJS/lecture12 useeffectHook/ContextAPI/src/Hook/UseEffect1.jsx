import React from 'react'
import { useEffect, useState } from 'react'

const UseEffect1 = () => {

  const [count, setcount] = useState(0)

  useEffect(() => console.log('useeffect Hook'), [count])


  return (
    <div className=' flex flex-col gap-5'>
      <h1 className='text-center bg-purple-500 text-2xl p-5'>This is useEffect Hook</h1>
      <p className='text-center'>Count: {count}</p>
      <button onClick={() => setcount(count + 1)}>Click me</button>
    </div>
  )
}

export default UseEffect1
