import React from 'react'

const Product = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()
    return (
        <div className='max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg'>
            <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
            <div className='flex flex-col md:flex-row'>
                <img src={product.image} alt={product.title} className='w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4' />
                <div className='md:w-1/2'>
                    <p className='text-lg mb-4'>{product.description}</p>
                    <p className='text-2xl font-semibold mb-4'>${product.price}</p>
                    <p className='text-sm text-gray-400'>Category: {product.category}</p>
                </div>
            </div>
        </div>
    )
}

export default Product