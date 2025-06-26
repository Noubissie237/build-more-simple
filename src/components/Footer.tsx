export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Mon Site Vitrine</h3>
              <p className="text-gray-300">
                Découvrez nos conseils et inspirations pour améliorer votre quotidien.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white transition-colors">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">
                Email: contact@monsite.com<br />
                Téléphone: +33 1 23 45 67 89
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Mon Site Vitrine. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    )
  }