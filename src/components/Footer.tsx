import { Mail, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions? Let&apos;s talk.
            </h2>
            <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              Ready to transform your team&apos;s productivity with AI? Get in
              touch and we&apos;ll show you exactly how our training can help
              your business.
            </p>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a
                href="mailto:hello@bamble.io"
                className="flex items-center gap-3 text-lg hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                hello@bamble.io
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:text-accent transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-background transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-background transition-colors">
                  Terms of Use
                </a>
              </div>

              <div className="text-center md:text-right">
                <p>&copy; 2024 Bamble AI Training. All rights reserved.</p>
              </div>
            </div>
          </div>

          {/* Bamble Branding */}
          <div className="text-center mt-8 pt-8 border-t border-background/20">
            <div className="text-2xl font-bold bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Bamble
            </div>
            <p className="text-xs text-background/60 mt-2">
              Empowering teams with practical AI training
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
