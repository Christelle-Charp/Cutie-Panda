🎮 Cutie Panda – Simulation de vie en React
Bienvenue dans Cutie Panda, une application React développée avec Vite.js, qui simule la vie d’un adorable panda. Le joueur doit maintenir ses statistiques en équilibre tout en gérant les contraintes du temps et les aléas de la vie.
Projet réalisé dans le cadre de l'examen final de la formation RNCP Développeur Web de Webecom. Promotion 2025
Images fournies par Webecom.


🧠 Objectif du jeu

L’utilisateur incarne un panda et doit gérer ses trois statistiques principales :
- ⚡ Énergie : diminue avec le temps, augmente en dormant ou en mangeant.
- 😊 Humeur : diminue avec le travail, augmente avec les loisirs.
- 💰 Argent : augmente en travaillant, diminue en s’amusant ou en mangeant.
Le jeu se termine (Game Over) si l’une des statistiques atteint 0.


🚀 Fonctionnalités

✅ Statistiques dynamiques

- Dégradation automatique de l’énergie et de l’humeur toutes les 10 secondes.
- Changement de couleur des barres selon les seuils :
- < 30 → orange
- < 10 → rouge + animation "danger"

✅ Actions disponibles

- Travailler
- Dormir
- S'amuser
- Manger

✅ Événements aléatoires

Toutes les 30 secondes, un événement aléatoire peut survenir :
- 💰 +20 : "Vous trouvez un billet de 20€ par terre !"
- 💰 -30 : "Vous avez oublié de payer votre loyer…"
- 😊 +10 : "Un ami vous invite au cinéma gratuitement !"
- ⚡ -15 : "Vous tombez malade…"


🧩 Technologies utilisées
- ⚛️ React (avec Vite.js)
- 🎨 CSS pur pour le style
- 🧠 React Icons pour les illustrations
- 🧪 useContext + useEffect pour la logique du jeu

📦 Installation
# Cloner le projet
git clone https://github.com/votre-utilisateur/cutie-panda.git
cd cutie-panda

# Installer les dépendances
npm install

# Installer la librairie d'icônes
npm install react-icons

# Lancer le projet en local
npm run dev


🔁 Redémarrage & Game Over

- Un message de fin s’affiche si une stat atteint 0.
- Un bouton permet de redémarrer une nouvelle partie avec les valeurs initiales.


🧭 Retour d’expérience

Ce projet m’a permis de consolider et de mettre en pratique plusieurs compétences clés en développement front-end avec React. En particulier :
- 🔧 Structuration d’un projet React avec Vite.js : j’ai appris à organiser proprement les composants, le contexte, et les pages pour une meilleure lisibilité et évolutivité du code.
- ⏱️ Gestion des effets temporels avec useEffect : j’ai mis en place des intervalles pour simuler la dégradation naturelle des statistiques et l’apparition d’événements aléatoires, ce qui m’a permis de mieux comprendre la gestion du cycle de vie des composants.
- 🎨 Intégration d’icônes et de styles CSS : j’ai utilisé la librairie react-icons pour enrichir l’interface visuellement, et j’ai stylisé l’application avec du CSS pur, en respectant les maquettes fournies.
- 🧪 Mise en place de conditions de Game Over : j’ai appris à anticiper les cas limites et à gérer les transitions d’état du jeu de manière fluide et cohérente

Ce projet m’a également permis de développer ma rigueur, ma capacité à commenter mon code, et à faire des choix techniques adaptés aux contraintes du cahier des charges. Il m’a donné une vision plus concrète de la conception d’un jeu interactif en React, tout en renforçant mon autonomie et ma créativité.

---

## 👩‍💻 Auteur

**Christelle Charpinet**  
_Webecom – Promotion 2025_
