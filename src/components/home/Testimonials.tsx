import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rajiv Malhotra",
    company: "TechIndia Solutions",
    content:
      "The legal team at Kavision Solutions provided exceptional service in drafting our partnership agreements. Their attention to detail and understanding of our business needs was impressive.",
  },
  {
    name: "Meera Kapoor",
    company: "InnovateNow Startup",
    content:
      "Their expertise in out-of-court settlements saved us time and resources. The team was professional, responsive, and genuinely concerned about achieving the best outcome for us.",
  },
  {
    name: "Sanjay Gupta",
    company: "Gupta Enterprises",
    content:
      "We have been working with Kavision Solutions for over five years, and their consistent quality of service is remarkable. Their legal advice has been invaluable for our business growth.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our client-focused approach and the positive
            feedback we receive for our legal services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all h-full"
            >
              <CardContent className="pt-6 flex flex-col h-full">
                <Quote className="text-secondary mb-4" size={28} />
                <p className="text-gray-700 italic mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Avatar className="h-12 w-12 bg-primary/10">
                      <AvatarFallback className="text-primary font-medium">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
