import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Wifi, 
  Hammer, 
  Zap, 
  Droplets, 
  PaintBucket,
  Settings,
  Home,
  Lightbulb
} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "General Home Repairs",
      description: "From leaky faucets to door repairs and drywall patching, we handle all the small fixes that make a big difference.",
      features: [
        "Leaky faucet repairs",
        "Door adjustments & repairs",
        "Drywall patching & touch-ups",
        "Window & screen repairs",
        "Cabinet hardware installation"
      ]
    },
    {
      icon: Wifi,
      title: "Smart Home & Internet",
      description: "Transform your home with smart technology. We install and configure devices for the modern connected lifestyle.",
      features: [
        "Smart thermostat installation",
        "Security camera setup",
        "Wi-Fi network optimization",
        "Smart lighting systems",
        "Voice assistant integration"
      ]
    },
    {
      icon: Hammer,
      title: "Carpentry Work",
      description: "Professional carpentry services from furniture assembly to custom shelving and minor wood repairs.",
      features: [
        "Furniture assembly",
        "Custom shelving installation",
        "Trim & molding repairs",
        "Cabinet door adjustments",
        "Minor wood repairs"
      ]
    },
    {
      icon: Zap,
      title: "Electrical & Plumbing Fixes",
      description: "Safe and reliable electrical and plumbing repairs by licensed professionals for your home's essential systems.",
      features: [
        "Light fixture installation",
        "Ceiling fan installation",
        "Outlet & switch repairs",
        "Drain cleaning",
        "Toilet repairs & replacements"
      ]
    }
  ];

  const additionalServices = [
    { icon: PaintBucket, title: "Touch-up Painting", description: "Wall scuffs and minor paint repairs" },
    { icon: Settings, title: "Appliance Installation", description: "Dishwashers, garbage disposals, and more" },
    { icon: Home, title: "Exterior Maintenance", description: "Gutter cleaning, pressure washing, deck repairs" },
    { icon: Lightbulb, title: "Energy Efficiency", description: "LED upgrades, weatherproofing, insulation" }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive home care services designed to keep your property in perfect condition. 
              From quick fixes to complex installations, we've got you covered.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="service-card h-full border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Services */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Promise */}
          <div className="text-center mt-12 bg-card rounded-xl p-8 border shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Our Service Promise</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every service comes with our satisfaction guarantee. If you're not completely happy with our work, 
              we'll make it right or your money back. It's that simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};