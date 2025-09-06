import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import { Search, Filter, Eye, Calendar, MapPin } from 'lucide-react';
import { archiveItems } from '@/data/archive';

const ArchivePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedMonastery, setSelectedMonastery] = useState<string>('all');

  const filteredItems = useMemo(() => {
    return archiveItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.type.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesMonastery = selectedMonastery === 'all' || item.monastery === selectedMonastery;
      
      return matchesSearch && matchesType && matchesMonastery;
    });
  }, [searchQuery, selectedType, selectedMonastery]);

  const uniqueTypes = [...new Set(archiveItems.map(item => item.type))];
  const uniqueMonasteries = [...new Set(archiveItems.map(item => item.monastery))];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Palm Leaf Manuscript':
        return 'bg-monastery-gold text-primary-foreground';
      case 'Painted Scroll':
        return 'bg-monastery-red text-white';
      case 'Wall Painting':
        return 'bg-secondary text-secondary-foreground';
      case 'Bronze Sculpture':
        return 'bg-accent text-accent-foreground';
      case 'Ritual Objects':
        return 'monastery-gradient text-primary-foreground';
      case 'Sacred Texts':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Digital Archive</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a carefully curated collection of manuscripts, artifacts, and sacred objects 
            preserved from Sikkim's monastic heritage.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 card-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search artifacts, manuscripts, and sacred objects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <div className="flex gap-2">
                <Button
                  variant={selectedType === 'all' ? 'monastery' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType('all')}
                >
                  All Types
                </Button>
                {uniqueTypes.slice(0, 3).map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? 'monastery' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className="hidden sm:inline-flex"
                  >
                    {type.split(' ')[0]}
                  </Button>
                ))}
              </div>
            </div>

            {/* Monastery Filter */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant={selectedMonastery === 'all' ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => setSelectedMonastery('all')}
              >
                All Monasteries
              </Button>
              {uniqueMonasteries.map((monastery) => (
                <Button
                  key={monastery}
                  variant={selectedMonastery === monastery ? 'secondary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedMonastery(monastery)}
                >
                  {monastery.split(' ')[0]}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredItems.length} of {archiveItems.length} artifacts
          </p>
        </div>

        {/* Archive Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="monastery-transition hover:scale-105 card-shadow cursor-pointer group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
                    <div className="h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <Eye className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-xs">View Artifact</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className={getTypeColor(item.type)} variant="secondary">
                        {item.year}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-monastery-gold monastery-transition">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 text-xs">
                      <MapPin className="h-3 w-3" />
                      {item.monastery.split(' ')[0]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className={`${getTypeColor(item.type)} mb-2`}>
                      {item.type}
                    </Badge>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                </DialogHeader>
                
                <div className="mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <Eye className="h-12 w-12 mx-auto mb-2" />
                          <p>High-Resolution Image</p>
                          <p className="text-xs">Digital Preservation</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Type:</span>
                        <Badge className={getTypeColor(item.type)}>
                          {item.type}
                        </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Year:</span>
                            <span className="font-medium">{item.year}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Location:</span>
                            <span className="font-medium">{item.monastery}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="flex gap-2 pt-4">
                        <Button variant="monastery" size="sm" className="flex-1">
                          View in AR
                        </Button>
                        <Button variant="heritage" size="sm" className="flex-1">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No artifacts found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                variant="monastery" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                  setSelectedMonastery('all');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        )}

        {/* Archive Statistics */}
        <Card className="mt-12 bg-card/50">
          <CardHeader>
            <CardTitle>Archive Statistics</CardTitle>
            <CardDescription>
              Our digital preservation efforts in numbers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-monastery-gold mb-2">
                  {archiveItems.length}
                </div>
                <p className="text-sm text-muted-foreground">Total Artifacts</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-monastery-red mb-2">
                  {uniqueTypes.length}
                </div>
                <p className="text-sm text-muted-foreground">Artifact Types</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {uniqueMonasteries.length}
                </div>
                <p className="text-sm text-muted-foreground">Monasteries</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  300+
                </div>
                <p className="text-sm text-muted-foreground">Years Preserved</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArchivePage;