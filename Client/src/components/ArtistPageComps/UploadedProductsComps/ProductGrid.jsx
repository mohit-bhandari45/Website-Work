import React from 'react';
import ProductCard from './ProductCard';
import First from "./First.png"
import Second from "./Second.png"
import Third from "./Third.png"

const products = [
  { id: 1, name: 'Buddha Painting', price: 200, image: First },
  { id: 2, name: 'Buddha Painting', price: 200, image: Second },
  { id: 3, name: 'Buddha Painting', price: 200, image: Third },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;