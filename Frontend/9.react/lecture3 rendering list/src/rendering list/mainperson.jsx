import React from 'react'
import Prectiserender from './prectiserender.jsx'

const Mainperson = () => {

  const person = [
    {
      id: 1,
      name: 'darshan',
      age: 20
    },
    {
      id: 2,
      name: 'chetan',
      age: 19
    },
    {
      id: 3,
      name: 'yash',
      age: 19
    }
  ]
  return (
    <div>
      {
        person.map((person) =>(
          <Prectiserender key={person.id} person={person}/>
        ))
      }
    </div>
  )
}

export default Mainperson
