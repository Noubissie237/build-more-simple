// import { prisma } from '../../../lib/prisma'
// import { Post } from '../../../types'
// import PostCard from '@/components/PostCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Données de test
const mockPosts = [
  {
    id: '1',
    title: 'Premier conseil de la journée',
    content: 'Voici un excellent conseil pour améliorer votre quotidien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/400x300',
    category: 'Lifestyle',
    published: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2', 
    title: 'Inspiration créative',
    content: 'Découvrez comment développer votre créativité au quotidien avec ces astuces simples mais efficaces.',
    imageUrl: 'https://via.placeholder.com/400x300',
    category: 'Créativité',
    published: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenue sur notre site
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Découvrez nos conseils et inspirations
          </p>
        </section>

        {/* Posts Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Nos derniers articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div>
                
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mb-2">
                    {post.category}
                  </span>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {post.content.substring(0, 150)}...
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {post.createdAt.toLocaleDateString('fr-FR')}
                    </span>
                    
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Lire plus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}