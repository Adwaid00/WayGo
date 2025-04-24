import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Package, User } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    upcomingTrips: [
      {
        id: 1,
        destination: 'Paris, France',
        date: '2024-06-15',
        status: 'Confirmed'
      },
      {
        id: 2,
        destination: 'Tokyo, Japan',
        date: '2024-08-20',
        status: 'Pending'
      }
    ],
    recentBookings: [
      {
        id: 1,
        package: 'European Adventure',
        date: '2024-05-10',
        amount: '$2,500'
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-muted">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-green-dark">Welcome back, {user.name}!</h1>
            <p className="text-gray-600 mt-2">Here's what's happening with your trips</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Trips</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.upcomingTrips.length}</div>
                <p className="text-xs text-muted-foreground">Trips planned</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recent Bookings</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.recentBookings.length}</div>
                <p className="text-xs text-muted-foreground">Bookings made</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Saved Destinations</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Places saved</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Account Status</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Active</div>
                <p className="text-xs text-muted-foreground">Member since 2024</p>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Trips */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Trips</CardTitle>
                <CardDescription>Your planned adventures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user.upcomingTrips.map((trip) => (
                    <div key={trip.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{trip.destination}</h3>
                        <p className="text-sm text-gray-500">Date: {trip.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        trip.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {trip.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>Your latest travel packages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user.recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{booking.package}</h3>
                        <p className="text-sm text-gray-500">Booked on: {booking.date}</p>
                      </div>
                      <span className="font-medium">{booking.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => navigate('/destinations')} className="bg-primary hover:bg-primary/90">
              Browse Destinations
            </Button>
            <Button onClick={() => navigate('/packages')} variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View Packages
            </Button>
            <Button onClick={() => navigate('/booking')} variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Book a Trip
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard; 