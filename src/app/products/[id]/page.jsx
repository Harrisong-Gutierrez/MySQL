import axios from "axios"
async function loadProduct(productId) {
    const { data } = await axios.get('http://localhost:3000/api/products' + productId);
    return data
}
async function ProductPge({ params }) {
    const product = await loadProduct(params.id)
    return (
        <section className="flex justify-center items-center">
            <div className="p-6 bg-black">
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>

                <button>Delete</button>
                <button>Edit</button>
            </div>
        </section>
    )
}

export default ProductPge