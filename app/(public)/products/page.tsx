'use client'

import CustomInput from "@/app/components/Products/CustomInput";
import ProductProperty from "@/app/components/Products/ProductProperty";
import { Product } from "@/app/components/Products/definition";
import { apiRequest } from "@/app/utils/apiRequest";
import { useState } from "react";

export default function getProducts() {
    const [productName, setProductName] = useState('');
    const [itemCode, setItemCode] = useState('');
    const [realItemCode, setRealItemCode] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [products, setProducts] = useState([]);


    async function handlePost(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = await apiRequest('/api/products', 'POST', { productName, itemCode, quantity })
        setProducts(data.rows);
    }

    async function handleGet(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const data = await apiRequest(`/api/products?itemCode=${realItemCode}`, 'GET')
        setProducts(data);
    }

    async function handleGetAll(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const data = await apiRequest('/api/products', 'GET')
        setProducts(data);
    }

    const isPostValid = itemCode !== '' && productName !== '' && quantity > 0;
    const isGetValid = realItemCode !== '';


    return (
        <div className="flex flex-wrap justify-center place-items-center text-white">
            <div className="w-full flex flex-col items-center justify-center mt-20">
                <form className="h-40 w-[700px] border border-black flex justify-center items-center text-black my-2" onSubmit={handlePost}>
                    <CustomInput onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" />
                    <CustomInput onChange={(e) => setItemCode(e.target.value)} placeholder="Item Code" />
                    <CustomInput onChange={(e) => setQuantity(parseInt(e.target.value))} placeholder="Quantity" />
                    <button className={`w-20 h-10 bg-black text-white rounded-sm ${isPostValid ? 'cursor-pointer' : 'cursor-not-allowed'}`} disabled={!isPostValid} type="submit">POST</button>
                </form>
                <form className="h-40 w-[700px] border border-black flex justify-center items-center text-black my-2">
                    <CustomInput onChange={(e) => setRealItemCode(e.target.value)} placeholder="Real Item Code" />
                    <button className={`w-20 h-10 bg-black text-white rounded-sm ${isGetValid ? 'cursor-pointer' : 'cursor-not-allowed'} mr-2`} onClick={handleGet} disabled={!isGetValid}>GET</button>
                    <button className="w-20 h-10 bg-black text-white rounded-sm cursor-pointer" onClick={handleGetAll}>GET ALL</button>
                </form>
            </div>
            <main className="mt-10 w-[700px] border border-black flex p-5 text-black">
                <div className="w-full flex flex-col justify-center">
                    <ul className="w-full grid grid-cols-3 h-10 items-center px-4 text-xs">
                        <ProductProperty label="Product Name" />
                        <ProductProperty label="Product Code" />
                        <ProductProperty label="Product Quantity" />
                    </ul>
                    {products.map((product: Product, index) => {
                        return (
                            <ul key={index} className="w-full grid grid-cols-3 h-10 items-center px-4 text-xs">
                                <ProductProperty label={product.name} />
                                <ProductProperty label={product.code} />
                                <ProductProperty label={product.quantity} />
                            </ul>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}