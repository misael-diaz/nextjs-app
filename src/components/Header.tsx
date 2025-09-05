"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Menu, Search, User, Building2, ShoppingBag, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CartDrawer from "@/components/CartDrawer";
import { useB2B } from "@/contexts/B2BContext";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isB2BMode, setIsB2BMode } = useB2B();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    router.push("/");
  };

  const navigationItems = [
    { name: "Heels", href: "/collections/heels", submenu: ["Shop all", "Stilettos", "Block Heels", "Wedges"] },
    { name: "Flats", href: "/collections/flats", submenu: ["Shop all", "Ballet Flats", "Loafers", "Oxfords"] },
    { name: "Boots", href: "/collections/boots", submenu: ["Shop all", "Ankle Boots", "Knee High", "Over the Knee"] },
    { name: "Sneakers", href: "/collections/sneakers", submenu: ["Shop all", "Running", "Lifestyle", "Platform"] },
    { name: "Sandals", href: "/collections/sandals", submenu: ["Shop all", "Flat Sandals", "Heeled Sandals", "Wedges"] },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-muted text-muted-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <p>Free shipping on orders over $100</p>
            <div className="flex items-center gap-2 bg-muted px-1 py-1 rounded-full">
              <span className="text-xs font-medium text-muted-foreground">Retail</span>
              <Switch 
                checked={isB2BMode} 
                onCheckedChange={setIsB2BMode}
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted-foreground"
              />
              <span className="text-xs font-medium text-muted-foreground">Business</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-semibold">
                    FlowStyle
                  </Link>
                  {navigationItems.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <Link
                        href={item.href}
                        className="text-lg font-medium hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => {
                          const subHref = subItem === "Shop all" 
                            ? item.href 
                            : `${item.href}?filter=${subItem.toLowerCase().replace(/\s+/g, '-')}`;
                          return (
                            <Link
                              key={subItem}
                              href={subHref}
                              className="block text-sm text-muted-foreground hover:text-foreground"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">
                FlowStyle
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {item.submenu.map((subItem) => {
                      const subHref = subItem === "Shop all" 
                        ? item.href 
                        : `${item.href}?filter=${subItem.toLowerCase().replace(/\s+/g, '-')}`;
                      return (
                        <Link
                          key={subItem}
                          href={subHref}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                        >
                          {subItem}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/collections/all-products">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            
            {user ? (
              // Logged in - show profile and logout
              <>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/profile">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              // Not logged in - show login and register buttons
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/auth/register">Register</Link>
                </Button>
              </>
            )}
            
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  );
}
