import React from 'react'
import Com_D from './Com_D'


const Com_C = (props) => {
  return (
    <div>
      <h1 className='bg-lime-200 font-bold text-center p-5 my-5'>This is componets C {props.name}</h1>
      <Com_D name={props.name} />
    </div>
  )
}

export default Com_C
