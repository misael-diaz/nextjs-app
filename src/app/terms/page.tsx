import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 15, 2024</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using FlowStyle's website and services, you accept and agree to be bound 
                    by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Use License</h2>
                  <p className="text-muted-foreground mb-4">
                    Permission is granted to temporarily download one copy of the materials on FlowStyle's website 
                    for personal, non-commercial transitory viewing only.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>This is the grant of a license, not a transfer of title</li>
                    <li>You may not modify or copy the materials</li>
                    <li>You may not use the materials for any commercial purpose</li>
                    <li>You may not attempt to reverse engineer any software</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
                  <p className="text-muted-foreground">
                    We strive to provide accurate product information, but we do not warrant that product 
                    descriptions or other content is accurate, complete, reliable, or error-free.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Pricing and Payment</h2>
                  <p className="text-muted-foreground mb-4">
                    All prices are subject to change without notice. Payment must be received before order processing.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>We accept major credit cards and PayPal</li>
                    <li>All transactions are processed securely</li>
                    <li>Prices do not include applicable taxes</li>
                    <li>We reserve the right to refuse any order</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Returns and Refunds</h2>
                  <p className="text-muted-foreground">
                    Returns are accepted within 30 days of delivery. Items must be in original condition 
                    with tags attached. Refunds will be processed within 3-5 business days.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    In no event shall FlowStyle or its suppliers be liable for any damages arising out of 
                    the use or inability to use the materials on FlowStyle's website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                  <p className="text-muted-foreground">
                    These terms and conditions are governed by and construed in accordance with the laws 
                    of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that state.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p>Email: legal@flowstyle.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Fashion Avenue, New York, NY 10001</p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
