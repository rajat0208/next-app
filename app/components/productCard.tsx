import React from 'react'
import AddToCart from './addToCart'

const productCard = () => {
  return (
    <div className="p-4 my-4 border-2 border-black bg-slate-400 text-xl text-white text-center hover:bg-slate-500 ">
        <AddToCart />
    </div>
  )
}

export default productCard