import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Fully Insured</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            We tackle your <span className="text-secondary">to-dos</span>,<br />
            so you don't have to
          </h1>
          
          {/* Social Proof Sub-headline */}
          <p className="text-lg md:text-xl mb-6 font-medium text-secondary">
            Serving 500+ Homeowners in the Bay Area
          </p>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-90">
            White-glove handyman and home maintenance service with premium subscription plans. 
            Experience the convenience of professional home care without the hassle.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-white/80">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-secondary text-secondary" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">100% Satisfaction</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingModal>
              <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground px-8 py-4 text-lg font-semibold group">
                Get My Free Home Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </BookingModal>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-sm"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};