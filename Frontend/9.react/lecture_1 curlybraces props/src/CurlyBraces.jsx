import React from 'react'

const CurlyBraces = () => {
  const name = "darshan"
  const age = 20


  const profile = {
    player_name: "kohli",
    type: "batter",
    age: 35
  }

  const array = ["kohli" ,"batter",35]

  return (
    <>
      <h1>simple variable in curlybraces</h1>
      <h4>my name is {name} and my age is {age}</h4>

      <h1>object in curlybraces</h1>
      <h4>player name {profile.player_name} and type is {profile.type} and age is {profile.age}</h4>

      <h1>array in curly braces</h1>
      <h4>player name {array[0]} and type is {array[1]} and age is {array[2]}</h4>

      <h1>css in curlybraces</h1>
      <h4 style={{backgroundColor:'aqua'}}>you give css in double curly braces like</h4>
    </>
  )
}

export default CurlyBraces
