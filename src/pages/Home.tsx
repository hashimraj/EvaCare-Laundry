import CountUpStat from '@/components/CountUpStat';
import HeroSection from '@/components/HeroSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import BubbleAnimation from '@/components/BubbleAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shirt, 
  Sparkles, 
  Home, 
  Sofa, 
  Star, 
  Shield, 
  Leaf, 
  Clock,
  Award,
  Users
} from 'lucide-react';
import laundryService from '@/assets/laundry-service.jpg';
import dryCleaningService from '@/assets/dry-cleaning-service.jpg';
import carpetCleaning from '@/assets/carpet-cleaning.jpg';

const HomePage = () => {
  const services = [
    {
      icon: <Shirt className="w-8 h-8 text-primary" />,
      title: "Professional Laundry",
      description: "Complete wash, dry, and fold service for all your everyday garments",
      image: laundryService
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Dry Cleaning",
      description: "Expert dry cleaning for delicate fabrics, suits, and formal wear",
      image: dryCleaningService
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Carpet Cleaning",
      description: "Deep carpet cleaning using eco-friendly solutions and modern equipment",
      image: carpetCleaning
    },
    {
      icon: <Sofa className="w-8 h-8 text-primary" />,
      title: "Home Textiles",
      description: "Curtains, bedding, and upholstery cleaning with special care",
      image: laundryService
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Eco-Friendly",
      description: "We use biodegradable detergents and energy-efficient processes"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Fast Turnaround",
      description: "24-48 hour service with express options available"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our services"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Expert Care",
      description: "Trained professionals handling your items with utmost care"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Kerubo",
      rating: 5,
      comment: "Absolutely fantastic service! My clothes come back perfectly clean and fresh every time."
    },
    {
      name: "Michael Murithi",
      rating: 5,
      comment: "The pickup and delivery service is so convenient. Quality is always excellent."
    },
    {
      name: "Sandrah Pendo",
      rating: 5,
      comment: "I love their eco-friendly approach. Great for the environment and my family's health."
    }
  ];

  return (
    <div className="min-h-screen">
      <BubbleAnimation />
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4 glow">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional cleaning services tailored to meet all your laundry and dry cleaning needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card overflow-hidden slide-up hover-lift scale-in-center border-2" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="aspect-square overflow-hidden relative image-zoom shimmer">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-4 md:p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-primary/10">
                      {service.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-foreground/70 mb-4">{service.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      const message = `Hi, I'd like to know more about ${service.title}. Can you provide details?`;
                      window.open(`https://wa.me/254745505808?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4 glow">Why Choose Evacare Laundry?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best laundry and dry cleaning experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center slide-up hover-lift p-4" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card border border-primary/20">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base text-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4 glow">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 fade-in glow">Ready to Experience Evacare Laundry?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto slide-up">
            Book your first pickup today and discover why customers across Nairobi trust us with their laundry needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="premium" 
              size="lg"
              className="text-lg px-8 py-6 font-semibold shadow-glow !text-white hover:!text-white"
              onClick={() => {
                const message = `Hi, I'd like to book a pickup for laundry service. What are the available time slots?`;
                window.open(`https://wa.me/254745505808?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Book Pickup Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-hero text-lg px-8 py-6 font-semibold border-2 border-white !text-white hover:!bg-white hover:!text-primary"
              onClick={() => window.open('tel:+254745505808')}
            >
              Call +254 745 505 808
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

