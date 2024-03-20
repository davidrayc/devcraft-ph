import React from 'react';

interface InputProps {
  label: string;
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  min?: string | number; 
}

const ProductModalInput: React.FC<InputProps> = ({ label, id, value, onChange, type = "text", min }) => {
  return (
    <div className="flex justify-between mt-4">
      <label htmlFor={id} className="block mb-1">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="p-2 rounded-md"
        min={min !== undefined ? String(min) : undefined} 
      />
    </div>
  );
};

export default ProductModalInput;
