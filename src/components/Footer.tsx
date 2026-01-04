import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="bg-primary/95 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Home Experience?
          </h2>
          <p className="text-xl mb-4 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners who've discovered the convenience 
            of professional home care without the hassle.
          </p>
          <p className="text-lg mb-8 font-semibold text-secondary">
            🎁 Book this week to receive a complimentary smart water leak detector!
          </p>
          <BookingModal>
            <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground px-8 py-4 text-lg font-semibold">
              Get My Free Home Assessment
            </Button>
          </BookingModal>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">GV House</h3>
              <p className="mb-6 opacity-90 leading-relaxed">
                Premium handyman and home maintenance service. We tackle your to-dos, 
                so you don't have to.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-secondary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-secondary transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-secondary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="hover:text-secondary transition-colors"
                  >
                    Pricing Plans
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="hover:text-secondary transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li>General Home Repairs</li>
                <li>Smart Home & Internet</li>
                <li>Carpentry Work</li>
                <li>Electrical & Plumbing</li>
                <li>Preventive Maintenance</li>
                <li>Emergency Repairs</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>(650) 555-GVHOUSE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span>hello@gvhouse.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                  <span>Serving the Greater Bay Area<br />California</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-secondary mt-0.5" />
                  <span>Mon-Fri: 8AM-8PM<br />Sat-Sun: 9AM-6PM<br />Emergency: 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>&copy; {currentYear} GV House. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};