'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import AdminLayout from '@/components/admin/AdminLayout'
import { Post } from '../../../../../../../types'

export default function EditPost() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingPost, setIsLoadingPost] = useState(true)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    category: '',
    published: false
  })

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
      return
    }
    
    fetchPost()
  }, [session, status, params.id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/admin/posts/${params.id}`)
      if (response.ok) {
        const post: Post = await response.json()
        setFormData({
          title: post.title,
          content: post.content,
          imageUrl: post.imageUrl || '',
          category: post.category || '',
          published: post.published
        })
      } else {
        alert('Article non trouvé')
        router.push('/admin/dashboard')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors du chargement de l\'article')
    } finally {
      setIsLoadingPost(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`/api/admin/posts/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/admin/dashboard')
      } else {
        const error = await response.json()
        alert(`Erreur: ${error.message || 'Une erreur est survenue'}`)
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la mise à jour de l\'article')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  if (status === 'loading' || isLoadingPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900">
              Modifier l'article
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Titre */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Titre de l'article *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Entrez le titre de votre article"
              />
            </div>

            {/* Catégorie */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Sélectionner une catégorie</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Créativité">Créativité</option>
                <option value="Conseils">Conseils</option>
                <option value="Inspiration">Inspiration</option>
                <option value="Actualités">Actualités</option>
              </select>
            </div>

            {/* URL de l'image */}
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                URL de l'image
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/image.jpg"
              />
              <p className="mt-1 text-sm text-gray-500">
                URL complète de l'image à afficher avec l'article
              </p>
            </div>

            {/* Contenu */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Contenu de l'article *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={12}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Rédigez le contenu de votre article..."
              />
            </div>

            {/* Statut de publication */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                Article publié
              </label>
            </div>

            {/* Aperçu de l'image */}
            {formData.imageUrl && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aperçu de l'image
                </label>
                <div className="relative w-full h-48 bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src={formData.imageUrl}
                    alt="Aperçu"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.nextElementSibling!.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden absolute inset-0 items-center justify-center bg-gray-100">
                    <span className="text-gray-500">Impossible de charger l'image</span>
                  </div>
                </div>
              </div>
            )}

            {/* Boutons d'action */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isLoading ? 'Mise à jour...' : 'Mettre à jour'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}