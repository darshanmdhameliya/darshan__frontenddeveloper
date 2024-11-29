import React from 'react'

// const Item = ({ name, Isstock }) => {
//     if (Isstock) {
//         return <li>{name}</li>
//     }
//     return <li><del>{name}</del></li>

// }

// const Item = ({ name, Isstock }) => {
//     return <li>
//         {Isstock ? name : <del>{name}</del>}
//     </li>
// }

const Item = ({ name, Isstock }) => {
    return <li>
        {name} {Isstock && '✅'}
    </li>
}


const Productacticity = () => {
    return (
        <div>
            <h1>this is conditional rendering</h1>
            <ul>
                <Item name="T-shrt" Isstock={true} />
                <Item name="shrt" Isstock={false} />
                <Item name="pent" Isstock={true} />
                <Item name="jens" Isstock={false} />
                <Item name="plazo" Isstock={true} />
            </ul>
        </div>
    )
}

export default Productacticity
