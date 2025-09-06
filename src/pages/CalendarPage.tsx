import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Calendar, MapPin, Clock, Bookmark } from 'lucide-react';
import { events } from '@/data/events';
import { toast } from 'sonner';

const CalendarPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleBookmark = (eventId: string) => {
    const bookmarks = JSON.parse(localStorage.getItem('event-bookmarks') || '[]');
    if (!bookmarks.includes(eventId)) {
      bookmarks.push(eventId);
      localStorage.setItem('event-bookmarks', JSON.stringify(bookmarks));
      toast.success('Event bookmarked!');
    } else {
      toast.info('Already bookmarked');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      full: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Religious Festival':
        return 'bg-monastery-red';
      case 'New Year Celebration':
        return 'monastery-gradient';
      case 'Buddhist Observance':
        return 'bg-secondary';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cultural Calendar</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the rich tapestry of Buddhist festivals and ceremonies celebrated 
            throughout the year in Sikkim's monasteries.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-card border rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'monastery' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </Button>
            <Button
              variant={viewMode === 'list' ? 'monastery' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              List View
            </Button>
          </div>
        </div>

        {/* Events Display */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => {
              const eventDate = formatDate(event.date);
              return (
                <Card key={event.id} className="monastery-transition hover:scale-105 card-shadow">
                  <CardHeader className="relative">
                    <div className="absolute -top-4 -right-4 bg-card border-4 border-background rounded-lg p-3 text-center monastery-shadow">
                      <div className="text-2xl font-bold text-foreground">{eventDate.day}</div>
                      <div className="text-xs text-monastery-gold font-semibold">{eventDate.month}</div>
                    </div>
                    <CardTitle className="pr-16">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.monastery}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <Badge className={`${getEventTypeColor(event.type)} text-white mb-2`}>
                        {event.type}
                      </Badge>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="secondary" size="sm" className="flex-1">
                            Learn More
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{event.title}</DialogTitle>
                            <DialogDescription className="flex items-center gap-2 text-monastery-gold">
                              <Calendar className="h-4 w-4" />
                              {eventDate.full} • {event.monastery}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <Badge className={`${getEventTypeColor(event.type)} text-white mb-4`}>
                              {event.type}
                            </Badge>
                            <p className="text-muted-foreground leading-relaxed">
                              {event.description}
                            </p>
                            <div className="mt-6 flex gap-2">
                              <Button 
                                onClick={() => handleBookmark(event.id)} 
                                variant="monastery" 
                                className="gap-2"
                              >
                                <Bookmark className="h-4 w-4" />
                                Bookmark Event
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        variant="heritage" 
                        size="sm"
                        onClick={() => handleBookmark(event.id)}
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {events.map((event) => {
              const eventDate = formatDate(event.date);
              return (
                <Card key={event.id} className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-card border-2 border-monastery-gold rounded-lg p-3 text-center monastery-shadow">
                        <div className="text-xl font-bold text-foreground">{eventDate.day}</div>
                        <div className="text-xs text-monastery-gold font-semibold">{eventDate.month}</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {event.monastery}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {eventDate.full}
                              </div>
                            </div>
                          </div>
                          <Badge className={`${getEventTypeColor(event.type)} text-white`}>
                            {event.type}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="secondary" size="sm">
                                Learn More
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>{event.title}</DialogTitle>
                                <DialogDescription className="flex items-center gap-2 text-monastery-gold">
                                  <Calendar className="h-4 w-4" />
                                  {eventDate.full} • {event.monastery}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="mt-4">
                                <Badge className={`${getEventTypeColor(event.type)} text-white mb-4`}>
                                  {event.type}
                                </Badge>
                                <p className="text-muted-foreground leading-relaxed">
                                  {event.description}
                                </p>
                                <div className="mt-6 flex gap-2">
                                  <Button 
                                    onClick={() => handleBookmark(event.id)} 
                                    variant="monastery" 
                                    className="gap-2"
                                  >
                                    <Bookmark className="h-4 w-4" />
                                    Bookmark Event
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          
                          <Button 
                            variant="heritage" 
                            size="sm"
                            onClick={() => handleBookmark(event.id)}
                            className="gap-2"
                          >
                            <Bookmark className="h-4 w-4" />
                            Bookmark
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Calendar Legend */}
        <Card className="mt-12 bg-card/50">
          <CardHeader>
            <CardTitle>Festival Calendar Legend</CardTitle>
            <CardDescription>
              Understanding the different types of Buddhist celebrations in Sikkim
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <Badge className="bg-monastery-red text-white mb-2">Religious Festival</Badge>
                <p className="text-sm text-muted-foreground">
                  Traditional Buddhist festivals with deep spiritual significance and ancient origins.
                </p>
              </div>
              <div>
                <Badge className="monastery-gradient text-white mb-2">New Year Celebration</Badge>
                <p className="text-sm text-muted-foreground">
                  Celebrations marking new beginnings according to the Tibetan calendar system.
                </p>
              </div>
              <div>
                <Badge className="bg-secondary text-secondary-foreground mb-2">Buddhist Observance</Badge>
                <p className="text-sm text-muted-foreground">
                  Sacred observances commemorating important events in Buddha's life and teachings.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalendarPage;