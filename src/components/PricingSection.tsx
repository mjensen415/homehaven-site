import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingModal } from "./BookingModal";
import { Check, Star, Crown, Gem } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Premium Maintenance",
      price: 99,
      icon: Star,
      description: "Perfect for busy homeowners who want essential maintenance covered",
      features: [
        "Quarterly home inspection",
        "Basic repairs included",
        "1 service call per quarter",
        "Emergency response priority",
        "Seasonal maintenance checklist",
        "Access to DIY Community",
        "Email progress reports"
      ],
      limitations: [
        "Materials not included",
        "Major repairs quoted separately"
      ],
      popular: false,
      color: "bg-muted"
    },
    {
      name: "Elite House Care",
      price: 149,
      icon: Crown,
      description: "Comprehensive care for homeowners who want worry-free maintenance",
      features: [
        "Quarterly home inspections",
        "All minor repairs included",
        "1 service call per month",
        "Priority emergency response",
        "Seasonal deep maintenance",
        "Smart home integration plan",
        "Materials credit up to $50/quarter included",
        "Detailed maintenance reports"
      ],
      limitations: [
        "Major renovations quoted separately"
      ],
      popular: true,
      color: "bg-primary"
    },
    {
      name: "Luxurious Upkeep",
      price: 199,
      icon: Gem,
      description: "White-glove concierge service for luxury homes and discerning owners",
      features: [
        "Monthly home inspections",
        "All minor repairs & maintenance included",
        "Unlimited service calls",
        "Emergency hotline",
        "Preventive maintenance program",
        "Home automation management",
        "Access to DIY Community",
        "Materials credit up to $150/quarter included",
        "Dedicated account manager",
        "Annual home improvement consultation"
      ],
      limitations: [],
      popular: false,
      color: "bg-secondary"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Membership <span className="text-primary">Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect level of care for your home. All plans include our satisfaction guarantee 
              and can be cancelled anytime with 30 days notice.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              const isPopular = plan.popular;
              
              return (
                <Card 
                  key={index} 
                  className={`relative service-card ${isPopular ? 'ring-2 ring-primary scale-105' : ''} border-0 shadow-xl overflow-hidden`}
                >
                  {isPopular && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`h-8 w-8 ${isPopular ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start gap-3 opacity-60">
                          <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                    
                    <BookingModal>
                      <Button 
                        className={`w-full ${isPopular ? 'bg-primary hover:bg-primary-hover' : 'bg-secondary hover:bg-secondary-hover'}`}
                        size="lg"
                      >
                        Select {plan.name}
                      </Button>
                    </BookingModal>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-card rounded-xl p-8 border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold mb-2 text-lg">No Long-Term Contracts</h4>
                <p className="text-muted-foreground">Cancel or change your plan anytime with just 30 days notice.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Satisfaction Guaranteed</h4>
                <p className="text-muted-foreground">If you're not happy with our service, we'll make it right or refund your payment.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Fully Insured</h4>
                <p className="text-muted-foreground">Complete insurance protection and bonding for all services and your property.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};