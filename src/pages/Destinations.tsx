
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { destinations } from '@/assets/destinations';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Destinations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-green-dark mb-4">Explore Destinations</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the breathtaking beauty and rich cultural heritage of Kerala's most captivating destinations.
            </p>
          </div>
        </section>
        
        {/* Destinations Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {destinations.map((destination, index) => (
              <div 
                key={destination.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-16`}
              >
                <div className="md:w-1/2">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-green-dark mb-4">{destination.name}</h2>
                  <p className="text-gray-700 mb-6">
                    {destination.description}
                    {destination.id === "munnar" && (
                      <>
                        <br /><br />
                        Nestled in the Western Ghats, Munnar is known for its sprawling tea plantations, exotic flora and fauna, and cool, pleasant climate. Take a stroll through the winding pathways of tea gardens, visit the tea factories to learn about tea processing, or explore the Eravikulam National Park, home to the endangered Nilgiri Tahr.
                      </>
                    )}
                    {destination.id === "alappuzha" && (
                      <>
                        <br /><br />
                        Often called the "Venice of the East," Alappuzha is famous for its houseboat cruises through the serene backwaters. Experience the tranquil rural life of Kerala as you glide past coconut groves, paddy fields, and traditional villages. Don't miss the spectacular Snake Boat Races if you visit during the monsoon season.
                      </>
                    )}
                    {destination.id === "wayanad" && (
                      <>
                        <br /><br />
                        Wayanad is a rural district in Kerala known for its spice plantations, wildlife, and ancient caves. Trek to Chembra Peak for stunning views, explore the prehistoric Edakkal Caves with their ancient petroglyphs, or spot elephants and tigers at the Wayanad Wildlife Sanctuary.
                      </>
                    )}
                    {destination.id === "kochi" && (
                      <>
                        <br /><br />
                        Kochi is a vibrant port city where history and modernity coexist harmoniously. Explore the historic Fort Kochi area with its colonial buildings, Chinese fishing nets, and ancient synagogue. Experience the blend of Dutch, Portuguese, and British influences in the architecture and culture, and indulge in some of Kerala's best seafood cuisines.
                      </>
                    )}
                  </p>
                  
                  <div className="mt-auto">
                    <Link to={`/packages?destination=${destination.id}`}>
                      <Button className="bg-primary hover:bg-primary/90">
                        View Packages <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-green-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Kerala Adventure?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Let us help you create the perfect itinerary based on your budget and preferences.
            </p>
            <Link to="/">
              <Button className="bg-white text-green-dark hover:bg-white/90">
                Plan Your Trip Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;
