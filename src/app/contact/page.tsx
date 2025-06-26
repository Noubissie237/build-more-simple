'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 bg-white rounded-lg mb-12 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question, une suggestion ou simplement envie d'échanger ? 
            Nous serions ravis d'avoir de vos nouvelles !
          </p>
        </section>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="question">Question générale</option>
                  <option value="suggestion">Suggestion d'article</option>
                  <option value="collaboration">Proposition de collaboration</option>
                  <option value="feedback">Feedback sur le site</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Coordonnées */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@monsite.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Adresse</h3>
                    <p className="text-gray-600">
                      123 Rue de l'Innovation<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Horaires de réponse
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lundi - Vendredi</span>
                  <span className="font-medium text-gray-900">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Samedi</span>
                  <span className="font-medium text-gray-900">10h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimanche</span>
                  <span className="font-medium text-gray-900">Fermé</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-800">
                  <strong>Temps de réponse moyen :</strong> 24 heures pendant les jours ouvrables
                </p>
              </div>
            </div>

            {/* FAQ rapide */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Questions fréquentes
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Puis-je suggérer un sujet d'article ?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Absolument ! Nous sommes toujours à la recherche de nouvelles idées. 
                    Utilisez le formulaire avec le sujet "Suggestion d'article".
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Proposez-vous des collaborations ?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Oui, nous sommes ouverts aux partenariats et collaborations. 
                    Contactez-nous avec les détails de votre proposition.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Comment puis-je rester informé des nouveaux articles ?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Visitez régulièrement notre site ou suivez-nous sur nos réseaux sociaux 
                    pour ne rien manquer de nos publications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}