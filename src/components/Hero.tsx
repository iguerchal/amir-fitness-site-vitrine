import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookSession: () => void;
  onViewServices: () => void;
}

export default function Hero({ onBookSession, onViewServices }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Entraînement Fitness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            TRANSFORMEZ VOTRE
            <span className="block mt-2">CORPS & ESPRIT</span>
          </h1>

          <div className="h-1 w-24 bg-white mx-auto"></div>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Rencontrez votre coach <span className="font-semibold">Amir Da Silva</span> – Un coach fitness professionnel
            dédié à transformer des vies grâce à un entraînement personnalisé et des conseils nutritionnels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={onViewServices}
              className="group w-full sm:w-auto px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-sm tracking-wide hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
            >
              VOIR LES SERVICES
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onBookSession}
              className="group w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-black font-semibold text-sm tracking-wide hover:bg-white/90 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              RÉSERVER UNE SÉANCE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
