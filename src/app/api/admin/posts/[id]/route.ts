import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '../../../../../../lib/prisma'

// GET /api/admin/posts/[id] - Récupérer un post spécifique
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()
    
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const post = await prisma.post.findUnique({
      where: {
        id: params.id
      }
    })

    if (!post) {
      return NextResponse.json({ error: 'Post non trouvé' }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Erreur GET /api/admin/posts/[id]:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

// PATCH /api/admin/posts/[id] - Mettre à jour un post
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()
    
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const body = await request.json()
    const { title, content, imageUrl, category, published } = body

    const post = await prisma.post.update({
      where: {
        id: params.id
      },
      data: {
        ...(title && { title }),
        ...(content && { content }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(category !== undefined && { category }),
        ...(published !== undefined && { published })
      }
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Erreur PATCH /api/admin/posts/[id]:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/posts/[id] - Supprimer un post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()
    
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    await prisma.post.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json({ message: 'Post supprimé avec succès' })
  } catch (error) {
    console.error('Erreur DELETE /api/admin/posts/[id]:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}