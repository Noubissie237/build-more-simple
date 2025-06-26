#!/bin/bash

echo "🚀 Déploiement de l'application Noel Project"

# Arrêter les conteneurs existants
echo "📦 Arrêt des conteneurs existants..."
docker compose down

# Supprimer les images existantes (optionnel)
echo "🗑️  Suppression des anciennes images..."
docker compose down --rmi local

# Construire et lancer les nouveaux conteneurs
echo "🔨 Construction et lancement des conteneurs..."
docker compose up -d --build

# Afficher les logs
echo "📋 Affichage des logs..."
docker compose logs -f app

echo "✅ Déploiement terminé !"
echo "🌐 Application disponible sur : http://localhost:3000"