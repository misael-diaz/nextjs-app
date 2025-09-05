import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share, MoreHorizontal, UserPlus, Grid, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    image: "/stevie-knee-high-suede.jpg",
    caption: "Step into confidence with our Stevie Knee-High Boots ✨ Perfect for any occasion! #FlowStyle #Boots #Fashion",
    likes: 1247,
    comments: 89,
    time: "2h"
  },
  {
    id: 2,
    image: "/classic-heel-black-fixed.jpg",
    caption: "Classic never goes out of style 💫 Our signature pointed toe heels are back in stock! #Heels #Classic #Elegant",
    likes: 2156,
    comments: 156,
    time: "5h"
  },
  {
    id: 3,
    image: "/slide-sandal-white-new.jpg",
    caption: "Summer vibes are here! ☀️ These slide sandals are perfect for beach days and city strolls #Summer #Sandals #Comfort",
    likes: 892,
    comments: 67,
    time: "1d"
  },
  {
    id: 4,
    image: "/ballet-flat-black-fixed.jpg",
    caption: "Comfort meets style in our ballet flats 👟 Perfect for the modern woman on the go #Flats #Comfort #Style",
    likes: 1432,
    comments: 98,
    time: "2d"
  }
];

const stories = [
  { id: 1, image: "/heel1.jpg", username: "flowstyle" },
  { id: 2, image: "/flat1.jpg", username: "new_collection" },
  { id: 3, image: "/boot1.jpg", username: "sale_alert" },
  { id: 4, image: "/sandal1.jpg", username: "behind_scenes" }
];

export default function InstagramPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Instagram Header */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-1 rounded-lg mb-8">
            <div className="bg-background rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">FS</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">flowstyle</h1>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <span><strong>1.2M</strong> posts</span>
                      <span><strong>89.4K</strong> followers</span>
                      <span><strong>892</strong> following</span>
                    </div>
                    <p className="text-sm mt-2">
                      ✨ Where fashion flows ✨<br/>
                      Premium women's shoes for every step of your journey<br/>
                      📍 New York, NY<br/>
                      🔗 flowstyle.com
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Stories */}
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {stories.map((story) => (
                  <div key={story.id} className="flex-shrink-0 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-0.5">
                      <div className="w-full h-full bg-background rounded-full p-0.5">
                        <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">FS</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs mt-1">{story.username}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative">
                  <div className="aspect-square bg-muted">
                    <Image
                      src={post.image}
                      alt="FlowStyle post"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">{post.likes.toLocaleString()} likes</p>
                    <p className="text-sm">
                      <span className="font-semibold">flowstyle</span> {post.caption}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      View all {post.comments} comments
                    </p>
                    <p className="text-xs text-muted-foreground">{post.time}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Instagram-like Footer */}
          <div className="text-center mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Follow @flowstyle on Instagram</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates, behind-the-scenes content, and exclusive offers
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
