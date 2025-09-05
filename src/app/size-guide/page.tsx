import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Ruler, Info } from "lucide-react";

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Size Guide</h1>
            <p className="text-xl text-muted-foreground">
              Find your perfect fit with our comprehensive size guide
            </p>
          </div>

          {/* How to Measure */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Ruler className="h-5 w-5 mr-2" />
                How to Measure Your Feet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Step 1: Prepare</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Stand on a hard surface with your heel against a wall</li>
                    <li>• Wear the type of socks you'll wear with your shoes</li>
                    <li>• Measure both feet (they may be different sizes)</li>
                    <li>• Use the larger foot for sizing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Step 2: Measure</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Place a ruler or measuring tape on the floor</li>
                    <li>• Measure from the back of your heel to the tip of your longest toe</li>
                    <li>• Record the measurement in inches or centimeters</li>
                    <li>• Repeat for both feet</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Size Chart */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Women's Shoe Size Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>US Size</TableHead>
                      <TableHead>UK Size</TableHead>
                      <TableHead>EU Size</TableHead>
                      <TableHead>Foot Length (inches)</TableHead>
                      <TableHead>Foot Length (cm)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>35</TableCell>
                      <TableCell>8.5</TableCell>
                      <TableCell>21.6</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>6</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>36</TableCell>
                      <TableCell>9</TableCell>
                      <TableCell>22.9</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>7</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>37</TableCell>
                      <TableCell>9.5</TableCell>
                      <TableCell>24.1</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>8</TableCell>
                      <TableCell>6</TableCell>
                      <TableCell>38</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>25.4</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>9</TableCell>
                      <TableCell>7</TableCell>
                      <TableCell>39</TableCell>
                      <TableCell>10.5</TableCell>
                      <TableCell>26.7</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>10</TableCell>
                      <TableCell>8</TableCell>
                      <TableCell>40</TableCell>
                      <TableCell>11</TableCell>
                      <TableCell>27.9</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>11</TableCell>
                      <TableCell>9</TableCell>
                      <TableCell>41</TableCell>
                      <TableCell>11.5</TableCell>
                      <TableCell>29.2</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="h-5 w-5 mr-2" />
                Sizing Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">For Heels</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Size up if you're between sizes</li>
                    <li>• Consider heel height for comfort</li>
                    <li>• Check toe box width</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">For Flats</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• True to size usually works</li>
                    <li>• Consider foot width</li>
                    <li>• Check for arch support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">For Boots</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Consider sock thickness</li>
                    <li>• Check calf width for tall boots</li>
                    <li>• Size up for comfort</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">For Sandals</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• True to size recommended</li>
                    <li>• Check strap adjustability</li>
                    <li>• Consider foot width</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Still Not Sure?</h3>
              <p className="text-muted-foreground mb-6">
                Our customer service team is here to help you find the perfect fit. 
                Contact us with your measurements and we'll recommend the best size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:support@flowstyle.com" className="text-primary hover:underline">
                  support@flowstyle.com
                </a>
                <span className="hidden sm:block">•</span>
                <a href="tel:+15551234567" className="text-primary hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
