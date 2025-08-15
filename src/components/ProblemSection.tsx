/* eslint-disable react/no-unescaped-entities */
import { AlertCircle, HelpCircle, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  const concerns = [
    {
      icon: HelpCircle,
      text: 'Where do we even start with AI?',
    },
    {
      icon: TrendingDown,
      text: 'Is it going to replace my job?',
    },
    {
      icon: AlertCircle,
      text: 'Can I really use ChatGPT for my day-to-day work?',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Is your team{' '}
            <span className="text-destructive">falling behind</span> in the AI
            shift?
          </h2>

          {/* Concerns Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {concerns.map((concern, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-card border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <concern.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    "{concern.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Copy */}
          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-card">
            <blockquote className="text-xl md:text-2xl leading-relaxed text-muted-foreground italic">
              AI isn't optional anymore—it's the new baseline for productivity.
              But you don't need to be a tech expert to use it. You just need
              the right training.
            </blockquote>
            <div className="mt-6">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                That's where we come in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
