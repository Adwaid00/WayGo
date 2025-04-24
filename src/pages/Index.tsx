
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TripPlanner from '@/components/TripPlanner';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/assets/destinations';
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-dark mb-4">
                Wander Wisely
              </h1>
              <p className="text-xl md:text-2xl text-green-hunter mb-6">
                See the world without breaking the bank
              </p>
              <p className="text-gray-700 mb-8 max-w-lg">
                Experience Kerala's most beautiful destinations with customized travel packages 
                that match your budget. Unforgettable memories await, without the hefty price tag.
              </p>
              <div className="hidden md:block">
                <Link to="/destinations" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Explore destinations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <TripPlanner />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-dark">Popular Destinations</h2>
            <p className="text-gray-600 mt-2">Discover Kerala's most breathtaking locations</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                id={destination.id}
                name={destination.name}
                image={destination.image}
                description={destination.description}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/destinations">
              <button className="btn-primary px-6 py-3 rounded-lg flex items-center mx-auto">
                View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-dark">Why Choose WayGo</h2>
            <p className="text-gray-600 mt-2">Travel smarter, not more expensive</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Budget Friendly</h3>
              <p className="text-gray-600 text-center">Customized packages that fit your budget without compromising on experience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Safe & Secure</h3>
              <p className="text-gray-600 text-center">Vetted accommodations and reliable transport for a worry-free journey.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Authentic Experiences</h3>
              <p className="text-gray-600 text-center">Immersive local experiences that connect you with Kerala's rich culture.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-dark">What Our Travelers Say</h2>
            <p className="text-gray-600 mt-2">Hear from people who've experienced Kerala with WayGo</p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-muted p-8 rounded-lg relative">
            <svg className="absolute top-4 left-4 text-primary/20 h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div className="text-center pt-6">
              <p className="italic text-lg text-gray-700 mb-4">
                "WayGo made our family trip to Kerala absolutely magical! We got to experience all the beautiful destinations we wanted within our budget. Their personalized itinerary was perfect."
              </p>
              <div className="flex justify-center items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold text-green-dark">Priya & Raj Sharma</p>
              <p className="text-sm text-gray-600">Delhi, India</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
