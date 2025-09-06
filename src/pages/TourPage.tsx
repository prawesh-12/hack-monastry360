import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { monasteries } from '@/data/monasteries';
import rumtekImage from '@/assets/rumtek1.jpg';

const TourPage = () => {
  const [searchParams] = useSearchParams();
  const monasteryId = searchParams.get('monastery') || 'rumtek';
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const monastery = monasteries.find(m => m.id === monasteryId) || monasteries[0];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setRotation(prev => (prev + 0.5) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {!isFullscreen && <Navigation />}
      
      <div className={`${isFullscreen ? 'h-screen' : 'container mx-auto px-4 py-8'}`}>
        {!isFullscreen && (
          <div className="flex items-center justify-between mb-8">
            <Button asChild variant="ghost" className="gap-2">
              <Link to={`/detail/${monastery.id}`}>
                <ArrowLeft className="h-4 w-4" />
                Back to Details
              </Link>
            </Button>
            
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground">{monastery.name}</h1>
              <p className="text-monastery-gold font-medium">Virtual 360° Experience</p>
            </div>
            
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        )}

        {/* 360° Viewer */}
        <Card className={`overflow-hidden card-shadow ${isFullscreen ? 'h-full rounded-none' : ''}`}>
          <CardContent className="p-0">
            <div className={`relative ${isFullscreen ? 'h-full' : 'h-[70vh]'} bg-gradient-to-b from-monastery-stone to-background overflow-hidden`}>
              {/* Panorama Container */}
              <div 
                className="absolute inset-0 bg-cover bg-center monastery-transition"
                style={{ 
                  backgroundImage: `url(${rumtekImage})`,
                  backgroundPosition: `${rotation * -2}px center`,
                  backgroundSize: '400% 100%'
                }}
              />
              
              {/* Overlay with interactive elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20" />
              
              {/* Navigation dots (simulated hotspots) */}
              <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                <div className="w-4 h-4 bg-monastery-gold rounded-full border-2 border-white cursor-pointer hover:scale-125 monastery-transition animate-pulse" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Main Prayer Hall
                </div>
              </div>
              
              <div className="absolute top-1/3 right-1/3 transform -translate-y-1/2">
                <div className="w-4 h-4 bg-monastery-gold rounded-full border-2 border-white cursor-pointer hover:scale-125 monastery-transition animate-pulse" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Golden Buddha
                </div>
              </div>

              {/* Control Panel */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:bg-white/20"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-white hover:bg-white/20"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setRotation(0)}
                    className="text-white hover:bg-white/20"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleFullscreen}
                    className="text-white hover:bg-white/20"
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Narration Panel */}
              {!isFullscreen && (
                <div className="absolute top-6 left-6 right-6">
                  <Card className="bg-black/60 backdrop-blur-sm border-0 text-white">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">Explore the Sacred Halls</h3>
                      <p className="text-sm text-white/90">
                        Welcome to the virtual tour of {monastery.name}. Use the controls below to navigate 
                        and explore this magnificent monastery. Click on the golden hotspots to learn about 
                        specific areas and artifacts.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Tour Information */}
        {!isFullscreen && (
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Interactive Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Click and drag to explore, or use the auto-rotation feature to take a guided tour.
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Audio Guide</h3>
                <p className="text-sm text-muted-foreground">
                  Listen to detailed narrations about the monastery's history and significance.
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Sacred Artifacts</h3>
                <p className="text-sm text-muted-foreground">
                  Discover ancient statues, thangkas, and ritual objects through interactive hotspots.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Navigation */}
        {!isFullscreen && (
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Explore Other Monasteries</h3>
            <div className="flex justify-center space-x-4">
              {monasteries.map((m) => (
                <Button
                  key={m.id}
                  asChild
                  variant={m.id === monastery.id ? 'monastery' : 'outline'}
                  size="sm"
                >
                  <Link to={`/tour?monastery=${m.id}`}>
                    {m.name.split(' ')[0]}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourPage;