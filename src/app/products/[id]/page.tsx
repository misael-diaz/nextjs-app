"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingBag, Share2, Truck, RotateCcw, Shield } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useB2B } from '@/contexts/B2BContext';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Product data with real J.Crew information
const products = {
  'stevie-knee-high-suede': {
    id: 'stevie-knee-high-suede',
    name: 'New Stevie Knee-high Boots in Suede',
    price: '$348.00',
    originalPrice: null,
    image: '/stevie-knee-high-suede.jpg',
    images: ['/stevie-knee-high-suede.jpg', '/boot2.jpg', '/boot3.jpg', '/boot4.jpg'],
    category: 'Boots',
    subcategory: 'Knee-high',
    description: 'These elegant knee-high boots are crafted from soft suede, featuring a sleek design suitable for various occasions. The timeless silhouette pairs perfectly with dresses, skirts, and skinny jeans.',
    features: [
      'Premium suede upper',
      'Knee-high silhouette',
      'Comfortable heel height',
      'Versatile styling options',
      'Crafted for durability'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['Black', 'Brown', 'Tan'],
    inStock: true,
    isNew: true,
    badge: 'New'
  },
  'stevie-ankle-leopard': {
    id: 'stevie-ankle-leopard',
    name: 'New Stevie Ankle Boots in Leopard-print Calf Hair',
    price: '$199.50',
    originalPrice: '$268.00',
    image: '/stevie-ankle-leopard.jpg',
    images: ['/stevie-ankle-leopard.jpg', '/boot1.jpg', '/boot3.jpg', '/boot4.jpg'],
    category: 'Boots',
    subcategory: 'Ankle',
    description: 'Make a statement with these ankle boots featuring a bold leopard-print calf hair upper, perfect for adding a touch of flair to any outfit. The animal print adds instant sophistication to your look.',
    features: [
      'Leopard-print calf hair upper',
      'Ankle boot silhouette',
      'Statement-making design',
      'Comfortable fit',
      'Versatile styling'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'],
    colors: ['Leopard Print'],
    inStock: true,
    isNew: true,
    badge: 'Sale'
  },
  'stevie-ankle-stretch': {
    id: 'stevie-ankle-stretch',
    name: 'New Stevie Ankle Boots in Stretch Leather',
    price: '$224.50',
    originalPrice: '$298.00',
    image: '/stevie-ankle-stretch.jpg',
    images: ['/stevie-ankle-stretch.jpg', '/boot1.jpg', '/boot2.jpg', '/boot4.jpg'],
    category: 'Boots',
    subcategory: 'Ankle',
    description: 'These ankle boots offer a snug fit with their stretch leather design, combining comfort with a chic aesthetic. Perfect for all-day wear with a modern, streamlined look.',
    features: [
      'Stretch leather upper',
      'Snug, comfortable fit',
      'Modern silhouette',
      'All-day comfort',
      'Chic aesthetic'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5'],
    colors: ['Black', 'Brown'],
    inStock: true,
    isNew: true,
    badge: 'Sale'
  },
  'classic-heel-black': {
    id: 'classic-heel-black',
    name: 'Classic Pointed Toe Heels in Black Leather',
    price: '$198.00',
    originalPrice: null,
    image: '/classic-heel-black.jpg',
    images: ['/classic-heel-black.jpg', '/heel2.jpg', '/heel3.jpg', '/heel4.jpg'],
    category: 'Heels',
    subcategory: 'Stilettos',
    description: 'Timeless elegance meets modern comfort in these classic pointed toe heels. Crafted from premium black leather with a sophisticated silhouette that elevates any outfit.',
    features: [
      'Premium black leather',
      'Pointed toe design',
      'Classic heel height',
      'Sophisticated silhouette',
      'Versatile styling'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['Black', 'Nude', 'Red'],
    inStock: true,
    isNew: false,
    badge: null
  },
  'block-heel-nude': {
    id: 'block-heel-nude',
    name: 'Comfort Block Heels in Nude Suede',
    price: '$168.00',
    originalPrice: null,
    image: '/block-heel-nude-new.jpg',
    images: ['/block-heel-nude-new.jpg', '/heel1.jpg', '/heel3.jpg', '/heel4.jpg'],
    category: 'Heels',
    subcategory: 'Block Heels',
    description: 'Step into comfort with these block heels featuring a stable, walkable heel and soft nude suede upper. Perfect for all-day wear without sacrificing style.',
    features: [
      'Stable block heel',
      'Nude suede upper',
      'All-day comfort',
      'Walkable design',
      'Neutral colorway'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5'],
    colors: ['Nude', 'Black', 'Tan'],
    inStock: true,
    isNew: false,
    badge: null
  },
  'ballet-flat-black': {
    id: 'ballet-flat-black',
    name: 'Classic Ballet Flats in Black Leather',
    price: '$98.00',
    originalPrice: null,
    image: '/ballet-flat-black.jpg',
    images: ['/ballet-flat-black.jpg', '/flat2.jpg', '/flat3.jpg', '/flat4.jpg'],
    category: 'Flats',
    subcategory: 'Ballet Flats',
    description: 'The perfect everyday flat that combines comfort and style. These classic ballet flats feature a soft leather upper and flexible sole for all-day comfort.',
    features: [
      'Soft leather upper',
      'Flexible sole',
      'All-day comfort',
      'Classic silhouette',
      'Versatile styling'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['Black', 'Nude', 'Red', 'Navy'],
    inStock: true,
    isNew: false,
    badge: null
  },
  'canvas-sneaker-white': {
    id: 'canvas-sneaker-white',
    name: 'Classic Canvas Sneakers in White',
    price: '$78.00',
    originalPrice: null,
    image: '/canvas-sneaker-white-new.jpg',
    images: ['/canvas-sneaker-white-new.jpg', '/sneaker2.jpg', '/sneaker3.jpg', '/sneaker4.jpg'],
    category: 'Sneakers',
    subcategory: 'Canvas',
    description: 'Clean, classic style meets everyday comfort in these white canvas sneakers. Perfect for casual outings, weekend adventures, or adding a sporty touch to any outfit.',
    features: [
      'Premium canvas upper',
      'Rubber sole',
      'Classic white design',
      'Comfortable fit',
      'Versatile styling'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['White', 'Black', 'Navy'],
    inStock: true,
    isNew: false,
    badge: null
  },
  'leather-sandal-brown': {
    id: 'leather-sandal-brown',
    name: 'Leather Strappy Sandals in Brown',
    price: '$128.00',
    originalPrice: null,
    image: '/leather-sandal-brown.jpg',
    images: ['/leather-sandal-brown.jpg', '/sandal2.jpg', '/sandal3.jpg', '/sandal4.jpg'],
    category: 'Sandals',
    subcategory: 'Strappy',
    description: 'Effortlessly chic strappy sandals crafted from supple brown leather. The elegant design features multiple straps for a sophisticated look perfect for warm weather.',
    features: [
      'Supple brown leather',
      'Multiple strap design',
      'Comfortable sole',
      'Sophisticated look',
      'Warm weather perfect'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5'],
    colors: ['Brown', 'Black', 'Tan'],
    inStock: true,
    isNew: false,
    badge: null
  },
  'mesh-mary-jane-flats': {
    id: 'mesh-mary-jane-flats',
    name: 'Mesh Mary Jane Flats',
    price: '$64.50',
    originalPrice: '$128.00',
    image: '/mesh-mary-jane-flats.jpg',
    images: ['/mesh-mary-jane-flats.jpg', '/flat2.jpg', '/flat3.jpg', '/flat4.jpg'],
    category: 'Flats',
    subcategory: 'Mary Jane',
    description: 'Delicate mesh flats with a classic Mary Jane strap, blending elegance and comfort. Perfect for both casual and dressy occasions.',
    features: [
      'Delicate mesh upper',
      'Classic Mary Jane strap',
      'Comfortable sole',
      'Versatile styling',
      'Elegant design'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['Black', 'Nude', 'White'],
    inStock: true,
    isNew: false,
    badge: 'Sale'
  },
  'three-strap-slide-sandals': {
    id: 'three-strap-slide-sandals',
    name: 'Three-Strap Slide Sandals',
    price: '$64.50',
    originalPrice: '$108.00',
    image: '/three-strap-slide-sandals.jpg',
    images: ['/three-strap-slide-sandals.jpg', '/sandal2.jpg', '/sandal3.jpg', '/sandal4.jpg'],
    category: 'Sandals',
    subcategory: 'Slide',
    description: 'Stylish slide sandals with three straps, combining comfort and fashion. Easy to slip on and perfect for warm weather.',
    features: [
      'Three-strap design',
      'Slide-on style',
      'Comfortable sole',
      'Easy to wear',
      'Summer perfect'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5'],
    colors: ['Black', 'Brown', 'Tan'],
    inStock: true,
    isNew: false,
    badge: 'Sale'
  },
  'fisherman-wedge-sandals': {
    id: 'fisherman-wedge-sandals',
    name: 'Fisherman Flat-Form Wedges',
    price: '$56.50',
    originalPrice: '$128.00',
    image: '/fisherman-wedge-sandals.jpg',
    images: ['/fisherman-wedge-sandals.jpg', '/sandal2.jpg', '/sandal3.jpg', '/sandal4.jpg'],
    category: 'Sandals',
    subcategory: 'Wedge',
    description: 'Trendy flat-form wedges inspired by classic fisherman sandals, offering a modern twist with comfort and style.',
    features: [
      'Flat-form wedge sole',
      'Fisherman-inspired design',
      'Comfortable height',
      'Modern twist',
      'Versatile styling'
    ],
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5'],
    colors: ['Natural', 'Black', 'Brown'],
    inStock: true,
    isNew: false,
    badge: 'Sale'
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const { dispatch } = useCart();
  const { isB2BMode, getWholesalePrice } = useB2B();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: `${product.id}-${selectedSize}-${selectedColor}`,
        name: `${product.name} - ${selectedSize} - ${selectedColor}`,
        price: isB2BMode ? getWholesalePrice(product.price) : product.price,
        image: product.image,
        quantity: quantity
      }
    });
    
    toast.success(`${product.name} added to cart!`);
  };

  const displayPrice = isB2BMode ? getWholesalePrice(product.price) : product.price;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg border">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <Badge 
                  variant={product.isNew ? "default" : "destructive"}
                  className="absolute top-4 left-4"
                >
                  {product.badge}
                </Badge>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden rounded-md border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-muted'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">
                    {displayPrice}
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
                {isB2BMode && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Business Pricing
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className="h-10"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-lg font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <div>
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Free Shipping</p>
                      <p className="text-sm text-muted-foreground">On orders over $100</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Easy Returns</p>
                      <p className="text-sm text-muted-foreground">30-day return policy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Secure Checkout</p>
                      <p className="text-sm text-muted-foreground">Your data is protected</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
