import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Remove_item } from '../redux/Action'

const Cart = () => {

  const shopData = useSelector(state => state.Add_to_cart)
  
  console.log("cart data", shopData);

  const dispatch = useDispatch()

  return (
    <div>
      <div className='grid grid-cols-4 gap-5 '>
        {
          shopData.length === 0 ? <div className='text-4xl flex justify-center items-center w-screen'> Cart Is Empty ! </div> :
            shopData.map((product) => {
              return (
                <div key={product.id}>
                  <div className='border p-2 '>
                    <div>
                      <img src={product.image} alt="" className='size-36 object-contain mx-auto' />
                    </div>
                    <div className='leading-8 ' >
                      <p className='line-clamp-1 text-slate-600 font-semibold'>{product.title}</p>
                      <p className='text-left'><span className='font-semibold '>Price :</span> {product.price}$</p>
                      <p className='text-left'> <span className='font-semibold'>Category :</span> {product.category}</p>
                    </div>

                    <div className='flex gap-4 justify-around ' >
                      <button className='bg-red-500 text-white px-2 py-1' onClick={() => dispatch(Remove_item(product.id))}>removeToCart</button>
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

export default Cart