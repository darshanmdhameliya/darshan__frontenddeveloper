import React from 'react'
import File3 from './File3'

const File2 = (props) => {
  return (
    <div>
       <h1>This is File2 Componets {props.name}</h1>
      <File3 name={props.name}/>
    </div>
  )
}

export default File2
