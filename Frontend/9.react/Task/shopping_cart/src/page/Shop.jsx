import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { add_item } from '../redux/Action'
import { Data } from '../data/Data'

const Shop = () => {

    const dispatch = useDispatch()
    

    return (
        <div className=' container my-5 mx-auto'>

            <div className='grid grid-cols-4 gap-5 '>

                {
                    Data.map((product) => {
                        return (
                            <div key={product.id}>
                                <div className='border p-2 hover:shadow-2xl rounded-xl '>
                                    <div>
                                        <img src={product.image} alt="" className='size-36 object-contain mx-auto' />
                                    </div>
                                    <div className='leading-8 ' >
                                        <p className='line-clamp-1 text-slate-600 font-semibold'>{product.title}</p>
                                        <p className='text-left'><span className='font-semibold '>Price :</span> {product.price}$</p>
                                        <p className='text-left'> <span className='font-semibold'>Category :</span> {product.category}</p>

                                    </div>

                                    <div className='flex gap-4 justify-around ' >
                                        <button className='bg-green-600 text-white px-2 py-1' onClick={() => dispatch(add_item(product))}>AddToCart</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Shop