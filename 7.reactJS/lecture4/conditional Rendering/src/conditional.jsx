import React from 'react'

export function ProductList({ instock, name }) {
    // if(instock === "true"){
    //     return <li>{name}</li>
    // }else{
    //     return <li><del>{name}</del></li>
    // }

    return (
        <>
            {
                instock ? <div>{name}</div> : <div><del>{name}</del></div>
            }
        </>
    )

}


const Conditional = ({ instock, name }) => {
    return (
        <div>
            <h1 className='bg-purple-800 text-white p-5 text-[20px] font-bold text-center '>React conditional Rendering</h1>
            <ul>
                <ProductList name="Perfumes" instock={true} />
                <ProductList name="clothes" instock={true} />
                <ProductList name="mobiles" instock={false} />
                <ProductList name="Electronics" instock={true} />
            </ul>
        </div>
    )
}

export default Conditional