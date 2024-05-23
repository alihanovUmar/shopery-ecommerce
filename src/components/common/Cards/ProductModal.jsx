import React, { useEffect } from 'react';

const ProductModal = ({ product, closeModal }) => {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal(); 
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50" onClick={handleCloseModal}>
      <div className="relative bg-white rounded-lg max-w-md p-8" onKeyDown={handleKeyDown}>
        <button className="absolute top-4 right-4 text-gray-600" onClick={closeModal}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <img className="w-full h-auto rounded-lg mb-4" src={product.img} alt={product.title} />
        <p className="text-gray-800 mb-4">{product.description}</p>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">{product.prices}</p>
          <p className="text-red-400 line-through">{product.discount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
