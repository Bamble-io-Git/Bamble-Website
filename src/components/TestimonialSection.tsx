/* eslint-disable react/no-unescaped-entities */
import { Star, Quote } from 'lucide-react';
import testimonialImage from '@/assets/testimonial-anna.jpg';
import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Are Saying
            </h2>
          </div>

          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl border border-border/50 shadow-lg p-8 md:p-12 mb-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="h-16 w-16 text-primary" />
            </div>

            <div className="relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  (5.0)
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground mb-8 italic">
                "I thought AI was just a buzzword. Now I use it every single day
                to write processes, summarize meetings, and prep presentations."
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <Image
                    width={64}
                    height={64}
                    src={testimonialImage}
                    alt="Anna, HR Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    Anna
                  </div>
                  <div className="text-muted-foreground">
                    HR Manager at a 35-person firm
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Metrics */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                150+
              </div>
              <div className="text-lg text-muted-foreground">
                Professionals Trained
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-success/5 to-accent/5 rounded-xl border border-success/20">
              <div className="text-4xl md:text-5xl font-bold text-success mb-2">
                96%
              </div>
              <div className="text-lg text-muted-foreground">
                Would Recommend to a Colleague
              </div>
            </div>
          </div>

          {/* Additional Testimonial Snippet */}
          <div className="mt-12 text-center">
            <div className="bg-background border border-border/50 rounded-xl p-6 shadow-card inline-block">
              <div className="flex items-center gap-1 justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "The workshop paid for itself in the first week with the time we
                saved on report writing."
              </p>
              <div className="text-sm text-muted-foreground mt-2">
                — Marketing Director, Tech Startup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
