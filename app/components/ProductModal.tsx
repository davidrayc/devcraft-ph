// app/components/ProductModal.tsx

import { useState } from 'react';

interface ProductModalProps {
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose }) => {
  const [productName, setProductName] = useState('');
  const [itemCode, setItemCode] = useState('');
  const [quantity, setQuantity] = useState<number>(0);

  const handleSave = () => {
    // Handle save logic here
    console.log('Product Name:', productName);
    console.log('Item Code:', itemCode);
    console.log('Quantity:', quantity);
    onClose(); // Close the modal
  };

  const handleCancel = () => {
    // Clear inputs and close the modal
    setProductName('');
    setItemCode('');
    setQuantity(0);
    onClose();
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    // Validate quantity to not go below 0
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[25%] mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <div className="flex justify-between mt-4">
          <label htmlFor="productName" className="block mb-1">Product Name</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="p-2 rounded-md"
          />
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="itemCode" className="block mb-1">Item Code</label>
          <input
            type="text"
            id="itemCode"
            value={itemCode}
            onChange={(e) => setItemCode(e.target.value)}
            className="p-2 rounded-md"
          />
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="quantity" className="block mb-1">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="p-2 rounded-md"
          />
        </div>
        <div className="flex justify-end w-full mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 w-1/2"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-md w-1/2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
