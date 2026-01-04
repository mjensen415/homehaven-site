import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";
import { Menu, X, Phone } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            GV House
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-secondary transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`hover:text-secondary transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`hover:text-secondary transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`hover:text-secondary transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Reviews
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:(650)555-4484"
              className={`flex items-center gap-2 hover:text-secondary transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              <Phone className="h-4 w-4" />
              (650) 555-GVHOUSE
            </a>
            <BookingModal>
              <Button 
                className={`${
                  isScrolled 
                    ? 'bg-primary hover:bg-primary-hover text-primary-foreground' 
                    : 'bg-secondary hover:bg-secondary-hover text-secondary-foreground'
                }`}
              >
                Book Now
              </Button>
            </BookingModal>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t shadow-lg">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-secondary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-secondary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-secondary transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-secondary transition-colors"
              >
                Reviews
              </button>
              <div className="px-4 py-2 border-t">
                <a 
                  href="tel:(650)555-4484"
                  className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors mb-3"
                >
                  <Phone className="h-4 w-4" />
                  (650) 555-GVHOUSE
                </a>
                <BookingModal>
                  <Button className="w-full bg-primary hover:bg-primary-hover">
                    Get Free Assessment
                  </Button>
                </BookingModal>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};