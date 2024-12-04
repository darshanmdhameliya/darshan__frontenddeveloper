import React from 'react'

const Events = () => {

    const handleclick =()=>{
        return alert("this is onclcik event");
    }
  return (
    <div>
      <button className='bg-blue-600 py-2 px-8 m-4 hover:bg-black hover:font-bold hover:text-white rounded-lg font-bold text-black' onClick={handleclick}>Click</button>
      {/* <button className='bg-blue-600 py-2 px-8 m-4 hover:bg-black hover:font-bold hover:text-white rounded-lg font-bold text-black' onClick={handleclick()}>Click</button>
      <button className='bg-blue-600 py-2 px-8 m-4 hover:bg-black hover:font-bold hover:text-white rounded-lg font-bold text-black' onClick={()=>alert("this is onclcik event")}>Click</button>
      <button className='bg-blue-600 py-2 px-8 m-4 hover:bg-black hover:font-bold hover:text-white rounded-lg font-bold text-black' onClick={alert("this is onclcik event")}>Click</button> */}
    </div>
  )
}

export default Events
