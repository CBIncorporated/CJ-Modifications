import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "./product-card";
import type { Product } from "@shared/schema";

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products?.filter(product => {
    if (activeFilter === "all") return true;
    return product.category === activeFilter;
  }) || [];

  const filterButtons = [
    { id: "all", label: "All Products" },
    { id: "fivem", label: "FiveM MLOs" },
    { id: "roblox", label: "Roblox Assets" },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of FiveM MLOs and Roblox assets, crafted with attention to detail and optimized for performance.
          </p>
        </div>

        {/* Product Categories */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {filterButtons.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "ghost"}
                className={`px-6 py-3 mr-2 font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-blue-50"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-6 w-24 mb-3" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-10 w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 font-semibold">
            📄 View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}