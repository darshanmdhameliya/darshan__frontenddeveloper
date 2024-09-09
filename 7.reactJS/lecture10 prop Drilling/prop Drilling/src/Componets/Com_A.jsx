import React from 'react'
import Com_B from './Com_B'

const Com_A = (props) => {
    return (
        <div>
            <h1 className='bg-lime-200 font-bold text-center p-5'>This is componets A {props.name}</h1>
            <Com_B name={props.name} />
        </div>
    )
}

export default Com_A
