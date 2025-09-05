import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Package, Clock, Shield } from "lucide-react";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Returns & Exchanges</h1>
            <p className="text-xl text-muted-foreground">
              Easy returns and exchanges within 30 days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <RotateCcw className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">30 Day Returns</h3>
                <p className="text-sm text-muted-foreground">Return any unworn items within 30 days</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Package className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Free Returns</h3>
                <p className="text-sm text-muted-foreground">Free return shipping on all orders</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quick Processing</h3>
                <p className="text-sm text-muted-foreground">Refunds processed within 3-5 business days</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Easy Process</h3>
                <p className="text-sm text-muted-foreground">Simple online return process</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How to Return</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Start Return</h3>
                  <p className="text-sm text-muted-foreground">Log into your account and start a return</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Package Items</h3>
                  <p className="text-sm text-muted-foreground">Pack items in original packaging with return label</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Ship & Refund</h3>
                  <p className="text-sm text-muted-foreground">Drop off at any authorized location</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Return Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• 30-day return window from delivery date</li>
                  <li>• Items must be unworn and in original condition</li>
                  <li>• Original packaging and tags required</li>
                  <li>• Free return shipping provided</li>
                  <li>• Refunds processed within 3-5 business days</li>
                  <li>• Exchanges available for different sizes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Need help with your return? Our customer service team is here to help.
                </p>
                <div className="space-y-2">
                  <a href="mailto:returns@flowstyle.com" className="block text-primary hover:underline">
                    returns@flowstyle.com
                  </a>
                  <a href="tel:+15551234567" className="block text-primary hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
