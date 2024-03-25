import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className: string;
}

const ProductModalButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default ProductModalButton;
