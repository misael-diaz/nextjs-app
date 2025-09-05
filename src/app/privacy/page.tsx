import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 15, 2024</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    make a purchase, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Name, email address, and contact information</li>
                    <li>Shipping and billing addresses</li>
                    <li>Payment information (processed securely)</li>
                    <li>Account preferences and purchase history</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to provide, maintain, and improve our services.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Process and fulfill your orders</li>
                    <li>Provide customer support</li>
                    <li>Send you updates about your orders</li>
                    <li>Improve our website and services</li>
                    <li>Send marketing communications (with your consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    You have the right to access, update, or delete your personal information.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your account and data</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p>Email: privacy@flowstyle.com</p>
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
