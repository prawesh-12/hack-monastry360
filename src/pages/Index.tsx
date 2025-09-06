import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { MapPin, Eye, Calendar, Archive } from "lucide-react";
import { monasteries } from "@/data/monasteries";
import heroImage from "@/assets/hero-monastery.jpg";
import rumtekImage from "@/assets/rumtek1.jpg";
import pemayangtseImage from "@/assets/pemayangtse1.jpg";

const Index = () => {
  const featuredMonasteries = monasteries.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${heroImage})`, filter: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/70" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-8">
          {/* Main Title with Enhanced Typography */}
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold text-foreground mb-4 tracking-tight monastery-transition">
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Monastery
            </span>
            <span className="text-foreground">360</span>
          </h1>

          {/* Subtitle with Better Spacing */}
          <div className="mb-8 space-y-2">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90 tracking-wide">
              Digital Heritage of Sikkim
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Description with Better Typography */}
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed font-medium">
              Explore the sacred monasteries of Sikkim through immersive 360°
              experiences, interactive maps, and rich cultural heritage preserved
              for future generations.
            </p>
          </div>

          {/* Enhanced Button Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              variant="monastery"
              size="lg"
              className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/tour" className="flex items-center gap-2">
                <span>Start Virtual Tour</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </Button>

            <Button
              asChild
              variant="heritage"
              size="lg"
              className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/map" className="flex items-center gap-2">
                <span>Explore Map</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </Link>
            </Button>
          </div>

          {/* Optional: Add some scroll indicator or additional visual elements */}
          <div className="mt-16 opacity-60">
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Monasteries */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Sacred Sites
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the most significant monasteries that have shaped
              Sikkim's spiritual landscape for centuries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="monastery-transition hover:scale-105 card-shadow border-0 bg-card/80 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img
                  src={rumtekImage}
                  alt="Rumtek Monastery"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Rumtek Monastery
                </CardTitle>
                <CardDescription className="text-monastery-gold font-medium">
                  The Dharma Chakra Centre
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {featuredMonasteries[0]?.short}
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link to={`/detail/${featuredMonasteries[0]?.id}`}>
                    Explore Details
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="monastery-transition hover:scale-105 card-shadow border-0 bg-card/80 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img
                  src={pemayangtseImage}
                  alt="Pemayangtse Monastery"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Pemayangtse Monastery
                </CardTitle>
                <CardDescription className="text-monastery-gold font-medium">
                  Perfect Sublime Lotus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {featuredMonasteries[1]?.short}
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link to={`/detail/${featuredMonasteries[1]?.id}`}>
                    Explore Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Digital Heritage
            </h2>
            <p className="text-lg text-muted-foreground">
              Navigate through different aspects of Sikkim's monastic culture
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="monastery-transition hover:scale-105 card-shadow border-0 bg-card cursor-pointer group">
              <Link to="/map" className="block p-6">
                <div className="text-center">
                  <div className="w-12 h-12 monastery-gradient rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 monastery-transition">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Locate and navigate to sacred sites
                  </p>
                </div>
              </Link>
            </Card>

            <Card className="monastery-transition hover:scale-105 card-shadow border-0 bg-card cursor-pointer group">
              <Link to="/tour" className="block p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-monastery-red rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 monastery-transition">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Virtual Tours</h3>
                  <p className="text-sm text-muted-foreground">
                    Immersive 360° monastery experiences
                  </p>
                </div>
              </Link>
            </Card>

            <Card className="monastery-transition hover:scale-105 card-shadow border-0 bg-card cursor-pointer group">
              <Link to="/calendar" className="block p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 monastery-transition">
                    <Calendar className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Cultural Calendar
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sacred festivals and ceremonies
                  </p>
                </div>
              </Link>
            </Card>

            <Card className="monastery-transition hover:scale-105 card-shadow border-0 bg-card cursor-pointer group">
              <Link to="/archive" className="block p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 monastery-transition">
                    <Archive className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Digital Archive
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Manuscripts, art, and artifacts
                  </p>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Preserving Heritage for Future Generations
          </h3>
          <p className="text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
            Monastery360 is dedicated to documenting and sharing the rich
            Buddhist heritage of Sikkim through cutting-edge digital
            preservation technologies.
          </p>
          <div className="flex justify-center space-x-8">
            <Link
              to="/about"
              className="text-sm hover:text-monastery-gold monastery-transition"
            >
              About the Project
            </Link>
            <span className="text-secondary-foreground/60">•</span>
            <span className="text-sm text-secondary-foreground/80">
              (SIH - Hackathon Project)
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
