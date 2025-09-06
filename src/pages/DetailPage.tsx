import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { ArrowLeft, MapPin, Calendar, Eye, Bookmark, ExternalLink } from 'lucide-react';
import { monasteries } from '@/data/monasteries';
import { toast } from 'sonner';
import rumtekImage from '@/assets/rumtek1.jpg';
import pemayangtseImage from '@/assets/pemayangtse1.jpg';
import tashidingImage from '@/assets/tashiding1.jpg';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [language, setLanguage] = useState<'en' | 'ne'>('en');
  
  const monastery = monasteries.find(m => m.id === id);

  const imageMap: Record<string, string> = {
    '/assets/rumtek1.jpg': rumtekImage,
    '/assets/pemayangtse1.jpg': pemayangtseImage,
    '/assets/tashiding1.jpg': tashidingImage,
  };

  if (!monastery) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Monastery Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested monastery could not be found.</p>
            <Button asChild variant="monastery">
              <Link to="/map">Return to Map</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('monastery-bookmarks') || '[]');
    if (!bookmarks.includes(monastery.id)) {
      bookmarks.push(monastery.id);
      localStorage.setItem('monastery-bookmarks', JSON.stringify(bookmarks));
      toast.success('Monastery bookmarked!');
    } else {
      toast.info('Already bookmarked');
    }
  };

  const translations = {
    en: {
      history: 'History',
      details: 'Details',
      howToReach: 'How to Reach',
      virtualTour: 'Virtual Tour',
      bookmarkEvent: 'Bookmark Event',
      bookVisit: 'Book Visit (Coming Soon)',
      gallery: 'Gallery',
      founded: 'Founded',
      sect: 'Sect',
      location: 'Location'
    },
    ne: {
      history: 'इतिहास',
      details: 'विवरण',
      howToReach: 'कसरी पुग्ने',
      virtualTour: 'भर्चुअल टुर',
      bookmarkEvent: 'घटना बुकमार्क',
      bookVisit: 'भ्रमण बुक गर्नुहोस् (छिट्टै)',
      gallery: 'ग्यालरी',
      founded: 'स्थापना',
      sect: 'सम्प्रदाय',
      location: 'स्थान'
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button asChild variant="ghost" className="gap-2">
            <Link to="/map">
              <ArrowLeft className="h-4 w-4" />
              Back to Map
            </Link>
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant={language === 'en' ? 'monastery' : 'outline'} 
              size="sm"
              onClick={() => setLanguage('en')}
            >
              English
            </Button>
            <Button 
              variant={language === 'ne' ? 'monastery' : 'outline'} 
              size="sm"
              onClick={() => setLanguage('ne')}
            >
              नेपाली
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8 monastery-shadow">
          <img 
            src={imageMap[monastery.images[0]] || monastery.images[0]}
            alt={monastery.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 monastery-shadow">
              {monastery.name}
            </h1>
            <p className="text-xl text-monastery-gold font-semibold">
              {monastery.short}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>{t.gallery}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {monastery.images.slice(0, 3).map((image, index) => (
                    <div
                      key={index}
                      className={`relative cursor-pointer rounded-lg overflow-hidden monastery-transition hover:scale-105 ${
                        selectedImage === index ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={imageMap[image] || image}
                        alt={`${monastery.name} ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={imageMap[monastery.images[selectedImage]] || monastery.images[selectedImage]}
                    alt={monastery.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* 360° Virtual Tour */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  {t.virtualTour}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={imageMap[monastery.images[0]] || monastery.images[0]}
                    alt="360° View"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                    <Button asChild variant="monastery" size="lg">
                      <Link to="/tour">
                        <Eye className="mr-2 h-5 w-5" />
                        Launch 360° Experience
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Experience an immersive virtual tour of {monastery.name} with interactive 360° views.
                </p>
              </CardContent>
            </Card>

            {/* History */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>{t.history}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {monastery.history}
                </p>
              </CardContent>
            </Card>

            {/* How to Reach */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {t.howToReach}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {monastery.howToReach}
                </p>
                
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Google Maps Integration</p>
                    <p className="text-xs text-muted-foreground/60">
                      Coordinates: {monastery.lat}, {monastery.lng}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Details */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>{t.details}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t.founded}</p>
                  <p className="text-lg font-semibold">{monastery.year}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t.sect}</p>
                  <Badge variant="outline" className="mt-1">{monastery.sect}</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t.location}</p>
                  <p className="text-sm">{monastery.lat}°N, {monastery.lng}°E</p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button onClick={handleBookmark} variant="heritage" className="w-full gap-2">
                <Bookmark className="h-4 w-4" />
                {t.bookmarkEvent}
              </Button>
              
              <Button variant="outline" className="w-full gap-2" disabled>
                <Calendar className="h-4 w-4" />
                {t.bookVisit}
              </Button>
              
              <Button asChild variant="secondary" className="w-full gap-2">
                <Link to={`/tour?monastery=${monastery.id}`}>
                  <Eye className="h-4 w-4" />
                  {t.virtualTour}
                </Link>
              </Button>
            </div>

            {/* Related Links */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Explore More</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="ghost" className="w-full justify-start gap-2">
                  <Link to="/calendar">
                    <Calendar className="h-4 w-4" />
                    Festival Calendar
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="w-full justify-start gap-2">
                  <Link to="/archive">
                    <ExternalLink className="h-4 w-4" />
                    Related Artifacts
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;