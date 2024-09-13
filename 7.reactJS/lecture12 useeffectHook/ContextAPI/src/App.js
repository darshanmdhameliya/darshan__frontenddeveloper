import React from 'react'
import UseEffect1 from './Hook/UseEffect1'
import UseEffect2 from './Hook/UseEffect2'
import UseEffect3 from './Hook/UseEffect3'
import { useState } from 'react'

const App = () => {

  const [toggle, settoggle] = useState(false)

  const handleclick = () => {
    settoggle(!toggle)
  }


  return (
    <div>
      {/* <UseEffect1 /> */}
      {/* <UseEffect2>
        <button onClick={handleclick}>Click</button>
        {toggle && <div>useEffect Hook </div>}
      </UseEffect2> */}
      <UseEffect3/>
    </div>
  )
}

export default App
