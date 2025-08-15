/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, TrendingUp, Zap } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-accent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Don't just watch the AI wave.{' '}
            <span className="text-accent drop-shadow-lg">Ride it.</span>
          </h2>

          {/* Supporting Copy */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl mb-6 text-white/90 leading-relaxed">
              AI is not coming. It's already here.
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Equip your team with the skills they need to stay relevant, save
              time, and lead the change.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Stay Ahead</h3>
              <p className="text-sm text-white/80">
                Lead your industry with AI-powered productivity
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Save Time</h3>
              <p className="text-sm text-white/80">
                Automate repetitive tasks and focus on what matters
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fast Results</h3>
              <p className="text-sm text-white/80">
                See productivity gains within the first week
              </p>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20 inline-block">
            <div className="flex items-center justify-center gap-2 text-accent font-semibold">
              <Clock className="h-5 w-5" />
              <span>Spots are limited.</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-12 py-8 h-auto shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 !text-white-primary"
            >
              🎯 Talk to our team!
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-white/70 text-sm">
            <p>
              Join 150+ professionals already using AI to transform their work
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-accent/20 blur-2xl"></div>
    </section>
  );
};

export default FinalCTASection;
