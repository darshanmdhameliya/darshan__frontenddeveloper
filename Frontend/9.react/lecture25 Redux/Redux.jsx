import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import buy from "../redux/src/Action"



const Redux = () => {

  const data = useSelector(state => state)

  console.log('data'  , data);
  
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className='semitext'>This is React-Redux</h2>
      <button className='btn' onClick={() => dispatch(buy())}>click</button>
    </div>
  )
}

export default Redux


