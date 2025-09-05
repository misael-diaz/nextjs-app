"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface B2BContextType {
  isB2BMode: boolean;
  setIsB2BMode: (value: boolean) => void;
  getWholesalePrice: (retailPrice: string) => string;
}

const B2BContext = createContext<B2BContextType | null>(null);

export const B2BProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isB2BMode, setIsB2BMode] = useState(false);

  // Load B2B mode from localStorage on mount
  useEffect(() => {
    const savedB2BMode = localStorage.getItem('b2b-mode');
    if (savedB2BMode !== null) {
      setIsB2BMode(JSON.parse(savedB2BMode));
    }
  }, []);

  // Save B2B mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('b2b-mode', JSON.stringify(isB2BMode));
  }, [isB2BMode]);

  // Calculate wholesale price (20% discount for business customers)
  const getWholesalePrice = (retailPrice: string): string => {
    const price = parseFloat(retailPrice.replace('$', ''));
    const wholesalePrice = price * 0.8; // 20% discount
    return `$${wholesalePrice.toFixed(2)}`;
  };

  return (
    <B2BContext.Provider value={{ isB2BMode, setIsB2BMode, getWholesalePrice }}>
      {children}
    </B2BContext.Provider>
  );
};

export const useB2B = () => {
  const context = useContext(B2BContext);
  if (!context) {
    throw new Error('useB2B must be used within a B2BProvider');
  }
  return context;
};
