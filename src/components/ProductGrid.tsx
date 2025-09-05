"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { useB2B } from "@/contexts/B2BContext";
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
    id: "stevie-knee-high-suede",
    name: "New Stevie Knee-high Boots in Suede",
    price: "$348.00",
    image: "/stevie-knee-high-suede.jpg",
    badge: "New",
    isNew: true,
  },
  {
    id: "stevie-ankle-leopard",
    name: "New Stevie Ankle Boots in Leopard-print Calf Hair",
    price: "$199.50",
    originalPrice: "$268.00",
    image: "/stevie-ankle-leopard.jpg",
    badge: "Sale",
    isSale: true,
  },
  {
    id: "stevie-ankle-stretch",
    name: "New Stevie Ankle Boots in Stretch Leather",
    price: "$224.50",
    originalPrice: "$298.00",
    image: "/stevie-ankle-stretch.jpg",
    badge: "Sale",
    isSale: true,
  },
  {
    id: "classic-heel-black",
    name: "Classic Pointed Toe Heels in Black Leather",
    price: "$198.00",
    image: "/classic-heel-black.jpg",
  },
  {
    id: "block-heel-nude",
    name: "Comfort Block Heels in Nude Suede",
    price: "$168.00",
    image: "/block-heel-nude-new.jpg",
  },
  {
    id: "ballet-flat-black",
    name: "Classic Ballet Flats in Black Leather",
    price: "$98.00",
    image: "/ballet-flat-black-fixed.jpg",
  },
  {
    id: "canvas-sneaker-white",
    name: "Classic Canvas Sneakers in White",
    price: "$78.00",
    image: "/canvas-sneaker-white-new.jpg",
  },
  {
    id: "leather-sandal-brown",
    name: "Leather Strappy Sandals in Brown",
    price: "$128.00",
    image: "/leather-sandal-brown.jpg",
  },
];

export default function ProductGrid() {
  const { dispatch } = useCart();
  const { isB2BMode, getWholesalePrice } = useB2B();

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
          {isB2BMode && (
            <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Building2 className="h-4 w-4" />
              Business Pricing Active (20% off)
            </div>
          )}
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
                    {isB2BMode ? getWholesalePrice(product.price) : product.price}
                  </span>
                  {isB2BMode && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.price}
                    </span>
                  )}
                  {!isB2BMode && product.originalPrice && (
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
