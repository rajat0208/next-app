import React from 'react'

interface props{
    params :{slug : string[]}
}

const ProductPage = ({params: {slug}}:props) => {
  return (
    <div>ProductPage {slug}</div>
  )
}

export default ProductPage