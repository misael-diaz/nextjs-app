"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  isNew?: boolean;
  isSale?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Classic Black Stilettos",
    price: "$129.00",
    originalPrice: "$159.00",
    image: "/shoe1.jpg",
    badge: "Sale",
    isSale: true,
  },
  {
    id: "2",
    name: "Elegant Ballet Flats",
    price: "$89.00",
    image: "/shoe2.jpg",
    badge: "New",
    isNew: true,
  },
  {
    id: "3",
    name: "Leather Ankle Boots",
    price: "$149.00",
    image: "/shoe3.jpg",
  },
  {
    id: "4",
    name: "Designer Heeled Sandals",
    price: "$199.00",
    originalPrice: "$249.00",
    image: "/shoe4.jpg",
    badge: "Sale",
    isSale: true,
  },
  {
    id: "5",
    name: "Comfort Sneakers",
    price: "$119.00",
    image: "/shoe1.jpg",
  },
  {
    id: "6",
    name: "Luxury Platform Heels",
    price: "$179.00",
    image: "/shoe2.jpg",
    badge: "New",
    isNew: true,
  },
  {
    id: "7",
    name: "Knee High Boots",
    price: "$189.00",
    image: "/shoe3.jpg",
  },
  {
    id: "8",
    name: "Casual Loafers",
    price: "$99.00",
    originalPrice: "$129.00",
    image: "/shoe4.jpg",
    badge: "Sale",
    isSale: true,
  },
];

export default function ProductGrid() {
  const { dispatch } = useCart();

  const handleAddToCart = (product: Product) => {
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Shoes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of women's shoes, 
            each designed with comfort, style, and exceptional craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                {product.badge && (
                  <Badge 
                    variant={product.isNew ? "default" : "destructive"}
                    className="absolute top-3 left-3"
                  >
                    {product.badge}
                  </Badge>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col gap-2">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="h-8 w-8"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <Button 
                  className="w-full" 
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/collections/all-products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
