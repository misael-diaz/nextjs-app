import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/5 to-background text-foreground relative overflow-hidden">
      {/* Fun Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/2 w-48 h-48 bg-primary/25 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-3/4 right-1/3 w-32 h-32 bg-secondary/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-bounce"></div>
      </div>
      
      <Header />
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 rounded-3xl blur-3xl animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-background/90 via-background/80 to-background/90 backdrop-blur-md rounded-3xl p-12 border-2 border-primary/20 shadow-2xl">
            <Badge variant="secondary" className="mb-6 animate-bounce text-lg px-4 py-2">
              ✨ About FlowStyle ✨
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent animate-pulse">
              Where Style Meets
              <br />
              <span className="text-primary drop-shadow-lg">Comfort</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At FlowStyle, we believe that every step should be a statement. Our curated collection 
              of women's shoes combines timeless elegance with modern comfort, designed for the 
              confident woman who values both style and substance.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're dedicated to providing women with footwear that doesn't compromise on comfort 
              or style. Every shoe in our collection is carefully selected to ensure it meets our 
              high standards for quality, design, and wearability.
            </p>
            <p className="text-lg text-muted-foreground">
              From boardroom meetings to weekend adventures, our shoes are designed to take you 
              anywhere with confidence and grace.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Quality</h3>
                <p className="text-sm text-muted-foreground">Premium materials</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Style</h3>
                <p className="text-sm text-muted-foreground">Timeless design</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Comfort</h3>
                <p className="text-sm text-muted-foreground">All-day wear</p>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Versatility</h3>
                <p className="text-sm text-muted-foreground">Every occasion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Passion for Fashion</h3>
                <p className="text-muted-foreground">
                  We're passionate about bringing you the latest trends while maintaining 
                  classic elegance that never goes out of style.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  Every shoe is crafted with attention to detail, using premium materials 
                  that ensure durability and comfort.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We're here to help you find the 
                  perfect pair for every occasion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            FlowStyle was born from a simple belief: that women shouldn't have to choose between 
            style and comfort. Founded by a team of fashion enthusiasts and comfort advocates, 
            we've curated a collection that celebrates the modern woman's diverse lifestyle.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6">
            Whether you're stepping into the office, heading to a special event, or simply 
            enjoying a day out, FlowStyle has the perfect pair to complement your journey.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
