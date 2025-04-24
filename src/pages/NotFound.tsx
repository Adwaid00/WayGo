
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-muted">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold text-green-dark mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! This page has wandered off the map.</p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
