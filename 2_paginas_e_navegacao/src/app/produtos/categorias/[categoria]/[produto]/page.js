import React from 'react'

const ProductPage = ({params}) => {

    const produto = params.produto

// pesq. banco para achar a gola v
  return (
    <div>
      <h1> Vendo produto {produto}</h1>
    </div>
  )
}

export default ProductPage
