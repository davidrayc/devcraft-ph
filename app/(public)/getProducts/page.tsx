'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function getProducts() {

    const router = useRouter();
    const [productName, setProductName] = useState('');
    const [itemCode, setItemCode] = useState('');
    const [realItemCode, setRealItemCode] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [products, setProducts] = useState([]);


    async function handlePost(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await fetch(`/api/getProducts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productName: productName,
                    itemCode: itemCode,
                    quantity: quantity
                })
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            setProducts(data.rows);
        } catch (error) {
            console.error('An error occurred while fetching the data.', error);
        }
    }

    async function handleGet(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            const response = await fetch(`/api/getProducts?itemCode=${realItemCode}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            setProducts(data);
        } catch (error) {
            console.error('An error occurred while fetching the data.', error);
        }
    }

    async function handleGetAll(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            const response = await fetch(`/api/getProducts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            setProducts(data);
        } catch (error) {
            console.error('An error occurred while fetching the data.', error);
        }
    }


    return (
        <div className="flex flex-wrap justify-center place-items-center text-white">
            <div className="w-full flex flex-col items-center justify-center mt-20">
                <form className="h-40 w-[700px] border border-black flex justify-center items-center text-black my-2" onSubmit={handlePost}>
                    <input className="w-40 h-10 border pl-2 border-black mx-2" type="text" onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" />
                    <input className="w-40 h-10 border pl-2 border-black mx-2" type="text" onChange={(e) => setItemCode(e.target.value)} placeholder="Item Code" />
                    <input className="w-40 h-10 border pl-2 border-black mx-2" type="text" onChange={(e) => setQuantity(parseInt(e.target.value))} placeholder="Quantity" />
                    <button className={`w-20 h-10 bg-black text-white rounded-sm ${itemCode !== '' && productName !== '' && quantity > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`} disabled={itemCode === '' && productName === '' && quantity <= 0} type="submit">POST</button>
                </form>
                <form className="h-40 w-[700px] border border-black flex justify-center items-center text-black my-2">
                    <input className="w-40 h-10 border pl-2 border-black mx-2" type="text" onChange={(e) => setRealItemCode(e.target.value)} placeholder="Real Item Code" />
                    <button className={`w-20 h-10 bg-black text-white rounded-sm ${realItemCode !== '' ? 'cursor-pointer' : 'cursor-not-allowed'} mr-2`} onClick={handleGet} disabled={realItemCode === ''}>GET</button>
                    <button className="w-20 h-10 bg-black text-white rounded-sm cursor-pointer" onClick={handleGetAll}>GET ALL</button>
                </form>
            </div>
            <main className="mt-10 w-[700px] border border-black flex p-5 text-black">
                <div className="w-full flex flex-col justify-center">
                    <div className="w-full grid grid-cols-3 h-10 items-center px-4 text-xs">
                        <h1 className="px-4 border border-collapse border-black h-full flex items-center flex-wrap font-bold">Product Name</h1>
                        <h1 className="px-4 border border-collapse border-black h-full flex items-center flex-wrap font-bold">Product Code</h1>
                        <h1 className="px-4 border border-collapse border-black h-full flex items-center flex-wrap font-bold">Product Quantity</h1>
                    </div>
                    {products.map((product, index) => {
                        return (
                            <div key={index} className="w-full grid grid-cols-3 h-10 items-center px-4 text-xs">
                                <h1 className="px-4 border border-collapse border-black h-full flex items-center flex-wrap">{product.name}</h1>
                                <h1 className="px-4 border border-collapse border-black h-full flex items-center flex-wrap">{product.code}</h1>
                                <h1 className="px-4 border border-collapse border-black h-full flex items-center flex-wrap">{product.quantity}</h1>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}