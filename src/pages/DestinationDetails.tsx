import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { destinations } from '@/assets/destinations';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DestinationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-dark mb-4">Destination Not Found</h1>
            <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90">
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <img 
            src={destination.image} 
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{destination.name}</h1>
              <p className="text-xl text-white/90 max-w-2xl">{destination.description}</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-green-dark mb-6">About {destination.name}</h2>
                {destination.id === "munnar" && (
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Nestled in the Western Ghats, Munnar is known for its sprawling tea plantations, 
                      exotic flora and fauna, and cool, pleasant climate. The town's name literally means 
                      "three rivers" in Malayalam, referring to its location at the confluence of the 
                      Mudhirapuzha, Nallathanni, and Kundaly rivers.
                    </p>
                    <p>
                      Take a stroll through the winding pathways of tea gardens, visit the tea factories 
                      to learn about tea processing, or explore the Eravikulam National Park, home to the 
                      endangered Nilgiri Tahr. The rolling hills, misty valleys, and cool climate make 
                      Munnar a perfect getaway from the tropical heat of Kerala.
                    </p>
                    <p>
                      Don't miss the Mattupetty Dam, Echo Point, and the Tea Museum for a complete 
                      Munnar experience. The region is also famous for its spice plantations, where you 
                      can see how cardamom, pepper, and other spices are grown and processed.
                    </p>
                  </div>
                )}
                {destination.id === "alappuzha" && (
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Often called the "Venice of the East," Alappuzha is famous for its houseboat cruises 
                      through the serene backwaters. The town is built around a network of canals and lagoons, 
                      making it a unique destination in Kerala.
                    </p>
                    <p>
                      Experience the tranquil rural life of Kerala as you glide past coconut groves, paddy 
                      fields, and traditional villages. The backwaters are home to a variety of bird species 
                      and marine life, making it a paradise for nature lovers.
                    </p>
                    <p>
                      Don't miss the spectacular Snake Boat Races if you visit during the monsoon season. 
                      The Nehru Trophy Boat Race, held on the second Saturday of August every year, is a 
                      major tourist attraction. The town is also known for its beautiful beaches and 
                      traditional coir industry.
                    </p>
                  </div>
                )}
                {destination.id === "wayanad" && (
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Wayanad is a rural district in Kerala known for its spice plantations, wildlife, 
                      and ancient caves. The name Wayanad is derived from 'Vayal Nadu', which means 
                      'the land of paddy fields' in Malayalam.
                    </p>
                    <p>
                      Trek to Chembra Peak for stunning views, explore the prehistoric Edakkal Caves with 
                      their ancient petroglyphs, or spot elephants and tigers at the Wayanad Wildlife 
                      Sanctuary. The region is also home to several tribal communities, offering a unique 
                      cultural experience.
                    </p>
                    <p>
                      The district is famous for its coffee and spice plantations. Visit a plantation to 
                      learn about the cultivation and processing of coffee, pepper, cardamom, and other 
                      spices. The cool climate and scenic beauty make Wayanad a perfect destination for 
                      nature lovers and adventure seekers.
                    </p>
                  </div>
                )}
                {destination.id === "kochi" && (
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Kochi is a vibrant port city where history and modernity coexist harmoniously. 
                      The city has been a major trading center since ancient times, attracting traders 
                      from around the world.
                    </p>
                    <p>
                      Explore the historic Fort Kochi area with its colonial buildings, Chinese fishing 
                      nets, and ancient synagogue. Experience the blend of Dutch, Portuguese, and British 
                      influences in the architecture and culture. The Mattancherry Palace and the Jewish 
                      Synagogue are must-visit historical sites.
                    </p>
                    <p>
                      Indulge in some of Kerala's best seafood cuisines at the local restaurants. The 
                      city is also known for its Kathakali performances and traditional art forms. 
                      Don't miss the sunset view from the Marine Drive, a popular promenade in the city.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="space-y-8">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-dark mb-4">Best Time to Visit</h3>
                  <p className="text-gray-700">
                    {destination.id === "munnar" && "September to May"}
                    {destination.id === "alappuzha" && "October to February"}
                    {destination.id === "wayanad" && "October to May"}
                    {destination.id === "kochi" && "October to March"}
                  </p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-dark mb-4">Popular Attractions</h3>
                  <ul className="space-y-2 text-gray-700">
                    {destination.id === "munnar" && (
                      <>
                        <li>• Tea Gardens and Tea Museum</li>
                        <li>• Eravikulam National Park</li>
                        <li>• Mattupetty Dam</li>
                        <li>• Echo Point</li>
                        <li>• Spice Plantations</li>
                      </>
                    )}
                    {destination.id === "alappuzha" && (
                      <>
                        <li>• Backwater Houseboat Cruises</li>
                        <li>• Alappuzha Beach</li>
                        <li>• Kumarakom Bird Sanctuary</li>
                        <li>• Nehru Trophy Boat Race</li>
                        <li>• Pathiramanal Island</li>
                      </>
                    )}
                    {destination.id === "wayanad" && (
                      <>
                        <li>• Chembra Peak</li>
                        <li>• Edakkal Caves</li>
                        <li>• Wayanad Wildlife Sanctuary</li>
                        <li>• Banasura Sagar Dam</li>
                        <li>• Pookode Lake</li>
                      </>
                    )}
                    {destination.id === "kochi" && (
                      <>
                        <li>• Fort Kochi</li>
                        <li>• Chinese Fishing Nets</li>
                        <li>• Mattancherry Palace</li>
                        <li>• Jewish Synagogue</li>
                        <li>• Marine Drive</li>
                      </>
                    )}
                  </ul>
                </div>
                
                <Link to={`/packages?destination=${destination.id}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    View Packages <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationDetails; 