import CustomInput from "./CustomInput";
import { PostComponentProps } from "./definition";

export default function PostComponent({ setProductName, setItemCode, setQuantity, handlePost, isPostValid }: PostComponentProps) {
    return (
        <form className="h-40 w-[700px] border border-black flex justify-center items-center text-black my-2" onSubmit={handlePost}>
            <CustomInput onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" />
            <CustomInput onChange={(e) => setItemCode(e.target.value)} placeholder="Item Code" />
            <CustomInput onChange={(e) => setQuantity(parseInt(e.target.value))} placeholder="Quantity" />
            <button className={`w-20 h-10 bg-black text-white rounded-sm ${isPostValid ? 'cursor-pointer' : 'cursor-not-allowed'}`} disabled={!isPostValid} type="submit">POST</button>
        </form>
    )
}