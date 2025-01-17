import ComA from './components/ComA'
import { createContext } from 'react'

export const user = createContext()

function App() {

  let users = 'Mitesh'

  return (
    <>
    <user.Provider value={users}>
      <h1 className="heading">This is React Pagination Components</h1>
      <ComA/>
    </user.Provider>
    </>
  )
}

export default App
