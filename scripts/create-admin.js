const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    // Vérifier si un admin existe déjà
    const existingAdmin = await prisma.admin.findFirst()
    
    if (existingAdmin) {
      console.log('Un administrateur existe déjà.')
      return
    }

    // Créer le hash du mot de passe
    const hashedPassword = await bcrypt.hash('password123', 12)

    // Créer l'admin
    const admin = await prisma.admin.create({
      data: {
        email: 'admin@example.com',
        password: hashedPassword,
        name: 'Administrateur'
      }
    })

    console.log('Administrateur créé avec succès!')
    console.log('Email:', admin.email)
    console.log('Mot de passe: password123')
    console.log('')
    console.log('⚠️  N\'oubliez pas de changer le mot de passe en production!')
    
  } catch (error) {
    console.error('Erreur lors de la création de l\'admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()