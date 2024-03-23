import ProductProperty from "./ProductProperty";

export default function ProductLabel() {
    return (
        <ul className="w-full grid grid-cols-3 h-10 items-center px-4 text-xs">
            <ProductProperty label="Product Name" />
            <ProductProperty label="Product Code" />
            <ProductProperty label="Product Quantity" />
        </ul>
    )
}