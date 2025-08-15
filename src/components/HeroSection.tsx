import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Brain, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-workshop.jpg';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-primary/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* AI Platform Icons */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span>ChatGPT</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>Claude</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Gemini</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Turn Your Team into{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text">
                  AI-Powered Professionals
                </span>{' '}
                in Just 3 Practical Sessions
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Unlock the power of AI to automate tasks, boost productivity,
                and stay ahead—no tech background needed.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto !bg-blue-500 !text-white-primary"
              >
                Talk to our team!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-success/20 border-2 border-background"></div>
                </div>
                <span>150+ professionals trained</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <span>96% recommend</span>
            </div>
          </div>

          {/* Right column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                width={500}
                height={500}
                priority
                placeholder="blur"
                src={heroImage}
                alt="Collaborative AI workshop with business professionals learning AI tools"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-black rounded-xl p-4 shadow-lg border text-white-primary">
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
                <span>Live Workshop</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-black text-white-primary rounded-xl p-4 shadow-lg border">
              <div className="text-sm">
                <div className="font-semibold text-foreground">
                  Next Session
                </div>
                <div className="text-muted-foreground">Starting Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
