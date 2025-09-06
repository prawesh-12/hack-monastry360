import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { MapPin } from 'lucide-react';
import { monasteries } from '@/data/monasteries';

const MapPage = () => {
  const [selectedMonastery, setSelectedMonastery] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Interactive Map</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the sacred monasteries of Sikkim through our interactive map. 
            Click on markers to learn more about each monastery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="h-[600px] relative bg-gradient-to-br from-monastery-stone to-muted rounded-lg">
                  {/* Stylized Map Background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  
                  {/* Monastery Markers */}
                  {monasteries.map((monastery, index) => (
                    <div
                      key={monastery.id}
                      className="absolute cursor-pointer monastery-transition hover:scale-125"
                      style={{
                        left: `${20 + (index * 25)}%`,
                        top: `${30 + (index * 15)}%`
                      }}
                      onClick={() => setSelectedMonastery(monastery.id)}
                    >
                      <div className="relative">
                        <div className="w-6 h-6 monastery-gradient rounded-full border-2 border-white shadow-lg animate-pulse" />
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 monastery-transition">
                          {monastery.name}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Selected Monastery Info */}
                  {selectedMonastery && (
                    <div className="absolute bottom-6 left-6 right-6">
                      {(() => {
                        const monastery = monasteries.find(m => m.id === selectedMonastery);
                        return monastery ? (
                          <Card className="bg-black/60 backdrop-blur-sm border-0 text-white">
                            <CardContent className="p-4">
                              <h3 className="font-semibold mb-2">{monastery.name}</h3>
                              <p className="text-sm text-white/90 mb-3">{monastery.short}</p>
                              <Button asChild variant="monastery" size="sm">
                                <Link to={`/detail/${monastery.id}`}>View Details</Link>
                              </Button>
                            </CardContent>
                          </Card>
                        ) : null;
                      })()}
                    </div>
                  )}

                  {/* Map Legend */}
                  <div className="absolute top-6 right-6">
                    <Card className="bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-sm mb-2">Sikkim Monasteries</h4>
                        <p className="text-xs text-muted-foreground">
                          Click markers to explore
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monastery List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Sacred Sites</h2>
            
            {monasteries.map((monastery) => (
              <Card 
                key={monastery.id}
                className={`cursor-pointer monastery-transition hover:scale-105 card-shadow ${
                  selectedMonastery === monastery.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedMonastery(monastery.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{monastery.name}</CardTitle>
                  <CardDescription className="text-monastery-gold font-medium">
                    {monastery.sect} • {monastery.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {monastery.short}
                  </p>
                  <div className="flex gap-2 text-xs text-muted-foreground mb-4">
                    <span>{monastery.lat}°N</span>
                    <span>•</span>
                    <span>{monastery.lng}°E</span>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="secondary" size="sm">
                      <Link to={`/detail/${monastery.id}`}>Details</Link>
                    </Button>
                    <Button asChild variant="heritage" size="sm">
                      <Link to="/tour">360° View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Information */}
        <Card className="mt-8 bg-card/50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">About These Locations</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2 text-monastery-gold">Geographic Context</h4>
                <p className="text-muted-foreground">
                  These monasteries are situated in the Eastern Himalayas, each positioned 
                  for spiritual significance and natural beauty.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-monastery-gold">Cultural Heritage</h4>
                <p className="text-muted-foreground">
                  Each site represents centuries of Buddhist tradition and serves as 
                  active centers of spiritual practice and learning.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-monastery-gold">Accessibility</h4>
                <p className="text-muted-foreground">
                  Most monasteries are accessible by road, though some require short 
                  treks through scenic mountain paths.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Features Notice */}
        <Card className="mt-6 bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Enhanced Interactive Map</h3>
            <p className="text-sm text-muted-foreground">
              This simplified map representation focuses on cultural context. 
              For detailed navigation and GPS coordinates, use the information provided 
              in each monastery's detail page.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MapPage;