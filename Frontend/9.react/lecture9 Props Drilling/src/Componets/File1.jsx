import React from 'react'
import File2 from './File2'

const File1 = (props) => {
  return (
    <div>
      <h1>This is File1 Componets {props.name}</h1>
      <File2  name={props.name}/>
    </div>
  )
}

export default File1
