import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-4">AMIR DA SILVA</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Coach fitness professionnel dédié à transformer des vies grâce à un entraînement personnalisé
              et des conseils nutritionnels.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-wider mb-4 text-white/60">CONTACT RAPIDE</h4>
            <div className="space-y-3">
              <a
                href="tel:+33645011901"
                className="flex items-center gap-3 text-sm hover:text-white/80 transition-colors group"
              >
                <Phone className="w-4 h-4 text-white/60 group-hover:text-white/80" />
                <span>+33 6 45 01 19 01</span>
              </a>
              <a
                href="mailto:contact@amirdasilva.com"
                className="flex items-center gap-3 text-sm hover:text-white/80 transition-colors group"
              >
                <Mail className="w-4 h-4 text-white/60 group-hover:text-white/80" />
                <span>contact@amirdasilva.com</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-bold tracking-wider mb-4 text-white/60">SUIVEZ-MOI</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; {currentYear} Amir Da Silva. Tous droits réservés.</p>
            <p>3 allée Merce Cunningham, 34990 Juvignac</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
