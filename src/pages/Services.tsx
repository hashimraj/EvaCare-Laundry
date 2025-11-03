import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shirt, 
  Sparkles, 
  Home, 
  Sofa,
  Wind,
  Shield,
  Clock,
  Truck,
  CheckCircle
} from 'lucide-react';
import laundryService from '@/assets/laundry-service.jpg';
import dryCleaningService from '@/assets/dry-cleaning-service.jpg';
import carpetCleaning from '@/assets/carpet-cleaning.jpg';

const Services = () => {
  const services = [
    {
      icon: <Shirt className="w-10 h-10 text-primary" />,
      title: "Professional Laundry",
      description: "Complete wash, dry, and fold service for all your everyday garments. We use premium detergents and fabric softeners to keep your clothes looking and feeling their best.",
      image: laundryService,
      features: [
        "Wash, dry, and fold service",
        "Premium detergents and softeners",
        "Stain treatment included",
        "Special care for delicate items",
        "Same-day service available"
      ]
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "Expert Dry Cleaning",
      description: "Professional dry cleaning for suits, dresses, formal wear, and delicate fabrics that require special care and attention.",
      image: dryCleaningService,
      features: [
        "Expert garment inspection",
        "Eco-friendly dry cleaning solvents",
        "Professional pressing and finishing",
        "Minor repairs and alterations",
        "Protective garment bags"
      ]
    },
    {
      icon: <Home className="w-10 h-10 text-primary" />,
      title: "Carpet & Rug Cleaning",
      description: "Deep carpet and rug cleaning using advanced equipment and eco-friendly solutions to remove stains, odors, and allergens.",
      image: carpetCleaning,
      features: [
        "Deep steam cleaning",
        "Stain and odor removal",
        "Pet odor treatment",
        "Scotchgard protection available",
        "Fast drying process"
      ]
    },
    {
      icon: <Sofa className="w-10 h-10 text-primary" />,
      title: "Home Textiles",
      description: "Specialized cleaning for curtains, drapes, bedding, comforters, and upholstery with careful attention to fabric requirements.",
      image: laundryService,
      features: [
        "Curtain and drape cleaning",
        "Comforter and bedding service",
        "Upholstery cleaning",
        "Pillow restoration",
        "Pickup and delivery included"
      ]
    },
    {
      icon: <Wind className="w-10 h-10 text-primary" />,
      title: "Leather & Suede Care",
      description: "Specialized cleaning and conditioning for leather jackets, suede garments, handbags, and other leather accessories.",
      image: dryCleaningService,
      features: [
        "Professional leather cleaning",
        "Suede restoration",
        "Conditioning and protection",
        "Color restoration",
        "Repair services available"
      ]
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Wedding Dress Preservation",
      description: "Expert cleaning and preservation of wedding dresses and formal gowns to keep them beautiful for years to come.",
      image: laundryService,
      features: [
        "Pre-wedding dress cleaning",
        "Post-wedding preservation",
        "Museum-quality preservation box",
        "Stain removal expertise",
        "Family heirloom care"
      ]
    }
  ];

  const processSteps = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Doorstep Pickup",
      description: "Schedule a convenient pickup time and we'll collect your items from your doorstep."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Expert Cleaning",
      description: "Our professionals clean your items using the best techniques and eco-friendly products."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality Check",
      description: "Every item goes through our rigorous quality control process before packaging."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Fast Delivery",
      description: "Your cleaned items are delivered back to you within 24-48 hours, perfectly cleaned and pressed."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive laundry and dry cleaning services designed to meet all your garment care needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="service-card overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {service.icon}
                      <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <Button 
                        className="btn-hero w-full"
                        onClick={() => {
                          const message = `Hi, I'm interested in ${service.title} service. Can you provide more details?`;
                          window.open(`https://wa.me/254745505808?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our simple 4-step process makes getting your clothes cleaned easier than ever
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the convenience of professional cleaning with doorstep pickup and delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-secondary text-lg px-8 py-4"
              onClick={() => {
                const message = `Hi, I'd like to schedule a pickup for laundry service. When is the earliest available time?`;
                window.open(`https://wa.me/254745505808?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Schedule Pickup
            </Button>
            <Button 
              className="btn-outline text-lg px-8 py-4"
              onClick={() => {
                const message = `Hi, I'd like to get a quote for your services. Can you help me with pricing details?`;
                window.open(`https://wa.me/254745505808?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;