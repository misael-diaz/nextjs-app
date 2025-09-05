"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Search, Filter } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useB2B } from "@/contexts/B2BContext";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  isSale?: boolean;
  isNew?: boolean;
  category: string;
  subcategory: string;
}

// All products from all categories
const allProducts: Product[] = [
  // Heels
  {
    id: "classic-heel-black",
    name: "Classic Pointed Toe Heels in Black Leather",
    price: "$198.00",
    image: "/classic-heel-black-fixed.jpg",
    category: "heels",
    subcategory: "stilettos",
  },
  {
    id: "block-heel-nude",
    name: "Block Heel Pumps in Nude",
    price: "$168.00",
    originalPrice: "$198.00",
    image: "/block-heel-nude-new.jpg",
    badge: "Sale",
    isSale: true,
    category: "heels",
    subcategory: "block-heels",
  },
  {
    id: "platform-heel-black",
    name: "Platform Heels in Black",
    price: "$178.00",
    image: "/platform-heel-black.jpg",
    category: "heels",
    subcategory: "platform",
  },
  
  // Flats
  {
    id: "ballet-flat-black",
    name: "Classic Ballet Flats in Black Leather",
    price: "$98.00",
    image: "/ballet-flat-black-fixed.jpg",
    category: "flats",
    subcategory: "ballet-flats",
  },
  {
    id: "mesh-mary-jane-flats",
    name: "Mesh Mary Jane Flats",
    price: "$78.00",
    originalPrice: "$98.00",
    image: "/mesh-mary-jane-flats.jpg",
    badge: "Sale",
    isSale: true,
    category: "flats",
    subcategory: "mary-janes",
  },
  {
    id: "comfort-oxfords",
    name: "Comfort Oxfords in Brown",
    price: "$128.00",
    image: "/comfort-oxfords-brown.jpg",
    category: "flats",
    subcategory: "oxfords",
  },
  {
    id: "designer-mules",
    name: "Designer Mules in Black",
    price: "$118.00",
    originalPrice: "$148.00",
    image: "/designer-mules-black.jpg",
    badge: "Sale",
    isSale: true,
    category: "flats",
    subcategory: "mules",
  },
  
  // Boots
  {
    id: "stevie-knee-high-suede",
    name: "Stevie Knee-High Boots in Suede",
    price: "$198.00",
    image: "/stevie-knee-high-suede.jpg",
    category: "boots",
    subcategory: "knee-high",
  },
  {
    id: "stevie-ankle-leopard",
    name: "Stevie Ankle Boots in Leopard",
    price: "$178.00",
    image: "/stevie-ankle-leopard.jpg",
    category: "boots",
    subcategory: "ankle",
  },
  {
    id: "stevie-ankle-stretch",
    name: "Stevie Ankle Boots in Stretch",
    price: "$168.00",
    image: "/stevie-ankle-stretch.jpg",
    category: "boots",
    subcategory: "ankle",
  },
  {
    id: "combat-boots",
    name: "Combat Boots in Black Leather",
    price: "$169.00",
    originalPrice: "$199.00",
    image: "/combat-boots-black.jpg",
    badge: "Sale",
    isSale: true,
    category: "boots",
    subcategory: "combat",
  },
  
  // Sneakers
  {
    id: "canvas-sneaker-white",
    name: "Canvas Sneakers in White",
    price: "$88.00",
    image: "/canvas-sneaker-white-new.jpg",
    category: "sneakers",
    subcategory: "canvas",
  },
  
  // Sandals
  {
    id: "leather-sandal-brown",
    name: "Leather Strappy Sandals in Brown",
    price: "$128.00",
    image: "/leather-sandal-brown.jpg",
    category: "sandals",
    subcategory: "strappy",
  },
  {
    id: "three-strap-slide-sandals",
    name: "Three-Strap Slide Sandals",
    price: "$64.50",
    originalPrice: "$108.00",
    image: "/slide-sandal-white-new.jpg",
    badge: "Sale",
    isSale: true,
    category: "sandals",
    subcategory: "slide",
  },
  {
    id: "fisherman-wedge-sandals",
    name: "Fisherman Flat-Form Wedges",
    price: "$56.50",
    originalPrice: "$128.00",
    image: "/wedge-sandal-tan-new.jpg",
    badge: "Sale",
    isSale: true,
    category: "sandals",
    subcategory: "wedge",
  },
  {
    id: "heeled-sandals",
    name: "Heeled Sandals in Nude",
    price: "$129.00",
    image: "/heeled-sandal-gold-new.jpg",
    badge: "New",
    isNew: true,
    category: "sandals",
    subcategory: "heeled",
  },
  {
    id: "wedge-sandals",
    name: "Wedge Sandals in Natural",
    price: "$109.00",
    image: "/strappy-sandal-black-new.jpg",
    category: "sandals",
    subcategory: "wedge",
  },
  {
    id: "designer-slides",
    name: "Designer Slides in Black",
    price: "$89.00",
    originalPrice: "$119.00",
    image: "/designer-sandal-nude-new.jpg",
    badge: "Sale",
    isSale: true,
    category: "sandals",
    subcategory: "slide",
  },
];

export default function AllProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const { addToCart } = useCart();
  const { isB2BMode, getWholesalePrice } = useB2B();

  const filteredProducts = allProducts.filter((product) => {
    if (!searchTerm.trim()) {
      // If no search term, only filter by category
      return selectedCategory === "all" || product.category === selectedCategory;
    }
    
    const searchLower = searchTerm.toLowerCase().trim();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower) ||
      product.subcategory.toLowerCase().includes(searchLower);
    
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
      case "price-high":
        return parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    toast.success(`${product.name} added to cart!`);
  };

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "heels", label: "Heels" },
    { value: "flats", label: "Flats" },
    { value: "boots", label: "Boots" },
    { value: "sneakers", label: "Sneakers" },
    { value: "sandals", label: "Sandals" },
  ];

  const sortOptions = [
    { value: "name", label: "Name A-Z" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">All Products</h1>
          <p className="text-muted-foreground text-lg">
            Discover our complete collection of {allProducts.length} premium shoes
          </p>
          {searchTerm && (
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <p className="text-sm">Searching for: <strong>"{searchTerm}"</strong></p>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products, categories, or styles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {sortedProducts.length} of {allProducts.length} products
            {selectedCategory !== "all" && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  {product.badge && (
                    <Badge 
                      variant={product.isSale ? "destructive" : "secondary"}
                      className="absolute top-2 left-2"
                    >
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold">
                      {isB2BMode ? getWholesalePrice(product.price) : product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                    {isB2BMode && (
                      <Badge variant="outline" className="text-xs">
                        B2B
                      </Badge>
                    )}
                  </div>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              No products found matching your criteria.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
