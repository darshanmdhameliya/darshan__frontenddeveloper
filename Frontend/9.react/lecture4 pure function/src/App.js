import React from 'react'
// import Multi from './componets/multi'
// import { Recipe } from './componets/Recipe'
import { Tea } from './componets/Tea'

const App = () => {
  return (
    <div>
      {/* <Multi/>
      <Recipe drinkers={2}/> */}
      <Tea guest={2}/>
      <Tea guest={2}/>
    </div>
  )
}

export default App
