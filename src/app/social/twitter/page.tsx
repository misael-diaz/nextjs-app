import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share, MoreHorizontal, UserPlus, MapPin, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const tweets = [
  {
    id: 1,
    content: "Just dropped our new sustainable collection! 🌱 Every pair is made with eco-friendly materials. Fashion can be both stylish AND responsible. #SustainableFashion #FlowStyle",
    image: "/stevie-knee-high-suede.jpg",
    likes: 89,
    retweets: 23,
    replies: 12,
    time: "2h"
  },
  {
    id: 2,
    content: "Behind the scenes: Our design team working on spring collection! Can't wait to share these new styles with you. What colors are you most excited about? 🌸 #BehindTheScenes #SpringFashion",
    image: "/classic-heel-black-fixed.jpg",
    likes: 156,
    retweets: 34,
    replies: 28,
    time: "5h"
  },
  {
    id: 3,
    content: "Happy Friday! What's your go-to shoe for the weekend? We're loving our comfortable flats for those long city walks. Share your favorite style! 👟✨ #FridayVibes #Comfort",
    likes: 67,
    retweets: 12,
    replies: 19,
    time: "1d"
  },
  {
    id: 4,
    content: "Customer spotlight: Sarah from NYC loves her new FlowStyle heels! 'Perfect for both work and date night.' Thanks for sharing, Sarah! 💕 #CustomerLove #Testimonial",
    likes: 234,
    retweets: 45,
    replies: 31,
    time: "2d"
  }
];

const profileInfo = {
  name: "FlowStyle",
  handle: "@flowstyle",
  bio: "✨ Where fashion flows ✨ Premium women's shoes for every step of your journey. Comfort, style, and modern fashion combined.",
  location: "New York, NY",
  website: "flowstyle.com",
  joinDate: "March 2023",
  following: 892,
  followers: "12.4K",
  verified: true
};

export default function TwitterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Twitter Profile Header */}
          <Card className="mb-6">
            <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end space-x-4">
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">FS</span>
                  </div>
                  <div className="flex-1 text-white">
                    <div className="flex items-center space-x-2 mb-1">
                      <h1 className="text-2xl font-bold">{profileInfo.name}</h1>
                      {profileInfo.verified && (
                        <Badge className="bg-blue-500">Verified</Badge>
                      )}
                    </div>
                    <p className="text-blue-100">{profileInfo.handle}</p>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="mb-4">{profileInfo.bio}</p>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {profileInfo.location}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Joined {profileInfo.joinDate}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {profileInfo.following} Following
                  </span>
                  <span>{profileInfo.followers} Followers</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Follow
                </Button>
                <Button variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button variant="outline">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tweets */}
          <div className="space-y-4">
            {tweets.map((tweet) => (
              <Card key={tweet.id}>
                <CardContent className="p-4">
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">FS</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold">{profileInfo.name}</h3>
                        {profileInfo.verified && (
                          <Badge variant="secondary" className="text-xs">Verified</Badge>
                        )}
                        <span className="text-muted-foreground text-sm">{profileInfo.handle}</span>
                        <span className="text-muted-foreground text-sm">•</span>
                        <span className="text-muted-foreground text-sm">{tweet.time}</span>
                        <Button variant="ghost" size="sm" className="ml-auto h-6 w-6 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="mb-3">{tweet.content}</p>
                      
                      {tweet.image && (
                        <div className="relative h-48 bg-muted rounded-lg mb-3">
                          <Image
                            src={tweet.image}
                            alt="FlowStyle tweet"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-6">
                          <Button variant="ghost" size="sm" className="h-8">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            {tweet.replies}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8">
                            <Share className="h-4 w-4 mr-2" />
                            {tweet.retweets}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8">
                            <Heart className="h-4 w-4 mr-2" />
                            {tweet.likes}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Twitter-like Footer */}
          <div className="text-center mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Follow @flowstyle on Twitter</h3>
            <p className="text-muted-foreground mb-4">
              Get real-time updates, fashion tips, and exclusive offers
            </p>
            <Button asChild>
              <Link href="/">Visit FlowStyle.com</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
