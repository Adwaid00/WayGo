import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  image,
  description
}) => {
  return (
    <div className="destination-card group">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-sm text-white/80 mb-4 line-clamp-2">{description}</p>
            <Link to={`/destinations/${id}`}>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/20 text-white border-white hover:bg-white hover:text-green-dark"
              >
                Explore
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
