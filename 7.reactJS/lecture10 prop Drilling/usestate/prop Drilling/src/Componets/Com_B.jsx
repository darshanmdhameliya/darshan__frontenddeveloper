import React from 'react'
import Com_C from './Com_C'

const Com_B = (props) => {
  return (
    <div>
      <h1 className='bg-lime-200 font-bold text-center p-5 my-5'>This is componets B {props.name}</h1>
      <Com_C name={props.name}/>
   
    </div>
  )
}

export default Com_B
