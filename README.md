# Dashboard Vitrine - Projet Éco-Campus

## 1. Description du Projet

Ce projet est un site web de type "dashboard vitrine" conçu pour présenter les performances et l'impact positif d'un campus étudiant éco-responsable. Il met en avant les indicateurs clés environnementaux, économiques et sociaux de manière visuelle et interactive.

Ce projet est une application monopage (Single Page Application) construite en HTML, CSS et JavaScript pur.

## 2. Structure des Fichiers

- `index.html`: La structure principale de la page web.
- `style.css`: La feuille de style pour le design et la mise en page.
- `script.js`: Le code JavaScript pour l'interactivité, la navigation, les animations de chiffres et la génération des graphiques.
- `README.md`: Ce fichier d'instructions.

## 3. Comment Lancer le Site

Aucune installation n'est requise. Il suffit d'ouvrir le fichier `index.html` directement dans un navigateur web moderne (Chrome, Firefox, Safari, Edge).

## 4. Personnalisation

- **Changer les données :** Toutes les données (chiffres, textes, labels des graphiques) sont centralisées au début du fichier `script.js` dans l'objet `campusData`. Modifiez cet objet pour mettre à jour l'ensemble du site.
- **Changer les couleurs et les polices :** Les couleurs principales, les polices et les ombres sont définies comme des variables CSS au début du fichier `style.css`, sous le sélecteur `:root`.

## 5. Bibliothèques Externes Utilisées

Le projet utilise des bibliothèques JavaScript via un CDN pour des fonctionnalités avancées :

- **Chart.js :** Pour créer des graphiques interactifs et animés.
- **jsPDF & html2canvas :** Pour la fonctionnalité "Télécharger le rapport en PDF".
