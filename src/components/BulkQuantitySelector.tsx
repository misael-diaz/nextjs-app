"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus, Package } from 'lucide-react';
import { useB2B } from '@/contexts/B2BContext';

interface BulkQuantitySelectorProps {
  retailPrice: string;
  onQuantityChange: (quantity: number, bulkPrice: string) => void;
  initialQuantity?: number;
}

export default function BulkQuantitySelector({ 
  retailPrice, 
  onQuantityChange, 
  initialQuantity = 1 
}: BulkQuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [inputValue, setInputValue] = useState(initialQuantity.toString());
  const { getBulkPrice, getBulkDiscount, getMinBulkQuantity } = useB2B();

  // Initialize with default quantity to enable the button immediately
  React.useEffect(() => {
    const bulkPrice = getBulkPrice(retailPrice, initialQuantity);
    onQuantityChange(initialQuantity, bulkPrice);
  }, [retailPrice, initialQuantity, onQuantityChange, getBulkPrice]);

  const minQuantity = getMinBulkQuantity();
  const bulkPrice = getBulkPrice(retailPrice, quantity);
  const discount = getBulkDiscount(quantity);
  const discountPercent = Math.round(discount * 100);

  const handleQuantityChange = (newQuantity: number) => {
    const validQuantity = Math.max(minQuantity, newQuantity);
    setQuantity(validQuantity);
    setInputValue(validQuantity.toString());
    const newBulkPrice = getBulkPrice(retailPrice, validQuantity);
    onQuantityChange(validQuantity, newBulkPrice);
  };

  const increment = () => handleQuantityChange(quantity + 1);
  const decrement = () => handleQuantityChange(quantity - 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue); // Always update input display
    
    // Only update quantity if input is valid
    if (newInputValue === '') {
      return; // Allow empty input
    }
    
    const value = parseInt(newInputValue);
    if (isNaN(value)) {
      return; // Don't update quantity for invalid input
    }
    
    const validQuantity = Math.max(minQuantity, value);
    setQuantity(validQuantity);
    const newBulkPrice = getBulkPrice(retailPrice, validQuantity);
    onQuantityChange(validQuantity, newBulkPrice);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // On blur, ensure we have a valid value
    if (inputValue === '' || isNaN(parseInt(inputValue))) {
      const validQuantity = minQuantity;
      setQuantity(validQuantity);
      setInputValue(validQuantity.toString());
      const newBulkPrice = getBulkPrice(retailPrice, validQuantity);
      onQuantityChange(validQuantity, newBulkPrice);
    } else {
      // Sync input value with actual quantity
      setInputValue(quantity.toString());
    }
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
      <div className="flex items-center gap-2">
        <Package className="h-4 w-4 text-primary" />
        <Label className="text-sm font-medium">Bulk Quantity</Label>
        <Badge variant="secondary" className="text-xs">
          B2B Flexible Pricing
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={decrement}
          disabled={quantity <= minQuantity}
          className="h-8 w-8 p-0"
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <Input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          min={minQuantity}
          className="w-20 text-center"
        />
        
        <Button
          variant="outline"
          size="sm"
          onClick={increment}
          className="h-8 w-8 p-0"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Retail Price:</span>
          <span className="line-through">{retailPrice}</span>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Bulk Price:</span>
          <span className="font-semibold text-primary">{bulkPrice}</span>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Discount:</span>
          <Badge variant="default" className="text-xs">
            {discountPercent}% OFF
          </Badge>
        </div>
        
        <div className="flex justify-between items-center text-sm font-medium">
          <span>Total ({quantity} units):</span>
          <span className="text-lg font-bold text-primary">
            ${(parseFloat(bulkPrice.replace('$', '')) * quantity).toFixed(2)}
          </span>
        </div>
      </div>

      {/* B2B Flexible Pricing Tiers */}
      <div className="text-xs text-muted-foreground space-y-1">
        <div className="font-medium">B2B Pricing Tiers:</div>
        <div>1-11 units: 20% off (B2B pricing)</div>
        <div>12-23 units: 25% off (bulk pricing)</div>
        <div>24-47 units: 30% off (bulk pricing)</div>
        <div>48-99 units: 35% off (bulk pricing)</div>
        <div>100+ units: 40% off (bulk pricing)</div>
      </div>
    </div>
  );
}
