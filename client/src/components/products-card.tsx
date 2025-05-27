import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { useState } from "react";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const categoryColor = product.category === "fivem" ? "bg-blue-600" : "bg-red-500";
  const categoryLabel = product.category === "fivem" ? "FiveM MLO" : "Roblox Asset";

  return (
    <div className="product-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl">
      <img 
        src={product.imageUrl} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge className={`${categoryColor} text-white px-3 py-1 text-sm font-medium`}>
            {categoryLabel}
          </Badge>
          <div className="flex items-center text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-gray-800 ml-1 text-sm">{product.rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          <Button 
            onClick={handleAddToCart}
            className={`px-4 py-2 font-medium transition-colors ${
              isAdded 
                ? "bg-green-500 hover:bg-green-600" 
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isAdded ? (
              <>✓ Added!</>
            ) : (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}