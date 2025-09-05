import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle, Clock, Eye } from "lucide-react";
import Link from "next/link";

// Mock order data - in a real app this would come from an API
const mockOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "delivered",
    total: "$198.00",
    items: [
      {
        id: "classic-heel-black",
        name: "Classic Pointed Toe Heels in Black Leather",
        quantity: 1,
        price: "$198.00",
        image: "/classic-heel-black-fixed.jpg"
      }
    ],
    trackingNumber: "TRK123456789",
    estimatedDelivery: "2024-01-18"
  },
  {
    id: "ORD-2024-002", 
    date: "2024-01-10",
    status: "shipped",
    total: "$256.00",
    items: [
      {
        id: "ballet-flat-black",
        name: "Classic Ballet Flats in Black Leather",
        quantity: 1,
        price: "$98.00",
        image: "/ballet-flat-black-fixed.jpg"
      },
      {
        id: "leather-sandal-brown",
        name: "Leather Strappy Sandals in Brown",
        quantity: 1,
        price: "$128.00",
        image: "/leather-sandal-brown.jpg"
      }
    ],
    trackingNumber: "TRK987654321",
    estimatedDelivery: "2024-01-20"
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-05",
    status: "processing",
    total: "$178.00",
    items: [
      {
        id: "stevie-knee-high-suede",
        name: "Stevie Knee-High Boots in Suede",
        quantity: 1,
        price: "$178.00",
        image: "/stevie-knee-high-suede.jpg"
      }
    ],
    trackingNumber: null,
    estimatedDelivery: "2024-01-25"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "shipped":
      return <Truck className="h-5 w-5 text-blue-500" />;
    case "processing":
      return <Clock className="h-5 w-5 text-yellow-500" />;
    default:
      return <Package className="h-5 w-5 text-gray-500" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "delivered":
      return <Badge variant="default" className="bg-green-500">Delivered</Badge>;
    case "shipped":
      return <Badge variant="default" className="bg-blue-500">Shipped</Badge>;
    case "processing":
      return <Badge variant="secondary">Processing</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Order History</h1>
          <p className="text-muted-foreground text-lg">
            Track your orders and view your purchase history
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {mockOrders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(order.status)}
                    <div>
                      <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                      <p className="text-muted-foreground text-sm">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{order.total}</p>
                    {getStatusBadge(order.status)}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Items Ordered</h4>
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                        <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium">{item.name}</h5>
                          <p className="text-sm text-muted-foreground">
                            Quantity: {item.quantity} • {item.price}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/products/${item.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <h5 className="font-semibold mb-2">Shipping Information</h5>
                    <p className="text-sm text-muted-foreground">
                      {order.trackingNumber ? (
                        <>Tracking: {order.trackingNumber}</>
                      ) : (
                        "Tracking number will be provided when shipped"
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Estimated delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline" asChild>
                      <Link href={`/orders/${order.id}`}>
                        View Order Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {mockOrders.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
              <p className="text-muted-foreground mb-6">
                Start shopping to see your orders here
              </p>
              <Button asChild>
                <Link href="/collections">
                  Start Shopping
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
