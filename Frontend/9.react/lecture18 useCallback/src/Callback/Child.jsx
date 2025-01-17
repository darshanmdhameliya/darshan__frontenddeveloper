import React from 'react'
import {memo } from 'react';

const Child = ({ handlecount ,count}) => {

  console.log("render");

  return (
    <div>
      <button onClick={handlecount} >add {count}</button>
    </div>
  )
}

export default memo(Child)
