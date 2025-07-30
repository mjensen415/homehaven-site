import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Palo Alto, CA",
      rating: 5,
      text: "GV House has been a game-changer for our family. The Elite plan gives us complete peace of mind - everything just gets taken care of before we even notice it needs attention. Their team is professional, reliable, and incredibly skilled.",
      service: "Elite House Care"
    },
    {
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      text: "As a busy executive, I don't have time to deal with home maintenance. The Luxurious Upkeep plan is worth every penny - they handle everything seamlessly. My home has never been in better condition.",
      service: "Luxurious Upkeep"
    },
    {
      name: "Jennifer Rodriguez",
      location: "Mountain View, CA",
      rating: 5,
      text: "The Premium Maintenance plan is perfect for our needs and budget. The team is always punctual, courteous, and does excellent work. I love getting the monthly reports showing everything they've maintained.",
      service: "Premium Maintenance"
    },
    {
      name: "David Thompson",
      location: "Menlo Park, CA",
      rating: 5,
      text: "I was skeptical about subscription home services, but GV House exceeded all expectations. They fixed issues I didn't even know existed and now my home runs like clockwork. Highly recommended!",
      service: "Elite House Care"
    },
    {
      name: "Lisa Park",
      location: "Redwood City, CA",
      rating: 5,
      text: "The smart home integration service was fantastic. They set up everything perfectly and now I can control my entire home from my phone. The ongoing support is excellent too.",
      service: "Premium Maintenance"
    },
    {
      name: "Robert Wilson",
      location: "Los Altos, CA",
      rating: 5,
      text: "Having a dedicated account manager with the Luxurious plan makes all the difference. They know my home inside and out, and the service is truly white-glove. Best investment I've made for my property.",
      service: "Luxurious Upkeep"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what homeowners across the Bay Area 
              are saying about their GV House experience.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="service-card h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed italic pl-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Happy Homeowners</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Customer Retention</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Emergency Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};