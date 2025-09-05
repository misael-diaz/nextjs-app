"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  memberSince: string;
  avatar: string;
  initials: string;
  totalOrders: number;
  favoriteItems: number;
  loyaltyPoints: number;
  tier: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  register: (userData: Omit<User, 'id' | 'memberSince' | 'avatar' | 'initials' | 'totalOrders' | 'favoriteItems' | 'loyaltyPoints' | 'tier'>) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Mock user data
const mockUser: User = {
  id: "user_123",
  name: "Sarah Johnson",
  email: "sarah@example.com",
  password: "password123",
  phone: "+1 (555) 123-4567",
  address: "123 Fashion Street, New York, NY 10001",
  memberSince: "2023-06-15",
  avatar: "/avatar-placeholder.jpg",
  initials: "SJ",
  totalOrders: 12,
  favoriteItems: 8,
  loyaltyPoints: 1250,
  tier: "Gold",
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('flowstyle-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Get all registered users from localStorage
    const users = JSON.parse(localStorage.getItem('flowstyle-users') || '[]');
    
    // Add mock user if no users exist
    if (users.length === 0) {
      users.push(mockUser);
      localStorage.setItem('flowstyle-users', JSON.stringify(users));
    }
    
    // Find user by email and password
    const foundUser = users.find((u: User) => u.email === email && u.password === password);
    
    if (foundUser) {
      // Remove password from stored user data
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword as User);
      localStorage.setItem('flowstyle-user', JSON.stringify(userWithoutPassword));
      return true;
    }
    
    return false;
  };

  const register = (userData: Omit<User, 'id' | 'memberSince' | 'avatar' | 'initials' | 'totalOrders' | 'favoriteItems' | 'loyaltyPoints' | 'tier'>): boolean => {
    // Get all registered users from localStorage
    const users = JSON.parse(localStorage.getItem('flowstyle-users') || '[]');
    
    // Check if email already exists
    if (users.find((u: User) => u.email === userData.email)) {
      return false;
    }
    
    // Create new user
    const newUser: User = {
      ...userData,
      id: `user_${Date.now()}`,
      memberSince: new Date().toISOString().split('T')[0],
      avatar: "/avatar-placeholder.jpg",
      initials: userData.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      totalOrders: 0,
      favoriteItems: 0,
      loyaltyPoints: 0,
      tier: "Bronze",
    };
    
    // Add to users array
    users.push(newUser);
    localStorage.setItem('flowstyle-users', JSON.stringify(users));
    
    // Auto-login the new user
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword as User);
    localStorage.setItem('flowstyle-user', JSON.stringify(userWithoutPassword));
    
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('flowstyle-user');
    // Also clear cart and B2B mode on logout
    localStorage.removeItem('flowstyle-cart');
    localStorage.removeItem('b2b-mode');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoggedIn: !!user, 
      login, 
      register,
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
