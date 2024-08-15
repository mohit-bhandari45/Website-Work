import React from 'react';
import { Card, CardContent, CardFooter } from "../../ui/card";
import { Button } from "../../ui/button";

const ProductCard = ({ product }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">${product.price}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#8D493A] rounded-xl text-base hover:bg-[#8D493A]">Enlist</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;