import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/evacare-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-center md:justify-between items-center text-sm">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>Call us: +254 745 505 808</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Unicity Mall, Thika Road & Galana Energies, Eastern Bypass</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="font-medium">Doorstep Pickup & Delivery!</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img src={logoImage} alt="Evacare Laundry" className="w-8 h-8 md:w-12 md:h-12 rounded-lg object-contain" />
            <div>
              <h1 className="font-bold text-base md:text-xl text-foreground">Evacare Laundry</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">Premium Laundry Service</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="btn-hero"
              onClick={() => {
                const message = `Hi, I'd like to book a pickup for laundry service. When can you come?`;
                window.open(`https://wa.me/254745505808?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Book Pickup
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div ref={mobileMenuRef} className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="btn-hero w-fit"
                onClick={() => {
                  const message = `Hi, I'd like to book a pickup for laundry service. When can you come?`;
                  window.open(`https://wa.me/254745505808?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Book Pickup
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;