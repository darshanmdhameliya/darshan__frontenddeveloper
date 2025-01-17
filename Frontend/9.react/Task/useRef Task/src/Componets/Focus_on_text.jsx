import React, { useState } from 'react'
import { useRef } from 'react'

const Focus_on_text = () => {

    const inputRef = useRef()

    const [value1 ,setvalue1] =useState("")

    const handleinput=()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    }

    const handlegetvalue = () => {
        console.log("run!!!")
        document.getElementById("value").innerText = value1;
    }

    return (
        <div className=' '>
            <div className="">
                <input type="text" ref={inputRef} className='border-2' value={value1} onChange={(e) => setvalue1(e.target.value)}/>
            </div>
            <button className='p-4 bg-green-400 font-bold rounded-2xl' onClick={handleinput}>
                Focus on Input
            </button>
            <button className='p-4 bg-green-400 font-bold rounded-2xl' onClick={handlegetvalue}>
                Get value
            </button>
            <span id='value'></span>
        </div>
    )
}

export default Focus_on_text
