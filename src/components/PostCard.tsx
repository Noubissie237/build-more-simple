import { Post } from '../../types'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {post.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {post.category && (
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mb-2">
            {post.category}
          </span>
        )}
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.content.substring(0, 150)}...
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString('fr-FR')}
          </span>
          
          <Link
            href={`/posts/${post.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Lire plus
          </Link>
        </div>
      </div>
    </div>
  )
}