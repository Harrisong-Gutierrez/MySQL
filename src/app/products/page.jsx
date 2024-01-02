import ProductCard from "@/components/productCard";
import axios from "axios";

async function loadProducts() {
    const { data } = await axios.get("http://localhost:3000/api/products")
    console.log(data)
    return data
}
async function ProductPage() {
    const products = await loadProducts();
    return (
        <div className="grid gap-4 grid-cols-4">
            {products.map(product => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
}

export default ProductPage