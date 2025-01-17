import React from 'react'
import Com_B from './Com_B'
import {createContext} from 'react'

export const data1 = createContext()
export const data2 = createContext()

let name = 'darshan'
let surname = 'dhameliya'

const Main = () => {
  return (
    <div>
      <data1.Provider value={name}>
        <data2.Provider value={surname}>
          <Com_B />
        </data2.Provider>
      </data1.Provider>
    </div>
  )
}

export default Main
