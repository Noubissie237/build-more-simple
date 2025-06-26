export interface Post {
    id: string
    title: string
    content: string
    imageUrl?: string | null
    category?: string | null
    published: boolean
    createdAt: Date
    updatedAt: Date
  }
  
  export interface Admin {
    id: string
    email: string
    name: string
  }
  
  export interface PostFormData {
    title: string
    content: string
    imageUrl?: string
    category?: string
    published?: boolean
  }