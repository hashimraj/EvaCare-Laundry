import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logoImage from '@/assets/evacare-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Evacare Laundry" className="w-10 h-10 rounded-lg object-contain" />
              <div>
                <h3 className="font-bold text-xl">Evacare Laundry</h3>
                <p className="text-sm text-background/80">Premium Laundry Service</p>
              </div>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Your trusted partner for premium laundry and dry cleaning services in Nairobi.
              We care for your garments with expertise and attention to detail.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61581434518500" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span className="text-background/80">+254 745 505 808</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span className="text-background/80">info@evacarelaundry.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span className="text-background/80">
                  Unicity Mall, Thika Road<br />
                  Near Kenyatta University main campus <br />
                  <span className="block text-center font-bold">&</span>
                  Eastern Bypass, Kamakis<br />
                  Galana Energies
                </span>

              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">Business Hours</h5>
              <div className="text-sm text-background/80 space-y-1">
                <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} Evacare Laundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;