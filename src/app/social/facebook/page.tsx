import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageCircle, Share, MoreHorizontal, UserPlus, MapPin, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    content: "We're excited to announce our new sustainable collection! 🌱 Every pair is made with eco-friendly materials and carbon-neutral shipping. Join us in making fashion more sustainable!",
    image: "/stevie-knee-high-suede.jpg",
    likes: 234,
    comments: 45,
    shares: 12,
    time: "3 hours ago"
  },
  {
    id: 2,
    content: "Happy Friday! What's your go-to shoe for the weekend? We're loving our new collection of comfortable flats for those long city walks. Share your favorite style in the comments! 👟✨",
    image: "/ballet-flat-black-fixed.jpg",
    likes: 189,
    comments: 67,
    shares: 8,
    time: "1 day ago"
  },
  {
    id: 3,
    content: "Behind the scenes at FlowStyle! Our design team is working on some amazing new styles for spring. Can't wait to share them with you! What colors are you most excited about for spring? 🌸",
    image: "/classic-heel-black-fixed.jpg",
    likes: 156,
    comments: 23,
    shares: 5,
    time: "2 days ago"
  }
];

const pageInfo = {
  name: "FlowStyle",
  category: "Clothing (Brand)",
  followers: "12,847 followers",
  location: "New York, New York",
  website: "flowstyle.com",
  description: "✨ Where fashion flows ✨ Premium women's shoes for every step of your journey. Comfort, style, and modern fashion combined.",
  verified: true
};

export default function FacebookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Facebook Page Header */}
          <Card className="mb-6">
            <div className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end space-x-4">
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600">FS</span>
                  </div>
                  <div className="flex-1 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <h1 className="text-3xl font-bold">{pageInfo.name}</h1>
                      {pageInfo.verified && (
                        <Badge className="bg-blue-500">Verified</Badge>
                      )}
                    </div>
                    <p className="text-blue-100 mb-2">{pageInfo.category}</p>
                    <div className="flex items-center space-x-4 text-sm text-blue-100">
                      <span>{pageInfo.followers}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {pageInfo.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Globe className="h-4 w-4 mr-1" />
                        {pageInfo.website}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">{pageInfo.description}</p>
              <div className="flex space-x-2">
                <Button className="flex-1">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Like Page
                </Button>
                <Button variant="outline" className="flex-1">
                  Follow
                </Button>
                <Button variant="outline">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">FS</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">FlowStyle</h3>
                        {pageInfo.verified && (
                          <Badge variant="secondary" className="text-xs">Verified</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{post.time}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{post.content}</p>
                  {post.image && (
                    <div className="relative h-64 bg-muted rounded-lg mb-4">
                      <Image
                        src={post.image}
                        alt="FlowStyle post"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-4">
                      <span>{post.likes} likes</span>
                      <span>{post.comments} comments</span>
                      <span>{post.shares} shares</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 border-t pt-3">
                    <Button variant="ghost" className="flex-1">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Like
                    </Button>
                    <Button variant="ghost" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Comment
                    </Button>
                    <Button variant="ghost" className="flex-1">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Facebook-like Footer */}
          <div className="text-center mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Connect with FlowStyle on Facebook</h3>
            <p className="text-muted-foreground mb-4">
              Get updates, exclusive offers, and connect with our community
            </p>
            <Button asChild>
              <Link href="/">Visit FlowStyle.com</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
