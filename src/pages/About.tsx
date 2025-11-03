import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Heart, Leaf, Users, Award, Clock } from 'lucide-react';
import CountUpStat from '@/components/CountUpStat';

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-secondary" />,
      title: "Eco-Friendly",
      description: "We're committed to using environmentally safe cleaning products and energy-efficient processes."
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We treat every garment with the utmost care and attention."
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in cleaning and customer service, guaranteed."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Community Focus",
      description: "Proudly serving our local community with personalized, reliable service."
    }
  ];

  const achievements = [
    "Over 10 years of trusted service",
    "5000+ satisfied customers",
    "99% customer satisfaction rate",
    "Eco-friendly certified processes",
    "Award-winning customer service",
    "Doorstep pickup and delivery service"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Evacare Laundry</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner in professional laundry and dry cleaning services, 
            committed to quality, convenience, and environmental responsibility.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Founded with a simple mission, Evacare Laundry began as a small family business dedicated 
                to providing the community with reliable, high-quality laundry and dry cleaning services 
                that people could trust with their most valued garments.
              </p>
              <p className="text-muted-foreground mb-4 text-lg">
                Over the years, we've grown to serve customers across Nairobi with two convenient locations 
                at Galana Energies and Unicity Mall, but we've never lost sight of our core values: exceptional 
                service, environmental responsibility, and treating every customer like family.
              </p>
              <p className="text-muted-foreground text-lg">
                Today, we're proud to be a leading eco-friendly cleaning service in the region, 
                using state-of-the-art equipment and environmentally safe products to deliver 
                outstanding results while protecting our planet.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and ensure we deliver the best possible service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="service-card text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-card">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Mission</h2>
            <blockquote className="text-2xl text-muted-foreground italic leading-relaxed">
              "To provide exceptional laundry and dry cleaning services that exceed our customers' 
              expectations while maintaining our commitment to environmental sustainability and 
              community service. We believe that taking care of your clothes shouldn't come at 
              the expense of taking care of our planet."
            </blockquote>
            <div className="mt-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">EC</span>
              </div>
              <p className="font-semibold text-foreground">The Evacare Laundry Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-110 transition-transform duration-300">
              <CountUpStat 
                end={10} 
                suffix="+" 
                className="text-4xl font-bold text-white mb-2" 
              />
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <CountUpStat 
                end={5000} 
                suffix="+" 
                className="text-4xl font-bold text-white mb-2" 
              />
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <CountUpStat 
                end={99} 
                suffix="%" 
                className="text-4xl font-bold text-white mb-2" 
              />
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;