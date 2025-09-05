"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, ShoppingBag, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  isNew?: boolean;
  isSale?: boolean;
  category: string;
  subcategory: string;
}

const flatsProducts: Product[] = [
  {
    id: "ballet-flat-black",
    name: "Classic Ballet Flats in Black Leather",
    price: "$98.00",
    image: "/ballet-flat-black.jpg",
    category: "flats",
    subcategory: "ballet-flats",
  },
  {
    id: "mesh-mary-jane-flats",
    name: "Mesh Mary Jane Flats",
    price: "$64.50",
    originalPrice: "$128.00",
    image: "/mesh-mary-jane-flats.jpg",
    badge: "Sale",
    isSale: true,
    category: "flats",
    subcategory: "mary-jane",
  },
  {
    id: "comfort-oxfords",
    name: "Comfort Oxfords in Brown Leather",
    price: "$99.00",
    image: "/flat3.jpg",
    category: "flats",
    subcategory: "oxfords",
  },
  {
    id: "designer-mules",
    name: "Designer Mules in Black Suede",
    price: "$129.00",
    originalPrice: "$149.00",
    image: "/flat4.jpg",
    badge: "Sale",
    isSale: true,
    category: "flats",
    subcategory: "mules",
  },
];

export default function FlatsPage() {
  const { dispatch } = useCart();
  const searchParams = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');

  // Read filter from URL on component mount
  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter) {
      setFilterBy(filter);
    }
  }, [searchParams]);

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

  const filteredProducts = flatsProducts.filter(product => {
    if (filterBy === 'all') return true;
    return product.subcategory === filterBy;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Flats Collection</h1>
            <p className="text-xl text-primary-foreground/90">
              Comfort meets style in our collection of elegant flats. 
              From classic ballet flats to modern loafers, perfect for every occasion.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-primary">Collections</Link>
            <span>/</span>
            <span className="text-foreground">Flats</span>
          </div>
        </nav>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Flats</SelectItem>
                <SelectItem value="ballet-flats">Ballet Flats</SelectItem>
                <SelectItem value="loafers">Loafers</SelectItem>
                <SelectItem value="oxfords">Oxfords</SelectItem>
                <SelectItem value="mules">Mules</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {sortedProducts.length} of {flatsProducts.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
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

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setFilterBy('all');
                setSortBy('featured');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
