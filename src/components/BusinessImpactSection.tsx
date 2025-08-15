//@ts-nocheck
import {
  DollarSign,
  Users,
  FileText,
  Settings,
  Megaphone,
  Clock,
} from 'lucide-react';

const BusinessImpactSection = () => {
  const departments = [
    {
      department: 'Sales',
      icon: DollarSign,
      color: 'text-green-600',
      bg: 'bg-green-50 dark:bg-green-950/20',
      description: 'Draft cold emails, follow-ups, CRM logs',
    },
    {
      department: 'HR',
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50 dark:bg-blue-950/20',
      description: 'Create job descriptions, onboarding guides, FAQs',
    },
    {
      department: 'Finance',
      icon: FileText,
      color: 'text-purple-600',
      bg: 'bg-purple-50 dark:bg-purple-950/20',
      description: 'Summarize reports, explain metrics, prep exec memos',
    },
    {
      department: 'Operations',
      icon: Settings,
      color: 'text-orange-600',
      bg: 'bg-orange-50 dark:bg-orange-950/20',
      description: 'Automate vendor emails, SOPs, inventory updates',
    },
    {
      department: 'Marketing',
      icon: Megaphone,
      color: 'text-pink-600',
      bg: 'bg-pink-50 dark:bg-pink-950/20',
      description: 'Generate campaign briefs, blog drafts, social copy',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Real Business Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how different departments use AI to save time and boost
              productivity
            </p>
          </div>

          {/* Department Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border/50 p-6 shadow-card hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${dept.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <dept.icon className={`h-6 w-6 ${dept.color}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {dept.department}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-500`}
                  ></div>
                </div>
              </div>
            ))}

            {/* Time Saved Highlight */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 p-6 flex flex-col items-center justify-center text-center">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">
                5-10 hours
              </div>
              <div className="text-muted-foreground">
                saved per week per person
              </div>
            </div>
          </div>

          {/* Final Callout */}
          <div className="text-center">
            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-card">
              <blockquote className="text-xl md:text-2xl leading-relaxed text-muted-foreground italic mb-6">
                You&apos;ll walk away with ready-to-run prompts, live-tested
                workflows, and time saved every week.
              </blockquote>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  Ready-to-run prompts
                </span>
                <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  Live-tested workflows
                </span>
                <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  Time saved weekly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
