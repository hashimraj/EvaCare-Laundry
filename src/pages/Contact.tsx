import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
/* import InteractiveMap from '@/components/InteractiveMap'; */

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      content: "+254 745 505 808",
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "info@evacarelaundry.com",
      description: "Send us your questions anytime"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Address",
      content: "Unicity Mall, Thika Road",
      description: "Near Kenyatta University main campus"
    },
    {
      content: "Galana Energies",
      description: "Eastern Bypass, Kamakis"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Hours",
      content: "Mon-Fri: 8AM-8PM, Sat: 8AM-8PM, Sun: 8AM-8PM",
      description: "We're here when you need us"
    }
  ];

  const serviceAreas = [
    "Ruiru",
    "Thika Road",
    "Kenyatta University Area",
    "Kahawa",
    "Githurai",
    "Zimmerman"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with us for all your laundry and dry cleaning needs. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="service-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 712 345 678"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="laundry">Professional Laundry</option>
                        <option value="dry-cleaning">Dry Cleaning</option>
                        <option value="carpet">Carpet Cleaning</option>
                        <option value="home-textiles">Home Textiles</option>
                        <option value="leather">Leather & Suede Care</option>
                        <option value="wedding">Wedding Dress Preservation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your cleaning needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground font-medium mb-1">{info.content}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <Card className="service-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground text-sm">Quick and easy messaging</p>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://wa.me/254745505808', '_blank')}
                  >
                    Message us on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="service-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Service Areas</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Visit our main location or schedule a pickup from anywhere in our service area
            </p>
          </div>
          
          <Card className="service-card">
            <CardContent className="p-8">
              {/* <InteractiveMap /> */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Two Locations</h3>
                <p className="text-muted-foreground mb-4">
                  Experience freshness and care at our two easily accessible branches.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Galana Energies</p>
                    <p className="text-muted-foreground">Eastern Bypass, Kamakis</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Unicity Mall</p>
                    <p className="text-muted-foreground">Kenyatta University, Thika Road</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;