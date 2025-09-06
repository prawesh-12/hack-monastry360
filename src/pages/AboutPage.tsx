import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Heart, Globe, Camera, Archive, Users, Shield } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Interactive Mapping',
      description: 'Explore monastery locations with detailed geographic information and cultural context.'
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: '360° Virtual Tours',
      description: 'Immersive panoramic experiences that transport you inside sacred halls and courtyards.'
    },
    {
      icon: <Archive className="h-6 w-6" />,
      title: 'Digital Preservation',
      description: 'High-resolution documentation of manuscripts, artifacts, and architectural details.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Cultural Education',
      description: 'Learn about Buddhist traditions, festivals, and the rich heritage of Sikkim.'
    },
  ];

  const teamMembers = [
    {
      name: 'Digital Heritage Initiative',
      role: 'Project Leadership',
      description: 'Coordinating preservation efforts across Sikkim\'s monastic communities.'
    },
    {
      name: 'Buddhist Studies Department',
      role: 'Cultural Consultation',
      description: 'Ensuring authentic representation of Buddhist traditions and practices.'
    },
    {
      name: 'Technology Partners',
      role: 'Technical Implementation',
      description: 'Developing cutting-edge tools for digital heritage preservation.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-16 h-16 monastery-gradient rounded-full mx-auto flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">About Monastery360</h1>
            <p className="text-xl text-monastery-gold font-medium mb-4">
              Preserving Sacred Heritage Through Digital Innovation
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Monastery360 is a pioneering digital heritage initiative dedicated to preserving and sharing 
              the extraordinary Buddhist cultural legacy of Sikkim. Through cutting-edge technology and 
              respectful collaboration with monastic communities, we create immersive experiences that 
              connect people worldwide with these sacred spaces.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 card-shadow bg-gradient-to-r from-card to-card/80">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To bridge the physical and digital worlds by creating authentic, respectful, and accessible 
                documentation of Sikkim's monastic heritage. We believe that by preserving these sacred spaces 
                in digital form, we can ensure their stories, teachings, and cultural significance continue 
                to inspire future generations while supporting the living communities that maintain them.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="monastery-transition hover:scale-105 card-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 monastery-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology & Approach */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-monastery-gold" />
                Respectful Preservation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our work is conducted with the full blessing and collaboration of monastic communities. 
                Every aspect of our documentation process respects sacred protocols and traditional practices.
              </p>
              <div className="space-y-2">
                <Badge variant="outline" className="mr-2">Community Partnership</Badge>
                <Badge variant="outline" className="mr-2">Cultural Sensitivity</Badge>
                <Badge variant="outline">Sacred Protocol Adherence</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-monastery-gold" />
                Advanced Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We employ state-of-the-art digital photography, 360° capture technology, and interactive 
                mapping to create comprehensive documentation that captures both visual beauty and cultural context.
              </p>
              <div className="space-y-2">
                <Badge variant="outline" className="mr-2">360° Photography</Badge>
                <Badge variant="outline" className="mr-2">Interactive Maps</Badge>
                <Badge variant="outline">Digital Archives</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Collaborative Network</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-monastery-gold font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <Card className="mb-12 bg-card/50">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Project Impact</CardTitle>
            <CardDescription className="text-center">
              Measuring our contribution to cultural preservation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-monastery-gold mb-2">3</div>
                <p className="text-sm text-muted-foreground">Monasteries Documented</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-monastery-red mb-2">6</div>
                <p className="text-sm text-muted-foreground">Sacred Artifacts Preserved</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">300+</div>
                <p className="text-sm text-muted-foreground">Years of History</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">∞</div>
                <p className="text-sm text-muted-foreground">Cultural Legacy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Vision */}
        <Card className="card-shadow">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Looking Forward</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Monastery360 represents just the beginning of our digital heritage journey. We envision 
                expanding our documentation to include more monasteries across the Himalayas, developing 
                educational resources for schools and universities, and creating virtual reality experiences 
                that make these sacred spaces accessible to people with mobility challenges. Our ultimate 
                goal is to build a comprehensive digital archive that serves both preservation and education, 
                ensuring that the wisdom and beauty of Buddhist culture continues to illuminate minds and 
                hearts for generations to come.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <p className="text-muted-foreground mb-6">
            For partnerships, research collaborations, or cultural exchange opportunities
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>Digital Heritage Initiative 2024</span>
            <span>•</span>
            <span>Sikkim Cultural Preservation Project</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;