
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { destinations } from '@/assets/destinations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Dummy package data
const allPackages = [
  {
    id: 1,
    name: "Essential Munnar",
    destination: "munnar",
    price: 5000,
    duration: "3 Days / 2 Nights",
    description: "A budget-friendly tour of Munnar's key attractions including tea plantations and viewpoints.",
    inclusions: ["Hotel accommodation", "Breakfast", "Sightseeing", "Local transport"]
  },
  {
    id: 2,
    name: "Deluxe Munnar Experience",
    destination: "munnar",
    price: 8000,
    duration: "4 Days / 3 Nights",
    description: "Enhanced package with premium stays and comprehensive coverage of Munnar's attractions.",
    inclusions: ["Luxury hotel accommodation", "Breakfast and dinner", "Private guide", "All transfers"]
  },
  {
    id: 3,
    name: "Premium Munnar Retreat",
    destination: "munnar",
    price: 12000,
    duration: "5 Days / 4 Nights",
    description: "Premium experience with luxury accommodation, all meals, and exclusive activities.",
    inclusions: ["5-star accommodation", "All meals", "Private guide", "Adventure activities", "Spa treatment"]
  },
  {
    id: 4,
    name: "Backwater Cruise",
    destination: "alappuzha",
    price: 6000,
    duration: "2 Days / 1 Night",
    description: "Overnight houseboat experience in the scenic backwaters of Alappuzha.",
    inclusions: ["Houseboat stay", "All meals on boat", "Village visits", "Traditional entertainment"]
  },
  {
    id: 5,
    name: "Alappuzha Complete",
    destination: "alappuzha",
    price: 9000,
    duration: "3 Days / 2 Nights",
    description: "Comprehensive Alappuzha experience with houseboat stay and beach visits.",
    inclusions: ["Hotel & houseboat accommodation", "All meals", "Beach visits", "Cultural programs"]
  },
  {
    id: 6,
    name: "Wayanad Explorer",
    destination: "wayanad",
    price: 7000,
    duration: "3 Days / 2 Nights",
    description: "Explore the wildlife, waterfalls, and plantations of scenic Wayanad.",
    inclusions: ["Resort accommodation", "Breakfast", "Guided treks", "Wildlife safari"]
  },
  {
    id: 7,
    name: "Wildlife & Nature - Wayanad",
    destination: "wayanad",
    price: 10000,
    duration: "4 Days / 3 Nights",
    description: "Immersive nature experience in Wayanad's forests and wildlife sanctuaries.",
    inclusions: ["Jungle resort", "All meals", "Multiple safaris", "Nature walks", "Tribal village visit"]
  },
  {
    id: 8,
    name: "Historic Kochi Tour",
    destination: "kochi",
    price: 4000,
    duration: "2 Days / 1 Night",
    description: "Explore the colonial heritage and cultural highlights of Fort Kochi.",
    inclusions: ["Heritage hotel stay", "Breakfast", "Walking tour", "Cultural show"]
  },
  {
    id: 9,
    name: "Kochi Delights",
    destination: "kochi",
    price: 7500,
    duration: "3 Days / 2 Nights",
    description: "Comprehensive Kochi tour including historic sites and modern attractions.",
    inclusions: ["Premium hotel", "Breakfast and dinner", "City tour", "Shopping excursion", "Sunset cruise"]
  }
];

const Packages = () => {
  const [searchParams] = useSearchParams();
  const [filteredPackages, setFilteredPackages] = useState(allPackages);
  const [filters, setFilters] = useState({
    destination: searchParams.get('destination') || '',
    budget: parseInt(searchParams.get('budget') || '20000'),
    duration: ''
  });
  
  // Apply filters when component mounts or filters change
  useEffect(() => {
    let result = allPackages;
    
    if (filters.destination && filters.destination !== 'all_destinations') {
      result = result.filter(pkg => pkg.destination === filters.destination);
    }
    
    if (filters.budget) {
      result = result.filter(pkg => pkg.price <= filters.budget);
    }
    
    if (filters.duration && filters.duration !== 'any_duration') {
      switch (filters.duration) {
        case 'short':
          result = result.filter(pkg => pkg.duration.includes('2 Days') || pkg.duration.includes('3 Days'));
          break;
        case 'medium':
          result = result.filter(pkg => pkg.duration.includes('4 Days'));
          break;
        case 'long':
          result = result.filter(pkg => pkg.duration.includes('5 Days') || pkg.duration.includes('6 Days'));
          break;
        default:
          break;
      }
    }
    
    setFilteredPackages(result);
  }, [filters]);
  
  const handleDestinationChange = (value: string) => {
    setFilters(prev => ({ ...prev, destination: value }));
  };
  
  const handleBudgetChange = (value: number[]) => {
    setFilters(prev => ({ ...prev, budget: value[0] }));
  };
  
  const handleDurationChange = (value: string) => {
    setFilters(prev => ({ ...prev, duration: value }));
  };
  
  const selectedDestination = destinations.find(d => d.id === filters.destination);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-green-dark mb-4">
              {selectedDestination ? `${selectedDestination.name} Packages` : 'Travel Packages'}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {selectedDestination 
                ? `Explore our curated travel packages for ${selectedDestination.name}. Find the perfect itinerary that matches your budget and preferences.`
                : 'Discover our wide range of travel packages across Kerala. Filter by destination, budget, and duration to find your perfect trip.'}
            </p>
          </div>
        </section>
        
        {/* Filters & Packages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-green-dark mb-6">Filter Packages</h2>
                  
                  <div className="space-y-6">
                    {/* Destination Filter */}
                    <div className="space-y-2">
                      <Label>Destination</Label>
                      <Select
                        value={filters.destination}
                        onValueChange={handleDestinationChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All Destinations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all_destinations">All Destinations</SelectItem>
                          {destinations.map((dest) => (
                            <SelectItem key={dest.id} value={dest.id}>
                              {dest.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Budget Filter */}
                    <div className="space-y-2">
                      <Label>Budget (Up to ₹{filters.budget})</Label>
                      <Slider
                        defaultValue={[filters.budget]}
                        max={20000}
                        step={1000}
                        onValueChange={handleBudgetChange}
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>₹0</span>
                        <span>₹20,000</span>
                      </div>
                    </div>
                    
                    {/* Duration Filter */}
                    <div className="space-y-2">
                      <Label>Duration</Label>
                      <Select
                        value={filters.duration}
                        onValueChange={handleDurationChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Any Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any_duration">Any Duration</SelectItem>
                          <SelectItem value="short">Short (2-3 Days)</SelectItem>
                          <SelectItem value="medium">Medium (4 Days)</SelectItem>
                          <SelectItem value="long">Long (5+ Days)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Reset Button */}
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setFilters({ destination: '', budget: 20000, duration: '' })}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Packages List */}
              <div className="lg:w-3/4">
                {filteredPackages.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPackages.map((pkg) => (
                      <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 bg-green-100 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img 
                              src={destinations.find(d => d.id === pkg.destination)?.image} 
                              alt={pkg.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full">
                            ₹{pkg.price}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-green-dark mb-2">{pkg.name}</h3>
                          <p className="text-gray-500 text-sm mb-3">
                            {destinations.find(d => d.id === pkg.destination)?.name} | {pkg.duration}
                          </p>
                          <p className="text-gray-700 mb-4">{pkg.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="font-medium text-green-dark mb-2">Inclusions:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {pkg.inclusions.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <svg className="h-4 w-4 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white rounded-lg shadow">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">No Packages Found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters to find available packages.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setFilters({ destination: '', budget: 20000, duration: '' })}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Packages;
