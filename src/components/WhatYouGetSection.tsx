/* eslint-disable react/no-unescaped-entities */
import { CheckCircle, Clock, BookOpen, Shield, Bot, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatYouGetSection = () => {
  const included = [
    {
      icon: Clock,
      title: '3 Live Hands-On Sessions',
      description: '2 hours each with real-time practice and Q&A',
    },
    {
      icon: BookOpen,
      title: 'Prompt Library',
      description: "Tailored to your team's real work scenarios",
    },
    {
      icon: Bot,
      title: 'AI Workflow Templates',
      description: 'Ready-to-implement templates for key business tasks',
    },
    {
      icon: Shield,
      title: 'Risk & Privacy Playbook',
      description: 'Keep your data safe while using AI effectively',
    },
    {
      icon: CheckCircle,
      title: 'Access to GPT, Claude, Gemini',
      description: 'Learn all three major AI platforms with hands-on guidance',
    },
  ];

  const addOns = [
    {
      title: 'Post-training coaching',
      description: '1-on-1 sessions to reinforce learning',
    },
    {
      title: 'Workflow implementation support',
      description: 'Help setting up AI systems in your existing tools',
    },
    {
      title: 'AI policy consulting',
      description: 'Develop company-wide AI usage guidelines',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything your team needs to become AI-powered professionals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Included Items */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Included in Every Program
              </h3>

              <div className="space-y-4">
                {included.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50 shadow-card hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-success" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-success" />
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Optional Add-ons
              </h3>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20 p-6 mb-6">
                <div className="space-y-6">
                  {addOns.map((addon, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Plus className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {addon.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground text-center">
                    Ask about add-ons during your consultation
                  </p>
                </div>
              </div>

              {/* Value Highlight */}
              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  $2,400
                </div>
                <div className="text-muted-foreground mb-4">
                  Average time savings value per person in first month
                </div>
                <div className="text-sm text-muted-foreground">
                  Based on 10 hours saved @ $20/hour × 12 weeks
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Team's Productivity?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join 150+ professionals who've already unlocked the power of AI
                in their daily work.
              </p>
              <Button
                variant="default"
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                Talk to our team!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
