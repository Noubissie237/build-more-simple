import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Mon Site Vitrine
          </Link>
          
          <nav className="flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Accueil
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              À propos
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/admin/dashboard" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}