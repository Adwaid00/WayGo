
export const destinations = [
  {
    id: "munnar",
    name: "Munnar",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    description: "Experience the misty mountains, tea plantations, and cool climate of Munnar, a picturesque hill station in Kerala."
  },
  {
    id: "alappuzha",
    name: "Alappuzha",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    description: "Explore the backwaters of Alappuzha (Alleppey), known for its houseboat cruises through a network of tranquil canals."
  },
  {
    id: "wayanad",
    name: "Wayanad",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    description: "Discover Wayanad's lush forests, wildlife sanctuaries, and ancient caves nestled in the Western Ghats."
  },
  {
    id: "kochi",
    name: "Kochi",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    description: "Visit Kochi (Cochin), a vibrant port city with colonial architecture, Chinese fishing nets, and a rich cultural heritage."
  }
];

export type Destination = typeof destinations[0];
