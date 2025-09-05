import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Download, Mail } from "lucide-react";
import Link from "next/link";

const pressReleases = [
  {
    id: "series-a-funding",
    title: "FlowStyle Raises $15M Series A to Expand Digital-First Shoe Retail",
    date: "2024-01-15",
    summary: "Company plans to use funding to enhance technology platform and expand product offerings",
    category: "Funding"
  },
  {
    id: "sustainability-initiative",
    title: "FlowStyle Launches Sustainable Fashion Initiative",
    date: "2024-01-10",
    summary: "New program focuses on eco-friendly materials and carbon-neutral shipping",
    category: "Sustainability"
  },
  {
    id: "partnership-announcement",
    title: "FlowStyle Partners with Top Designers for Exclusive Collection",
    date: "2024-01-05",
    summary: "Collaboration brings limited-edition designs from renowned fashion houses",
    category: "Partnerships"
  }
];

const mediaCoverage = [
  {
    title: "FlowStyle Revolutionizes Online Shoe Shopping",
    outlet: "Fashion Weekly",
    date: "2024-01-12",
    url: "#"
  },
  {
    title: "The Future of E-commerce: FlowStyle's Approach",
    outlet: "TechCrunch",
    date: "2024-01-08",
    url: "#"
  },
  {
    title: "Sustainable Fashion Gets a Tech Upgrade",
    outlet: "Vogue Business",
    date: "2024-01-03",
    url: "#"
  }
];

const teamMembers = [
  {
    name: "Sarah Chen",
    title: "CEO & Co-founder",
    bio: "Former VP of Product at major e-commerce platform, passionate about fashion technology",
    email: "sarah@flowstyle.com"
  },
  {
    name: "Marcus Rodriguez",
    title: "CTO & Co-founder", 
    bio: "Tech veteran with 15+ years building scalable e-commerce platforms",
    email: "marcus@flowstyle.com"
  },
  {
    name: "Emily Watson",
    title: "Head of Design",
    bio: "Award-winning designer with expertise in user experience and brand development",
    email: "emily@flowstyle.com"
  }
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and media coverage about FlowStyle.
          </p>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{release.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(release.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{release.title}</CardTitle>
                      <p className="text-muted-foreground">{release.summary}</p>
                    </div>
                    <Button variant="outline" className="mt-4 sm:mt-0" asChild>
                      <Link href={`/press/${release.id}`}>
                        Read More
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Media Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaCoverage.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{article.outlet}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={article.url}>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Press Kit */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Press Kit</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Company Assets</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Company Logo Pack
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Product Images
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Brand Guidelines
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Company Fact Sheet
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>press@flowstyle.com</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For media inquiries, interview requests, or press kit access, 
                      please contact our press team.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
