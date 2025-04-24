
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { destinations } from '@/assets/destinations';

const TripPlanner: React.FC = () => {
  const [destination, setDestination] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination) {
      toast.error('Please select a destination');
      return;
    }
    
    if (!budget || isNaN(Number(budget)) || Number(budget) <= 0) {
      toast.error('Please enter a valid budget amount');
      return;
    }

    // For now, just show a success message since we don't have a backend
    toast.success(`Planning trip to ${destinations.find(d => d.id === destination)?.name} with budget ₹${budget}`);
    
    // In a real app, this would navigate to results page with query params
    navigate(`/packages?destination=${destination}&budget=${budget}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-green-dark mb-6">Plan Your Trip</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="destination">Select Destination</Label>
          <Select
            value={destination}
            onValueChange={setDestination}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a destination" />
            </SelectTrigger>
            <SelectContent>
              {destinations.map((dest) => (
                <SelectItem key={dest.id} value={dest.id}>
                  {dest.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="budget">Your Budget (₹)</Label>
          <Input
            id="budget"
            type="number"
            placeholder="Enter your budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            min="1000"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90"
        >
          Plan Now
        </Button>
      </form>
    </div>
  );
};

export default TripPlanner;
