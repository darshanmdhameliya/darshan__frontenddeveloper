import React, { useState } from 'react'

const Usestate = () => {

    const [count, setcount] = useState(0)

    const handleIncrement = () => {
        return setcount(count + 1)
    }
    const handleDecrement = () => {
        if (count > 0) {

            return setcount(count - 1)
        }
        else {
            return count
        }
    }

    return (
        <div>
            <h1 className="bg-purple-500 text-blue-950 p-2 font-bold text-center text-2xl">This is Hook in react</h1>
            <div className="container flex-col justify-center items-center w-full ">
                <div className='flex justify-center items-center my-2'>
                    <p className='bg-gray-400 p-1 text-lg font-bold mx-1'>Count : {count}</p>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={handleIncrement} className='bg-gray-400 p-1 text-lg font-bold mx-1'>Increment</button>
                    <button onClick={handleDecrement} className='bg-gray-400 p-1 text-lg font-bold'>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default Usestate
