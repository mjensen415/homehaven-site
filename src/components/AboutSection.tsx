import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed professionals with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "White-glove service with attention to detail that exceeds industry standards."
    },
    {
      icon: Users,
      title: "Trusted Experts",
      description: "Experienced craftsmen and technicians who treat your home with the utmost care."
    },
    {
      icon: Clock,
      title: "Convenient Scheduling",
      description: "Flexible scheduling that works around your busy lifestyle with reliable service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">GV House</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a premium handyman and home maintenance service that believes your time is valuable. 
              Our subscription-based approach ensures your home stays in perfect condition while you focus on what matters most.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="service-card border-0 shadow-md hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                The Future of Home Maintenance is Here
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Gone are the days of hunting for reliable contractors or dealing with emergency repairs. 
                  Our subscription-based maintenance plans ensure your home receives consistent, professional care.
                </p>
                <p>
                  From minor repairs to major maintenance projects, our team of skilled professionals 
                  handles everything seamlessly, so you can enjoy your home without the stress.
                </p>
                <p>
                  With three carefully crafted service tiers, we provide the perfect level of care 
                  for every home and budget, delivering exceptional value and peace of mind.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-lg border">
              <h4 className="text-2xl font-bold mb-6 text-center">Why Choose GV House?</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Proactive Maintenance:</span> We identify and fix issues before they become expensive problems.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Transparent Pricing:</span> No hidden fees, no surprise charges. Just honest, upfront pricing.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Quality Guarantee:</span> We stand behind our work with a 100% satisfaction guarantee.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Concierge Service:</span> One call handles everything. We coordinate all your home care needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};