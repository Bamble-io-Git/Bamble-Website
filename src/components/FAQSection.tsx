import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Who is this for?',
      answer:
        'Any business team—no tech experience needed. Our program is specifically designed for non-technical professionals in sales, marketing, HR, finance, and operations who want to leverage AI in their daily work.',
    },
    {
      question: 'Do we need paid versions of ChatGPT, Claude, etc.?',
      answer:
        "Not necessarily. We help you get started with free or affordable tools first. We'll show you exactly what you can accomplish with free versions and when it might make sense to upgrade to paid plans based on your team's specific needs.",
    },
    {
      question: "What's the format?",
      answer:
        'Three 2-hour sessions delivered live online or onsite at your location. Each session includes hands-on exercises, real-world examples, and plenty of time for Q&A. Optional 1:1 follow-up coaching is available for teams that want additional support.',
    },
    {
      question: 'Is it customized to our industry?',
      answer:
        "Yes. We tailor all content, examples, and exercises to your real workflows and industry-specific challenges. Before the program begins, we conduct a brief consultation to understand your team's specific needs and pain points.",
    },
    {
      question: 'Is it safe to use AI with company data?',
      answer:
        'Yes—we teach you how to prompt responsibly, avoid risks, and manage privacy settings. Our Risk & Privacy Playbook covers data protection best practices, how to anonymize sensitive information, and when to use different AI platforms based on your security requirements.',
    },
    {
      question: 'How quickly will we see results?',
      answer:
        'Most teams start seeing productivity gains within the first week. By the end of the 3-session program, participants typically save 5-10 hours per week on routine tasks like writing, research, and administrative work.',
    },
    {
      question: 'What if my team is skeptical about AI?',
      answer:
        "That's completely normal! Our program is designed specifically for AI skeptics and beginners. We start with simple, practical applications that demonstrate immediate value without being overwhelming or intimidating.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Bamble AI Training
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-card rounded-2xl border border-border/50 shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/50"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still Have Questions CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                We&apos;re here to help you understand exactly how AI training
                can benefit your team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                <a
                  href="mailto:hello@bamble.io"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  📧 hello@bamble.io
                </a>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground"></div>
                <span>Usually respond within 2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
