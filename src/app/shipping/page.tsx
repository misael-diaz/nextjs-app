import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, MapPin, Package, Shield } from "lucide-react";

const shippingOptions = [
  {
    name: "Standard Shipping",
    price: "Free",
    delivery: "5-7 business days",
    description: "Free shipping on all orders over $75"
  },
  {
    name: "Express Shipping",
    price: "$9.99",
    delivery: "2-3 business days",
    description: "Fast delivery for urgent needs"
  },
  {
    name: "Overnight Shipping",
    price: "$19.99",
    delivery: "1 business day",
    description: "Next business day delivery"
  }
];

const shippingInfo = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $75 within the continental US"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Orders ship within 1-2 business days"
  },
  {
    icon: MapPin,
    title: "Worldwide Delivery",
    description: "We ship to over 50 countries worldwide"
  },
  {
    icon: Shield,
    title: "Secure Packaging",
    description: "Your shoes are carefully packaged and insured"
  }
];

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
            <p className="text-xl text-muted-foreground">
              Fast, reliable shipping to get your shoes to you quickly and safely
            </p>
          </div>

          {/* Shipping Options */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Shipping Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shippingOptions.map((option, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-xl">{option.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{option.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <Badge variant="secondary">{option.delivery}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Shipping Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Why Choose FlowStyle Shipping</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shippingInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                      <p className="text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Shipping Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Domestic Shipping (US)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Free shipping on orders over $75</li>
                  <li>• Standard shipping: 5-7 business days</li>
                  <li>• Express shipping: 2-3 business days</li>
                  <li>• Overnight shipping: 1 business day</li>
                  <li>• All orders include tracking</li>
                  <li>• Signature required for orders over $200</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Shipping to over 50 countries</li>
                  <li>• Delivery time: 7-14 business days</li>
                  <li>• Customs duties may apply</li>
                  <li>• All international orders tracked</li>
                  <li>• Free returns within 30 days</li>
                  <li>• Customer responsible for duties</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tracking */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Track Your Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">How to Track</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>1. Check your email for tracking number</li>
                    <li>2. Visit our tracking page</li>
                    <li>3. Enter your tracking number</li>
                    <li>4. Get real-time updates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Need Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    Can't find your tracking information? Contact our customer service team.
                  </p>
                  <div className="space-y-2">
                    <a href="mailto:support@flowstyle.com" className="block text-primary hover:underline">
                      support@flowstyle.com
                    </a>
                    <a href="tel:+15551234567" className="block text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Shipping FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">When will my order ship?</h3>
                  <p className="text-muted-foreground">
                    Most orders ship within 1-2 business days. You'll receive a tracking number via email once your order ships.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can I change my shipping address?</h3>
                  <p className="text-muted-foreground">
                    You can change your shipping address before your order ships. Contact us immediately if your order has already shipped.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What if my package is damaged?</h3>
                  <p className="text-muted-foreground">
                    We carefully package all orders, but if your package arrives damaged, contact us immediately for a replacement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you ship to PO boxes?</h3>
                  <p className="text-muted-foreground">
                    Yes, we ship to PO boxes using standard shipping methods. Express and overnight shipping may not be available to PO boxes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
