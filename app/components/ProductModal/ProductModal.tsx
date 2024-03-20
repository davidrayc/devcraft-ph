import React, { useState } from 'react';
import ProductModalInput from './ProductModalInput';
import ProductModalButton from './ProductModalButton';

interface ProductModalProps {
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose }) => {
  const [productName, setProductName] = useState('');
  const [itemCode, setItemCode] = useState('');
  const [quantity, setQuantity] = useState<number>(0);

  const handleSave = () => {
    console.log('Product Name:', productName);
    console.log('Item Code:', itemCode);
    console.log('Quantity:', quantity);
    onClose(); 
  };

  const handleCancel = () => {
    setProductName('');
    setItemCode('');
    setQuantity(0);
    onClose();
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[25%] mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <ProductModalInput
          label="Product Name"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <ProductModalInput
          label="Item Code"
          id="itemCode"
          value={itemCode}
          onChange={(e) => setItemCode(e.target.value)}
        />
        <ProductModalInput
          label="Quantity"
          id="quantity"
          value={quantity.toString()}
          onChange={handleQuantityChange}
          type="number"
          min='0'
        />
        <div className="flex justify-end w-full mt-6">
          <ProductModalButton
            text="Save"
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 w-1/2"
          />
          <ProductModalButton
            text="Cancel"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-md w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
