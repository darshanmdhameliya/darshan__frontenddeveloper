import React, { useState } from 'react'

const Usestate3 = () => {

    const [count, setcount] = useState(0)

    // const handleIncrement = () => {
    //     return setTimeout(() => setcount(count + 1), 2000);
    // }
    // const handleDecrement = () => {
    //     if (count > 0) {

    //         return setTimeout(() => setcount(count - 1), 2000)
    //     }
    //     else {
    //         return count
    //     }
    // }

    const handleIncrement = () => {
        return setTimeout(() => setcount(count => count + 1), 2000);
    }
    const handleDecrement = () => {
        if (count > 0) {
            return count > 0 ? setTimeout(() => setcount(count => count - 1), 2000) : count;
            // return count > 0 ? setTimeout(() => setcount( count - 1), 2000) : count;
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

export default Usestate3
