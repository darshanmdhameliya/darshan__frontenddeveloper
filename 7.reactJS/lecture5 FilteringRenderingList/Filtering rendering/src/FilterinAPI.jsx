import React, { useState } from 'react'


const FilterinAPI = () => {

  const [data, setdata] = useState([])

  const productdata = () => {
    let response = fetch('https://fakestoreapi.com/users')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setdata(data) 
      })
      .catch((error) => {
        console.log(error);
      })
      // .finally(() => {
      //   console.log('API COM');
      // })
  }

  return (
    <div>
      <h1 className='bg-purple-500 p-[10px] text-center font-bold '>React filtering using API</h1>
      <button onClick={productdata} className='border-2 border-black px-2 mt-2 rounded-lg'>Click</button>
      {
        data.map((item) => <div key={item.id}>{item.email}</div>)
      }
    </div>
  )
}

export default FilterinAPI

