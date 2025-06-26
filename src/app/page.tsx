import { prisma } from '../../lib/prisma'
import { Post } from '../../types'
import PostCard from '@/components/PostCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

async function getPosts(): Promise<Post[]> {
  try {
    const posts = await prisma.post.findMany({
      where: {
        published: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return posts
  } catch (error) {
    console.error('Erreur lors de la récupération des posts:', error)
    return []
  }
}

export default async function Home() {
  const posts = await getPosts()

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
          
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Aucun article publié pour le moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}