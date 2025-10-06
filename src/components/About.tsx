import { Target, Heart, TrendingUp, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Approche Personnalisée',
      description: 'Chaque client reçoit un plan d’entraînement sur mesure conçu spécifiquement pour ses objectifs et son niveau de forme.',
    },
    {
      icon: Heart,
      title: 'Passion & Dévouement',
      description: 'Avec des années d’expérience, j’apporte passion et engagement à chaque séance, assurant votre motivation.',
    },
    {
      icon: TrendingUp,
      title: 'Transformations Réelles',
      description: 'Historique prouvé d’aide aux clients pour atteindre des résultats durables grâce à un entraînement intelligent et une nutrition adaptée.',
    },
    {
      icon: Award,
      title: 'Excellence Professionnelle',
      description: 'Coach professionnel certifié avec une connaissance approfondie du fitness, de la nutrition et du changement comportemental.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-white/60 mb-4">À PROPOS</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            VOTRE PARTENAIRE DE TRANSFORMATION
          </h2>
          <div className="h-1 w-24 bg-white mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              Je suis <span className="font-semibold text-white">Amir Da Silva</span>, un coach fitness professionnel
              avec pour mission d’aider les gens à libérer leur plein potentiel. Mon approche va au-delà
              du simple entraînement physique – il s’agit de construire des habitudes durables, une résilience mentale
              et un mode de vie qui soutient vos objectifs.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Que vous cherchiez à perdre du poids, gagner du muscle, améliorer vos performances athlétiques,
              ou simplement vous sentir plus énergique, je crée des programmes personnalisés qui correspondent à vos
              besoins uniques et à votre style de vie. Chaque parcours est différent, et je suis là pour vous guider à chaque
              étape du chemin.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Ma philosophie de coaching repose sur trois piliers : <span className="font-semibold text-white">entraînement basé sur la science</span>,
              <span className="font-semibold text-white"> nutrition stratégique</span>, et <span className="font-semibold text-white">développement mental</span>.
              Ensemble, nous ne transformerons pas seulement votre corps, mais toute votre approche de la santé et du bien-être.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Coaching Amir Da Silva"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-8 rounded-lg shadow-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-semibold tracking-wide">ANS D'EXPÉRIENCE</p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all group"
            >
              <value.icon className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-lg font-bold mb-3 tracking-tight">{value.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
