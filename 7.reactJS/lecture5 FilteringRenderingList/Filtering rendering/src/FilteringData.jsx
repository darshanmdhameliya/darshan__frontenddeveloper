import React from 'react'
import { useState } from 'react'

const profile = [
  {
    id: 1,
    name: 'darshan',
    age: 20,
    gender: 'male',
  },
  {
    id: 2,
    name: 'rajan',
    age: 19,
    gender: 'male',
  },
  {
    id: 3,
    name: 'janvi',
    age: 27,
    gender: 'female',
  },
  {
    id: 4,
    name: 'nishta',
    age: 35,
    gender: 'female',
  },
  {
    id: 5,
    name: 'chetan',
    age: 23,
    gender: 'male',
  },
]




const FilteringData = () => {

  const [profiledata , setProfileData] =useState('')
  console.log(profiledata);
  

  //  const filterdata = profile.filter((item) => item.name.length < 6)

// const filterdata = profile.filter((item) => item.age > 25)

// const filterdata = profile.filter((item) => item.age > 25 &&  item.age<30)

const filterdata = profile.filter((item) => item.gender == profiledata)

  const handleMale = () => {
    return setProfileData('male')
  }

  const handleFemale = () => {
    return setProfileData('female')
  }

  return (
    <div>
      <h1 className='bg-purple-500 text-4xl p-[10px] font-bold text-center'>React Datafiltering useing Array</h1>
      <div className='flex justify-evenly'>
        <button onClick={handleMale}>Male</button>
        <button onClick={handleFemale}>Female</button>
        {
          filterdata.map((item) => {
            return (

              <div key={item.id}>
                <ul>
                  <li>{item.name}</li>
                  <li>{item.age}</li>
                  <li>{item.gender}</li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FilteringData
