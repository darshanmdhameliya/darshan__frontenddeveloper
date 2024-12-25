import React from 'react'
import { useContext } from 'react'
import { ContextProvider } from '../Context/Context'

const ComA = () => {

    const value = useContext(ContextProvider)

    return (
        <div className='flex gap-5 btn'>
            <button onClick={value.prevstep}>Prev</button>
            <span>{value.count}</span>
            <button onClick={value.nextstep}>Next</button>
        </div>
    )
}

export default ComA
