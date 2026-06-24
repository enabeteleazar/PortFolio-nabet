# Audit et plan de modernisation

## État initial audité

- Application React 18, TypeScript strict, Vite et Tailwind CSS.
- `App.tsx` réduit à un point d'assemblage du layout et de la page d'accueil.
- Sections métier isolées dans `src/components/home`.
- Layout isolé dans `src/components/layout`.
- Composants génériques isolés dans `src/components/ui`.
- Données statiques centralisées dans `src/data`.
- Types partagés centralisés dans `src/types/portfolio.ts`.
- Aucune section ne dépasse 300 lignes.
- Déploiement statique compatible Vercel.

## Risques identifiés

- Les données GitHub sont statiques et peuvent devenir obsolètes.
- Le formulaire de contact repose encore sur `mailto:`.
- Les métadonnées sociales utilisent une image trop petite pour un aperçu riche.
- Aucun schéma de validation runtime ne protège les jeux de données.
- Aucun test automatisé, lint ou pipeline CI n'est configuré.
- Le thème est uniquement sombre et ne propose pas de préférence persistante.
- Le bundle et les animations doivent respecter les préférences de mouvement réduit.

## Plan de migration

1. Valider l'architecture modulaire existante sans régression visuelle.
2. Optimiser les images, le chargement différé et le découpage du bundle.
3. Ajouter des animations sobres, un thème persistant et renforcer l'accessibilité.
4. Compléter OpenGraph, Twitter Cards et les données structurées.
5. Valider les données avec Zod, couvrir les règles par Vitest et automatiser la CI.
6. Charger GitHub depuis son API avec cache et repli local.
7. Remplacer le contact `mailto:` par un formulaire relié à une fonction Vercel.
8. Préparer un blog MDX avec une première publication.
9. Exécuter build, tests et lint avant la livraison finale.
