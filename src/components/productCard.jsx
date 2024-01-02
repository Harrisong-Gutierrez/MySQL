import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <Link
            href={`/products/${product.id}`} className="bg-black rounded-lg border-gray-800 mb-3 p-4">
            <h1 className="text-slate-200 text-lg font-bold">{product.name}</h1>
            <h2 className="text-2x1 text-slate-200">{product.price}</h2>
            <div className="text-slate-200">{product.description}</div>
        </Link>
    )
}

export default ProductCard