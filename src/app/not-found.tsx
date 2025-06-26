import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="max-w-md mx-auto">
            <div className="text-9xl font-bold text-blue-600 mb-4">
              404
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Page non trouvée
            </h1>
            
            <p className="text-gray-600 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Retour à l'accueil
              </Link>
              
              <div className="text-sm text-gray-500">
                ou
              </div>
              
              <Link
                href="/contact"
                className="inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}