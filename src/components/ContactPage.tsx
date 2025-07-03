import React, { useState } from 'react';
import { X, Github, Instagram, MessageCircle, Mail, Send, User, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: 'GitLab',
      icon: Github,
      url: 'https://gitlab.spseplzen.cz/verdanm',
      color: 'from-orange-400 to-red-500',
      description: 'Moje projekty a kód'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/notverdy/',
      color: 'from-pink-500 to-purple-600',
      description: 'Kreativní obsah a zákulisí'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/your-server',
      color: 'from-indigo-500 to-purple-600',
      description: 'Komunita a diskuze'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:verdan.marek@email.cz',
      color: 'from-green-400 to-emerald-500',
      description: 'Přímý kontakt'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('https://formspree.io/f/xpwrnppv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    if (response.ok) {
      alert('Zpráva byla odeslána! Brzy se vám ozvu.');
    } else {
      alert('Nastala chyba při odesílání zprávy.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-sm rounded-3xl border border-gray-700/50 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group z-10"
        >
          <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Pojďme se spojit
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Máte zajímavý projekt nebo jen chcete říct ahoj? Rád se s vámi spojím!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Najděte mě zde</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                      
                      {/* Card */}
                      <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-gray-600/50 transition-all duration-300 group-hover:scale-105">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${social.color}`}>
                            <social.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {social.name}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {social.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Napište mi</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Jméno
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Vaše jméno"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="vas.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Zpráva
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      placeholder="Napište mi o vašem projektu nebo jen řekněte ahoj..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Button */}
                  <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 text-white font-semibold transition-all duration-300 group-hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                    <div className="flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Odesílám...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Odeslat zprávu
                        </>
                      )}
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};