import React from 'react'
import {memo } from 'react';

const Memo1 = ({ name }) => {

  console.log("render");

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default memo(Memo1)
