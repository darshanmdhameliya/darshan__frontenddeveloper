import React from 'react'

const Qutoes = [
    '“Be yourself; everyone else is already taken.”',
    '“So many books, so little time.”',
    '“A room without books is like a body without a soul.”',
    '“You only live once, but if you do it right, once is enough.”',
    '“Be the change that you wish to see in the world.”',
    '“We accept the love we think we deserve.”',
    '“Without music, life would be a mistake.”',
]



const Renderinglist = () => {
    return (
        <div>
            <h1 className='bg-purple-500 p-[10px] text-4xl text-center font-bold '>React List Rendering</h1>
            <ul>
                {
                    Qutoes.map((item) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Renderinglist
