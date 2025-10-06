import { Menu, X, Phone, Mail, MapPin, Clock, Dumbbell } from 'lucide-react';
import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Dumbbell className="w-8 h-8 text-white" strokeWidth={2.5} />
              <div>
                <h1 className="text-xl font-bold tracking-tight">AMIR DA SILVA</h1>
                <p className="text-xs text-white/60 tracking-wider">COACH FITNESS</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium hover:text-white/80 transition-colors tracking-wide"
              >
                ACCUEIL
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-white/80 transition-colors tracking-wide"
              >
                À PROPOS
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium hover:text-white/80 transition-colors tracking-wide"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium hover:text-white/80 transition-colors tracking-wide"
              >
                CONTACT
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-black px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-white/90 transition-all tracking-wide"
              >
                RÉSERVER UNE SÉANCE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-sm font-medium hover:text-white/80 transition-colors tracking-wide"
              >
                ACCUEIL
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-sm font-medium hover:text-white/80 transition-colors tracking-wide"
              >
                À PROPOS
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-sm font-medium hover:text-white/80 transition-colors tracking-wide"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-sm font-medium hover:text-white/80 transition-colors tracking-wide"
              >
                CONTACT
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-white text-black px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-white/90 transition-all tracking-wide"
              >
                RÉSERVER UNE SÉANCE
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero onBookSession={() => scrollToSection('contact')} onViewServices={() => scrollToSection('services')} />
        <About />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA */}
      <button
        onClick={() => scrollToSection('contact')}
        className="fixed bottom-8 right-8 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/90 transition-all shadow-2xl hover:scale-105 tracking-wide z-40 hidden md:block"
      >
        RÉSERVER UNE SÉANCE
      </button>
    </div>
  );
}

export default App;
