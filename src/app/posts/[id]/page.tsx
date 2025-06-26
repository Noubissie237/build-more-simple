import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '../../../../lib/prisma'
import { Post } from '../../../../types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

async function getPost(id: string): Promise<Post | null> {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
        published: true
      }
    })
    return post
  } catch (error) {
    console.error('Erreur lors de la récupération du post:', error)
    return null
  }
}

async function getRelatedPosts(currentPostId: string, category?: string | null): Promise<Post[]> {
  try {
    const posts = await prisma.post.findMany({
      where: {
        published: true,
        id: { not: currentPostId },
        ...(category && { category })
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 3
    })
    return posts
  } catch (error) {
    console.error('Erreur lors de la récupération des posts similaires:', error)
    return []
  }
}

export default async function PostDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const post = await getPost(params.id)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.id, post.category)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{post.title}</li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image principale */}
          {post.imageUrl && (
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="p-8">
            {/* Métadonnées */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                {post.category && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {post.category}
                  </span>
                )}
                <time className="text-gray-500 text-sm">
                  {new Date(post.createdAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>

            {/* Titre */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Contenu */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {post.content}
              </div>
            </div>

            {/* Boutons de partage */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  ← Retour aux articles
                </Link>

                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.content.substring(0, 100) + '...',
                          url: window.location.href
                        })
                      } else {
                        navigator.clipboard.writeText(window.location.href)
                        alert('Lien copié dans le presse-papiers!')
                      }
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Partager
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Articles similaires */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/posts/${relatedPost.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {relatedPost.imageUrl && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    {relatedPost.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mb-2">
                        {relatedPost.category}
                      </span>
                    )}
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {relatedPost.content.substring(0, 100)}...
                    </p>
                    
                    <div className="mt-4 text-xs text-gray-500">
                      {new Date(relatedPost.createdAt).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}