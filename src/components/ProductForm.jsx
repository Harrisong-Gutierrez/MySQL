"use client"
import { useState } from 'react'

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: ""
    })
    const handleChange = e => {
        console.log(e.target.value, e.target.name);
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product)
    };
    return (
        <div>
            <form className='bg-black shadow-md rounded-md px-8 pt-6 pb-8 mb-4'
                onSubmit={handleSubmit}>
                <label htmlFor="name"
                    className='block text-white text-sm font-bold mb-2 mt-2'
                >Product Name</label>
                <input name="name" type="text" placeholder='name' onChange={handleChange}
                    className='shadow appearance-one border rounded w-full py-2 px-3' />

                <label htmlFor="name"

                    className='block text-white text-sm font-bold mb-2 mt-2'>Product Price:</label>
                <input name="price" type="text" placeholder='00.00' onChange={handleChange}
                    className='shadow appearance-one border rounded w-full py-2 px-3' />

                <label htmlFor="name"
                    className='block text-white text-sm font-bold mb-2 mt-2'>Product Description:</label>
                <textarea name="descition" rows={3} type="text" placeholder='description' onChange={handleChange}
                    className='shadow appearance-one border rounded w-full py-2 px-3' />

                <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Save Products
                </button>
            </form>
        </div>

    )
}

export default ProductForm