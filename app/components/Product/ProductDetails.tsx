type ProductDetailsProps = {
  itemCode: string;
  quantity: number;
}

const ProductDetails = ({ itemCode, quantity }: ProductDetailsProps) => {
  return (
    <div className="flex flex-col gap-y-6 mt-6">
      <div className="text-xl">
        <div className="font-bold">Item code</div>
        <div>{itemCode}</div>
      </div>

      <div className="text-xl">
        <div className="font-bold">Quantity</div>
        <div>{quantity}</div>
      </div>
    </div>
  );
}

export default ProductDetails;
