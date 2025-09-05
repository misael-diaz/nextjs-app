import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart, Briefcase, Star } from "lucide-react";
import Link from "next/link";

const jobOpenings = [
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our engineering team to build beautiful, responsive web experiences for our customers.",
    requirements: ["React/Next.js", "TypeScript", "Tailwind CSS", "E-commerce experience"],
    posted: "2024-01-15"
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    description: "Shape the user experience of our digital products and help customers find their perfect shoes.",
    requirements: ["Figma", "User research", "Prototyping", "E-commerce UX"],
    posted: "2024-01-10"
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    experience: "4-6 years",
    description: "Lead our marketing initiatives and help grow the FlowStyle brand across digital channels.",
    requirements: ["Digital marketing", "Analytics", "Brand management", "Team leadership"],
    posted: "2024-01-08"
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: Briefcase,
    title: "Professional Growth",
    description: "Learning budget, conference attendance, and career development opportunities"
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Collaborative environment with passionate people who love fashion and technology"
  },
  {
    icon: Star,
    title: "Perks & Benefits",
    description: "Employee discounts, flexible PTO, remote work options, and company events"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join the FlowStyle Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building the future of fashion retail. Join us in creating amazing experiences 
            for customers who love great shoes and great service.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline">{job.type}</Badge>
                        <Badge variant="outline">{job.experience}</Badge>
                      </div>
                    </div>
                    <Button className="mt-4 sm:mt-0" asChild>
                      <Link href={`/careers/${job.id}`}>Apply Now</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Posted on {new Date(job.posted).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            At FlowStyle, we believe that great products come from great people. We foster a culture 
            of innovation, collaboration, and inclusivity where everyone can thrive and make an impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">We're always looking for new ways to improve the customer experience</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">Great ideas come from working together across teams and disciplines</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Growth</h3>
              <p className="text-muted-foreground">We invest in our people and help them reach their full potential</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
