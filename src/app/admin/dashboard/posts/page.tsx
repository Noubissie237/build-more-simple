// 'use client'

// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import AdminLayout from '@/components/admin/AdminLayout'
// import { Post } from '../../../../../types'

// export default function PostsListPage() {
//   const { data: session, status } = useSession()
//   const router = useRouter()
//   const [posts, setPosts] = useState<Post[]>([])
//   const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
//   const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')
//   const [categoryFilter, setCategoryFilter] = useState<string>('all')
//   const [searchTerm, setSearchTerm] = useState('')
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     if (status === 'loading') return
//     if (!session) {
//       router.push('/admin/login')
//       return
//     }
    
//     fetchPosts()
//   }, [session, status, router])

//   useEffect(() => {
//     filterPosts()
//   }, [posts, filter, categoryFilter, searchTerm])

//   const fetchPosts = async () => {
//     try {
//       const response = await fetch('/api/admin/posts')
//       if (response.ok) {
//         const data = await response.json()
//         setPosts(data)
//       }
//     } catch (error) {
//       console.error('Erreur lors de la récupération des posts:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const filterPosts = () => {
//     let filtered = posts

//     // Filtre par statut
//     if (filter === 'published') {
//       filtered = filtered.filter(post => post.published)
//     } else if (filter === 'draft') {
//       filtered = filtered.filter(post => !post.published)
//     }

//     // Filtre par catégorie
//     if (categoryFilter !== 'all') {
//       filtered = filtered.filter(post => post.category === categoryFilter)
//     }

//     // Filtre par recherche
//     if (searchTerm) {
//       filtered = filtered.filter(post => 
//         post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         post.content.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     }

//     setFilteredPosts(filtered)
//   }

//   const handleDeletePost = async (postId: string) => {
//     if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
//       return
//     }

//     try {
//       const response = await fetch(`/api/admin/posts/${postId}`, {
//         method: 'DELETE',
//       })

//       if (response.ok) {
//         fetchPosts()
//       } else {
//         alert('Erreur lors de la suppression')
//       }
//     } catch (error) {
//       console.error('Erreur:', error)
//       alert('Erreur lors de la suppression')
//     }
//   }

//   const togglePublish = async (postId: string, currentStatus: boolean) => {
//     try {
//       const response = await fetch(`/api/admin/posts/${postId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           published: !currentStatus
//         }),
//       })

//       if (response.ok) {
//         fetchPosts()
//       } else {
//         alert('Erreur lors de la mise à jour')
//       }
//     } catch (error) {
//       console.error('Erreur:', error)
//       alert('Erreur lors de la mise à jour')
//     }
//   }

//   const categories = [...new Set(posts.map(post => post.category).filter(Boolean))]

//   if (status === 'loading' || loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Chargement...</p>
//         </div>
//       </div>
//     )
//   }

//   if (!session) {
//     return null
//   }

//   return (
//     <AdminLayout>
//       <div className="space-y-6">
//         {/* En-tête */}
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">
//               Gestion des articles
//             </h1>
//             <p className="text-gray-600">
//               {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} trouvé{filteredPosts.length !== 1 ? 's' : ''}
//             </p>
//           </div>
          
//           <button
//             onClick={() => router.push('/admin/dashboard/posts/new')}
//             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//           >
//             Nouvel article
//           </button>
//         </div>

//         {/* Filtres */}
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {/* Recherche */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Rechercher
//               </label>
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Titre ou contenu..."
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* Filtre par statut */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Statut
//               </label>
//               <select
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value as 'all' | 'published' | 'draft')}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="all">Tous</option>
//                 <option value="published">Publiés</option>
//                 <option value="draft">Brouillons</option>
//               </select>
//             </div>

//             {/* Filtre par catégorie */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Catégorie
//               </label>
//               <select
//                 value={categoryFilter}
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="all">Toutes</option>
//                 {categories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Bouton reset */}
//             <div className="flex items-end">
//               <button
//                 onClick={() => {
//                   setFilter('all')
//                   setCategoryFilter('all')
//                   setSearchTerm('')
//                 }}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               >
//                 Réinitialiser
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Liste des articles */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           {filteredPosts.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-gray-500">Aucun article trouvé avec ces critères.</p>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Article
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Catégorie
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Statut
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Date
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredPosts.map((post) => (
//                     <tr key={post.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4">
//                         <div className="flex items-center">
//                           {post.imageUrl && (
//                             <div className="flex-shrink-0 h-10 w-10">
//                               <img
//                                 className="h-10 w-10 rounded-md object-cover"
//                                 src={post.imageUrl}
//                                 alt=""
//                               />
//                             </div>
//                           )}
//                           <div className={post.imageUrl ? "ml-4" : ""}>
//                             <div className="text-sm font-medium text-gray-900">
//                               {post.title}
//                             </div>
//                             <div className="text-sm text-gray-500">
//                               {post.content.substring(0, 60)}...
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {post.category ? (
//                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                             {post.category}
//                           </span>
//                         ) : (
//                           <span className="text-gray-400 text-sm">Aucune</span>
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                           post.published
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-yellow-100 text-yellow-800'
//                         }`}>
//                           {post.published ? 'Publié' : 'Brouillon'}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <div>
//                           {new Date(post.createdAt).toLocaleDateString('fr-FR')}
//                         </div>
//                         <div className="text-xs text-gray-400">
//                           {new Date(post.createdAt).toLocaleTimeString('fr-FR', { 
//                             hour: '2-digit', 
//                             minute: '2-digit' 
//                           })}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => router.push(`/admin/dashboard/posts/${post.id}/edit`)}
//                             className="text-blue-600 hover:text-blue-900"
//                           >
//                             Modifier
//                           </button>
//                           <button
//                             onClick={() => togglePublish(post.id, post.published)}
//                             className={`${
//                               post.published ? 'text-yellow-600 hover:text-yellow-900' : 'text-green-600 hover:text-green-900'
//                             }`}
//                           >
//                             {post.published ? 'Dépublier' : 'Publier'}
//                           </button>
//                           <button
//                             onClick={() => handleDeletePost(post.id)}
//                             className="text-red-600 hover:text-red-900"
//                           >
//                             Supprimer
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </AdminLayout>
//   )
// }