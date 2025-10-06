import { User, Users, FileText, Dumbbell, Apple, Activity } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: User,
      title: 'Coaching Individuel',
      description: 'Séances d’entraînement personnalisées en tête-à-tête adaptées à vos objectifs spécifiques, votre niveau de forme et votre emploi du temps.',
      features: [
        'Plans d’entraînement personnalisés',
        'Correction de posture en temps réel',
        'Horaires flexibles',
        'Suivi des progrès',
      ],
    },
    {
      icon: Users,
      title: 'Séances de Groupe',
      description: 'Entraînement de groupe dynamique qui combine motivation, soutien communautaire et coaching expert.',
      features: [
        'Format en petit groupe',
        'Entraînements énergiques',
        'Tarifs abordables',
        'Environnement motivant',
      ],
    },
    {
      icon: FileText,
      title: 'Programmes Personnalisés',
      description: 'Programmes complets d’entraînement et de nutrition conçus spécifiquement pour vos objectifs et votre style de vie.',
      features: [
        'Routines d’entraînement sur mesure',
        'Conseils nutritionnels',
        'Points hebdomadaires',
        'Soutien continu',
      ],
    },
  ];

  const expertise = [
    { icon: Dumbbell, label: 'Musculation' },
    { icon: Activity, label: 'Fitness Fonctionnel' },
    { icon: Apple, label: 'Coaching Nutritionnel' },
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-white/60 mb-4">SERVICES</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            PROGRAMMES DE COACHING
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Choisissez le format de coaching qui correspond à votre style de vie et vos objectifs. Chaque programme inclut
            des conseils d'experts et un soutien continu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-white/10 rounded-lg p-8 hover:border-white/30 transition-all group"
            >
              <div className="bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <service.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="bg-zinc-950 rounded-lg p-12 border border-white/10">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">DOMAINES D'EXPERTISE</h3>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              Coaching complet dans plusieurs disciplines pour garantir une transformation fitness complète.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-black border border-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-white/30 transition-all">
                  <item.icon className="w-9 h-9" strokeWidth={1.5} />
                </div>
                <p className="font-semibold tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
