import { CheckCircle, Zap, Target, Shield } from "lucide-react";

const ProgramSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      text: "Use ChatGPT, Claude, and Gemini for everyday work"
    },
    {
      icon: Target,
      text: "Write powerful prompts to get exactly what they need"
    },
    {
      icon: Zap,
      text: "Automate repeatable tasks across departments"
    },
    {
      icon: CheckCircle,
      text: "Build safe, efficient AI workflows they can reuse weekly"
    },
    {
      icon: Shield,
      text: "Avoid common risks like data leaks, hallucinations, or misuse"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Introducing:{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bamble AI Training
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              A hands-on workshop for real business people, not engineers.
            </p>
          </div>

          {/* What Your Team Will Learn */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Your team will learn how to:
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50 shadow-card hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bold Quote */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/20">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                No fluff. No theory.{" "}
                <span className="text-primary">Just real productivity wins.</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;