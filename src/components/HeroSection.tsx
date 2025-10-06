import { ArrowRight, CheckCircle, Clock, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-laundry.jpg';
import CountUpStat from '@/components/CountUpStat';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional laundry service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => {
            const size = Math.random() * 90 + 40;
            return (
              <div
                key={i}
                className="absolute rounded-full border-2"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  bottom: '-120px',
                  background: `radial-gradient(circle at 25% 25%, 
                    rgba(255, 255, 255, 0.9) 0%, 
                    rgba(255, 255, 255, 0.6) 20%,
                    rgba(173, 216, 230, 0.5) 50%, 
                    rgba(135, 206, 235, 0.2) 100%)`,
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                  boxShadow: `
                    0 8px 32px rgba(173, 216, 230, 0.5),
                    inset -10px -10px 20px rgba(255, 255, 255, 0.8),
                    inset 10px 10px 20px rgba(173, 216, 230, 0.3),
                    0 0 25px rgba(255, 255, 255, 0.6)
                  `,
                  animation: `bubble-rise ${Math.random() * 12 + 10}s linear infinite, bubble-sway ${Math.random() * 3 + 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  filter: 'blur(0.5px)',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 fade-in drop-shadow-lg">
              Fresh, Clean,
              <span className="block text-white drop-shadow-lg">Delivered to Your Door</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 slide-up drop-shadow-md">
              Professional laundry and dry cleaning services with eco-friendly practices. 
              Free pickup and delivery in your area.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8">
              <Button 
                variant="gradient" 
                size="lg"
                className="btn-hero text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-semibold"
                onClick={() => {
                  const message = `Hi, I'd like to book a pickup for laundry service. When can you come?`;
                  window.open(`https://wa.me/254745505808?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Book a Pickup
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-semibold"
                onClick={() => {
                  window.location.href = '/services';
                }}
              >
                View Services
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-white">
              <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3">
                <CheckCircle className="text-white" size={20} />
                <span className="text-sm md:text-base font-medium">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3">
                <Clock className="text-white" size={20} />
                <span className="text-sm md:text-base font-medium">24-48h Service</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3">
                <Truck className="text-white" size={20} />
                <span className="text-sm md:text-base font-medium">Free Delivery</span>
              </div>
            </div>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 text-center mt-8 lg:mt-0">
            <div className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-6 border-2 border-primary/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CountUpStat 
                end={5000} 
                suffix="+" 
                className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2" 
              />
              <p className="text-xs md:text-base text-foreground/80 font-medium">Happy Customers</p>
            </div>
            <div className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-6 border-2 border-primary/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CountUpStat 
                end={99} 
                suffix="%" 
                className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2" 
              />
              <p className="text-xs md:text-base text-foreground/80 font-medium">Satisfaction Rate</p>
            </div>
            <div className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-6 border-2 border-primary/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CountUpStat 
                end={10} 
                suffix="+" 
                className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2" 
              />
              <p className="text-xs md:text-base text-foreground/80 font-medium">Years Experience</p>
            </div>
            <div className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-6 border-2 border-primary/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">24/7</h3>
              <p className="text-xs md:text-base text-foreground/80 font-medium">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;