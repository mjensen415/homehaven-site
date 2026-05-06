import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Napa, CA",
      rating: 5,
      text: "I kept putting off the Nest setup, the cameras, and the dead wifi zones in our back house. My husband tried twice and gave up. GV House came out on a Tuesday and by noon everything was working — including the guest house we'd basically written off. Didn't try to upsell me on anything. Just fixed what needed fixing.",
      service: "Pro"
    },
    {
      name: "Kevin R.",
      location: "Fairfield, CA",
      rating: 5,
      text: "I had 11 things wrong with my house that I'd been ignoring for two years. They knocked out nine of them in one visit. The other two needed parts — and they followed up the next week without me having to ask. That follow-through is rare.",
      service: "Essential"
    },
    {
      name: "Diane C.",
      location: "Green Valley, CA",
      rating: 5,
      text: "As a single homeowner there's always something I don't know how to handle or don't have time for. Having GV House on call has been a relief I didn't know I needed. They caught a slow leak under my sink before it became a real problem. Worth every penny.",
      service: "Pro"
    },
    {
      name: "Marcus T.",
      location: "Cordelia, CA",
      rating: 5,
      text: "Moved in six months ago and the previous owners left a mess — half-installed smart devices, bad wifi in half the house, a thermostat that made no sense. GV House untangled all of it in an afternoon. Finally feels like I actually own this place.",
      service: "Essential"
    },
    {
      name: "Linda & Tom B.",
      location: "Napa, CA",
      rating: 5,
      text: "We travel a lot and needed someone we could genuinely trust with the house while we're gone. They noticed our water heater making a new sound and had it looked at before we even got home. That kind of proactive care is exactly what we were looking for.",
      service: "Concierge"
    },
    {
      name: "Jason P.",
      location: "Fairfield, CA",
      rating: 5,
      text: "Honestly I was skeptical about a monthly maintenance fee — felt like another subscription I didn't need. Three months in, they've probably saved me $800 in stuff that would've gotten worse if I'd kept ignoring it. The math works.",
      service: "Essential"
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
              Here's what homeowners across Solano, Napa, and the North Bay are saying about their GV House experience.
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