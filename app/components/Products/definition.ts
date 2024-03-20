export type Product = {
    name: string,
    code: string,
    quantity: number
}

export type GetComponentProps = {
    setRealItemCode: (code: string) => void;
    isGetValid: boolean;
    handleGet: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleGetAll: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type PostComponentProps = {
    setProductName: (name: string) => void;
    setItemCode: (code: string) => void;
    setQuantity: (quantity: number) => void;
    handlePost: (e: React.FormEvent<HTMLFormElement>) => void;
    isPostValid: boolean;
}