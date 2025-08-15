//@ts-nocheck
import { Book, Workflow, Shield, Clock, Users, Target } from 'lucide-react';

const CurriculumSection = () => {
  const sessions = [
    {
      number: '1',
      title: 'AI Fundamentals in Practice',
      icon: Book,
      color: 'from-primary to-primary-glow',
      items: [
        "What AI can and can't do",
        'Prompting formula that works every time',
        'Exercises for writing, summarizing, planning, emailing',
      ],
    },
    {
      number: '2',
      title: 'AI-Driven Workflows',
      icon: Workflow,
      color: 'from-accent to-accent/80',
      items: [
        'Map your real tasks and find automation points',
        'Build flows using GPT + Sheets/Docs/Slack',
        'Draft a prompt library',
      ],
    },
    {
      number: '3',
      title: 'Responsible AI Use',
      icon: Shield,
      color: 'from-success to-success/80',
      items: [
        'Privacy-safe prompting',
        'Reviewing outputs for risk and accuracy',
        'Building internal AI norms',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What&apos;s Inside the Program
            </h2>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>3 Sessions</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>2 Hours Each</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span>Hands-On</span>
              </div>
            </div>
          </div>

          {/* Sessions Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Session Header */}
                <div
                  className={`bg-gradient-to-r ${session.color} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                    <session.icon className="h-8 w-8" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-white/80 text-sm font-medium mb-2">
                      Session {session.number}
                    </div>
                    <h3 className="text-xl font-bold leading-tight">
                      {session.title}
                    </h3>
                  </div>
                </div>

                {/* Session Content */}
                <div className="p-6">
                  <ul className="space-y-4">
                    {session.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                        <span className="text-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
