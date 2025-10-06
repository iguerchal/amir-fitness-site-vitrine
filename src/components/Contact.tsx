import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '3 allée Merce Cunningham',
      content2: '34990 Juvignac, France',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 6 45 01 19 01',
      link: 'tel:+33645011901',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@amirdasilva.com',
      link: 'mailto:contact@amirdasilva.com',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lundi - Dimanche',
      content2: '08h30 - 20h30',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-white/60 mb-4">CONTACT</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            COMMENÇONS VOTRE PARCOURS
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Prêt à transformer votre vie ? Contactez-moi pour réserver votre première séance ou en savoir plus
            sur les programmes de coaching personnalisés.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-8 tracking-tight">CONTACTEZ-MOI</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-sm tracking-wide text-white/60">
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-white/80 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <>
                          <p className="text-white">{info.content}</p>
                          {info.content2 && <p className="text-white/80 text-sm">{info.content2}</p>}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-black border border-white/10 rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.234!2d3.8082!3d43.6130!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0b2c8b9b5d%3A0x1!2s3%20All%C3%A9e%20Merce%20Cunningham%2C%2034990%20Juvignac!5e0!3m2!1sen!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">ENVOYER UN MESSAGE</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 tracking-wide">
                  NOM *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 tracking-wide">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 tracking-wide">
                  TÉLÉPHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="+33 6 XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 tracking-wide">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Parlez-moi de vos objectifs fitness..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm">
                  Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                  Échec de l'envoi du message. Veuillez réessayer ou me contacter directement.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white text-black px-8 py-4 rounded-lg font-semibold text-sm tracking-wide hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  'ENVOI EN COURS...'
                ) : (
                  <>
                    ENVOYER LE MESSAGE
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
