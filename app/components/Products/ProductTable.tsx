import ProductProperty from "./ProductProperty"
import { Product } from "./definition"

export default function ProductTable({ products }) {
    return (
        <>
            {
                products.map((product: Product, index) => {
                    return (
                        <ul key={index} className="w-full grid grid-cols-3 h-10 items-center px-4 text-xs">
                            <ProductProperty label={product.name} />
                            <ProductProperty label={product.code} />
                            <ProductProperty label={product.quantity} />
                        </ul>
                    )
                })
            }
        </>
    )
}