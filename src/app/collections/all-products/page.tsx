"use client";

import { useState, useEffect, useMemo } from "react";
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
  colors?: string[];
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
    colors: ["Black"],
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
    colors: ["Nude"],
  },
  {
    id: "platform-heel-black",
    name: "Platform Heels in Black",
    price: "$178.00",
    image: "/platform-heel-black.jpg",
    category: "heels",
    subcategory: "platform",
    colors: ["Black"],
  },
  
  // Flats
  {
    id: "ballet-flat-black",
    name: "Classic Ballet Flats in Black Leather",
    price: "$98.00",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center",
    category: "flats",
    subcategory: "ballet-flats",
    colors: ["Black"],
  },
  {
    id: "ballet-flat-nude",
    name: "Classic Ballet Flats in Nude Leather",
    price: "$98.00",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center&sat=-30&brightness=1.2",
    category: "flats",
    subcategory: "ballet-flats",
    colors: ["Nude"],
  },
  {
    id: "ballet-flat-red",
    name: "Classic Ballet Flats in Red Leather",
    price: "$98.00",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center&hue=0&sat=100",
    category: "flats",
    subcategory: "ballet-flats",
    colors: ["Red"],
  },
  {
    id: "ballet-flat-navy",
    name: "Classic Ballet Flats in Navy Leather",
    price: "$98.00",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center&hue=240&sat=80",
    category: "flats",
    subcategory: "ballet-flats",
    colors: ["Navy"],
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
    colors: ["Black"],
  },
  {
    id: "comfort-oxfords",
    name: "Comfort Oxfords in Brown",
    price: "$128.00",
    image: "/comfort-oxfords-brown.jpg",
    category: "flats",
    subcategory: "oxfords",
    colors: ["Brown"],
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
    colors: ["Black"],
  },
  
  // Boots
  {
    id: "stevie-knee-high-suede-black",
    name: "Stevie Knee-High Boots in Black Suede",
    price: "$198.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    category: "boots",
    subcategory: "knee-high",
    colors: ["Black"],
  },
  {
    id: "stevie-knee-high-suede-brown",
    name: "Stevie Knee-High Boots in Brown Suede",
    price: "$198.00",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center",
    category: "boots",
    subcategory: "knee-high",
    colors: ["Brown"],
  },
  {
    id: "stevie-knee-high-suede-tan",
    name: "Stevie Knee-High Boots in Tan Suede",
    price: "$198.00",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center&sat=-50",
    category: "boots",
    subcategory: "knee-high",
    colors: ["Tan"],
  },
  {
    id: "stevie-ankle-leopard",
    name: "Stevie Ankle Boots in Leopard",
    price: "$178.00",
    image: "/stevie-ankle-leopard.jpg",
    category: "boots",
    subcategory: "ankle",
    colors: ["Brown"],
  },
  {
    id: "stevie-ankle-stretch",
    name: "Stevie Ankle Boots in Stretch",
    price: "$168.00",
    image: "/stevie-ankle-stretch.jpg",
    category: "boots",
    subcategory: "ankle",
    colors: ["Black"],
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
    colors: ["Black"],
  },
  
  // Sneakers
  {
    id: "canvas-sneaker-white",
    name: "Canvas Sneakers in White",
    price: "$88.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center&brightness=1.5&contrast=1.2",
    category: "sneakers",
    subcategory: "canvas",
    colors: ["White"],
  },
  {
    id: "canvas-sneaker-black",
    name: "Canvas Sneakers in Black",
    price: "$88.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center&brightness=0.3&contrast=1.5",
    category: "sneakers",
    subcategory: "canvas",
    colors: ["Black"],
  },
  {
    id: "canvas-sneaker-navy",
    name: "Canvas Sneakers in Navy",
    price: "$88.00",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center&hue=240&sat=60&brightness=0.7",
    category: "sneakers",
    subcategory: "canvas",
    colors: ["Navy"],
  },
  
  // Sandals
  {
    id: "leather-sandal-brown",
    name: "Leather Strappy Sandals in Brown",
    price: "$128.00",
    image: "/leather-sandal-brown.jpg",
    category: "sandals",
    subcategory: "strappy",
    colors: ["Brown"],
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
    colors: ["White"],
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
    colors: ["Tan"],
  },
  {
    id: "heeled-sandals",
    name: "Heeled Sandals in Gold",
    price: "$129.00",
    image: "/heeled-sandal-gold-new.jpg",
    badge: "New",
    isNew: true,
    category: "sandals",
    subcategory: "heeled",
    colors: ["Gold"],
  },
  {
    id: "wedge-sandals",
    name: "Wedge Sandals in Natural",
    price: "$109.00",
    image: "/strappy-sandal-black-new.jpg",
    category: "sandals",
    subcategory: "wedge",
    colors: ["Black"],
  },
  {
    id: "designer-slides",
    name: "Designer Slides in Nude",
    price: "$89.00",
    originalPrice: "$119.00",
    image: "/designer-sandal-nude-new.jpg",
    badge: "Sale",
    isSale: true,
    category: "sandals",
    subcategory: "slide",
    colors: ["Nude"],
  },
];

export default function AllProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const { addToCart } = useCart();
  const { isB2BMode, getWholesalePrice } = useB2B();

  // Handle search submission
  const handleSearch = () => {
    setActiveSearchTerm(searchTerm);
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (!activeSearchTerm.trim()) {
        // If no search term, filter by category and color
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesColor = selectedColor === "all" || (product.colors && product.colors.includes(selectedColor));
        return matchesCategory && matchesColor;
      }
      
      const searchLower = activeSearchTerm.toLowerCase().trim();
      const matchesSearch = 
        product.name.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.subcategory.toLowerCase().includes(searchLower);
      
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesColor = selectedColor === "all" || (product.colors && product.colors.includes(selectedColor));
      
      return matchesSearch && matchesCategory && matchesColor;
    });
  }, [activeSearchTerm, selectedCategory, selectedColor]);

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

  // Extract unique colors from all products
  const availableColors = useMemo(() => {
    const colorSet = new Set<string>();
    allProducts.forEach(product => {
      if (product.colors) {
        product.colors.forEach(color => colorSet.add(color));
      }
    });
    return Array.from(colorSet).sort();
  }, []);

  const colorOptions = [
    { value: "all", label: "All Colors" },
    ...availableColors.map(color => ({ value: color, label: color }))
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
          {activeSearchTerm && (
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <p className="text-sm">Searching for: <strong>"{activeSearchTerm}"</strong></p>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products, categories, or styles... (Press Enter to search)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10 pr-20"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveSearchTerm("");
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </button>
                )}
                <Button
                  onClick={handleSearch}
                  size="sm"
                  className="h-6 px-2 text-xs"
                >
                  Search
                </Button>
              </div>
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
            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Color" />
              </SelectTrigger>
              <SelectContent>
                {colorOptions.map((color) => (
                  <SelectItem key={color.value} value={color.value}>
                    {color.label}
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
            {selectedColor !== "all" && ` in ${selectedColor}`}
            {activeSearchTerm && ` matching "${activeSearchTerm}"`}
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
                setActiveSearchTerm("");
                setSelectedCategory("all");
                setSelectedColor("all");
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
