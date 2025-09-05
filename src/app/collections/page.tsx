"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    id: "heels",
    name: "Heels",
    description: "Step into confidence with our elegant heels collection",
    image: "/classic-heel-black.jpg",
    productCount: "3 products",
    href: "/collections/heels",
    featured: true,
  },
  {
    id: "flats",
    name: "Flats",
    description: "Comfort meets style in our collection of elegant flats",
    image: "/ballet-flat-black.jpg",
    productCount: "4 products",
    href: "/collections/flats",
  },
  {
    id: "boots",
    name: "Boots",
    description: "Premium boots for every season and occasion",
    image: "/stevie-knee-high-suede.jpg",
    productCount: "4 products",
    href: "/collections/boots",
  },
  {
    id: "sneakers",
    name: "Sneakers",
    description: "Comfort and style combined in our sneaker collection",
    image: "/canvas-sneaker-white-new.jpg",
    productCount: "1 product",
    href: "/collections/sneakers",
  },
  {
    id: "sandals",
    name: "Sandals",
    description: "Step into summer with our stylish sandal collection",
    image: "/slide-sandal-white-new.jpg",
    productCount: "6 products",
    href: "/collections/sandals",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Collections</h1>
            <p className="text-xl text-primary-foreground/90">
              Discover our curated collections of women's shoes, each designed with comfort, 
              style, and exceptional craftsmanship for every step of your journey.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground">Collections</span>
          </div>
        </nav>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card key={collection.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {collection.featured && (
                  <Badge className="absolute top-4 left-4">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                    <p className="text-muted-foreground mb-3">
                      {collection.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {collection.productCount}
                    </p>
                  </div>

                  <Button asChild className="w-full group">
                    <Link href={collection.href} className="flex items-center justify-center gap-2">
                      Shop {collection.name}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-muted-foreground mb-8">
              Browse our complete catalog or get in touch with our style experts for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/collections/all-products">
                  View All Products
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
