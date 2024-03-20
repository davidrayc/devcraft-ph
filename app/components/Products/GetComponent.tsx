'use client'

import CustomInput from "./CustomInput";
import { GetComponentProps } from "./definition";

export default function GetComponent({ setRealItemCode, isGetValid, handleGet, handleGetAll }: GetComponentProps) {
    return (
        <form className="h-40 w-[700px] border border-black flex justify-center items-center text-black my-2">
            <CustomInput onChange={(e) => setRealItemCode(e.target.value)} placeholder="Real Item Code" />
            <button className={`w-20 h-10 bg-black text-white rounded-sm ${isGetValid ? 'cursor-pointer' : 'cursor-not-allowed'} mr-2`} onClick={handleGet} disabled={!isGetValid}>GET</button>
            <button className="w-20 h-10 bg-black text-white rounded-sm cursor-pointer" onClick={handleGetAll}>GET ALL</button>
        </form>
    )
}