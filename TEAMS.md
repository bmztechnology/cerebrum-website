# Documentation Équipe / Team Documentation

## 📅 Dernières Mises à jour (Changelog) - 31/01/2026

### 1. Migration Domaine : `cerebrumfx.com`
*   **Objectif** : Migration complète du site vers le nouveau domaine `cerebrumfx.com`.
*   **Changements** :
    *   Mise à jour de `baseUrl` dans `layout.js`, `sitemap.js`, `robots.js`, `SchemaOrg.jsx`
    *   Mise à jour des liens de téléchargement (`email.js`, `download/page.js`)
    *   Mise à jour des handles Twitter vers `@CerebrumFX`

### 2. Configuration Production (Clerk & Stripe)
*   **Clerk** : Nouvelle instance production avec domaine personnalisé `cerebrumfx.com`
    *   Webhook configuré : `https://cerebrumfx.com/api/webhooks/clerk`
    *   Événements : `user.created`, `user.updated`, `user.deleted`
*   **Stripe** : Webhook production configuré
    *   Endpoint : `https://cerebrumfx.com/api/webhooks/stripe`
    *   Événements : `checkout.session.completed`, `customer.subscription.deleted`, `customer.deleted`
    *   ⚠️ **Note** : Actuellement en mode TEST. Passer en mode LIVE pour vrais paiements.

### 3. Refonte ProfileCard (Dashboard)
*   **Ancien** : Avatar + infos mélangées, licence en bas
*   **Nouveau** : 
    *   Structure claire sans avatar
    *   Grille d'infos : First Name, Last Name, Email, Country, Phone, Member Since, Subscription
    *   Section License Key séparée en bas
*   **Fichiers** : `ProfileCard.jsx`, `ProfileCard.module.css`

### 4. Ajout "Connexion" dans le Menu
*   **Navbar** : Lien "Login/Connexion" ajouté au menu quand l'utilisateur n'est pas connecté
*   **Traductions** : FR (Connexion), EN (Login), ES (Iniciar Sesión), PT (Entrar)

---

## 📅 Mises à jour - 29/01/2026

### 1. Correction Critique : "License User ID Mismatch"
*   **Problème** : L'ID utilisateur stocké dans la base de données locale (Turso) ne correspondait pas à l'ID utilisateur Clerk, causant l'échec de la vérification de licence (`License not found`).
*   **Solution** : 
    *   Correction manuelle de l'ID en base.
    *   Mise en place d'un mécanisme de **Self-Healing** dans l'API (`/api/license/reset`) qui aligne automatiquement l'ID local avec celui de Clerk en cas de divergence.

### 2. Gestion des Abonnements (Webhooks)
*   **Ajout** : Gestion de l'événement Stripe `customer.subscription.deleted`.
*   **Effet** : Si un abonnement est annulé/supprimé dans Stripe, l'accès utilisateur est immédiatement coupé (Status: Inactive) dans la base de données et dans Clerk.

### 3. Interface & Navigation
*   **Pricing** : Ajout d'une section Tarifs sur la page d'accueil et d'un lien "Pricing" dans la barre de navigation.
*   **Localisation** : Remplacement des drapeaux (🇬🇧/🇫🇷) par les codes langue (EN/FR/ES/PT) pour éviter les problèmes d'affichage sous Windows.

### 4. Migration Licence (Stripe -> Turso) - 29/01/2026
*   **Objectif** : Découpler la vérification de licence pour l'application Desktop (EXE). L'EXE envoie sa requête à l'API Web, qui vérifie désormais la présence de la clé et du `hwid` dans la base Turso locale, sans dépendre de l'API Stripe en temps réel (sauf pour la synchro initiale).
*   **Changements Techniques** :
    *   **DB (`lib/schema.js`)** : Ajout colonne `hwid`.
    *   **API (`api/license/verify`)** : Lecture `Turso` au lieu de `Stripe`.
    *   **API (`api/license/reset`)** : Reset `hwid` local.
    *   **Config (`drizzle.config.js`)** : Passage au dialecte `turso`.

---

## 🔑 Coordonnées des Services Externes

Voici la liste des services connectés et les variables d'environnement correspondantes (cf. `.env.local` pour les valeurs secrètes).

### 1. Base de Données (Turso / LibSQL)
Stockage des utilisateurs, sessions et licences.
*   **URL** : `TURSO_DATABASE_URL` (libsql://cerebrumfx-cerebrumfx.aws-us-east-1.turso.io)
*   **Auth Token** : `TURSO_AUTH_TOKEN` (Secret - voir .env)

### 2. Authentification (Clerk)
Gestion des utilisateurs et sessions frontend.
*   **Publishable Key** : `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (Public)
*   **Secret Key** : `CLERK_SECRET_KEY` (Secret - voir .env)
*   **Dashboard** : https://dashboard.clerk.com

### 3. Paiements (Stripe)
Gestion des abonnements et facturation.
*   **Secret Key** : `STRIPE_SECRET_KEY` (Secret - sk_test_...)
*   **Webhook Secret** : `STRIPE_WEBHOOK_SECRET` (Utilisé pour vérifier les événements Stripe)
*   **Price IDs** :
    *   Mensuel : `NEXT_PUBLIC_STRIPE_PRICE_MONTHLY`
    *   Annuel : `NEXT_PUBLIC_STRIPE_PRICE_YEARLY`

### 4. Emails (SMTP / OVH)
Envoi des emails de bienvenue et notifications.
*   **Host** : `SMTP_HOST` (ssl0.ovh.net)
*   **User** : `SMTP_USER` (noreply@cerebrumfx.com)
*   **Password** : `SMTP_PASS` (Voir .env)

### 5. Déploiement (Google Cloud Run)
Hébergement de l'application Node.js/Next.js.
*   **Project ID** : `cerebrumfx`
*   **Service Name** : `cerebrum-web`
*   **Region** : `europe-west1`
*   **CI/CD** : GitHub Actions (`.github/workflows/deploy-cloud-run.yml`)

---
**Note de sécurité** : Ne jamais commiter le fichier `.env.local` dans le dépôt Git.
