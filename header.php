<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Cabinet Lucie International - Coaching & Neurosciences Appliquées avec Dr. Hermann Degla" />
  <meta name="keywords" content="coaching, neurosciences, développement personnel, stress, mémoire, concentration, Dr Hermann Degla" />
  <meta name="author" content="Cabinet Lucie International" />
  <meta name="theme-color" content="#1e40af" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Cabinet Lucie International" />
  <meta property="og:description" content="Coaching et neurosciences appliquées pour améliorer votre cerveau et transformer votre vie" />
  <meta property="og:locale" content="fr_FR" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Cabinet Lucie International" />
  <meta property="twitter:description" content="Coaching et neurosciences appliquées pour améliorer votre cerveau et transformer votre vie" />

  <!-- Font Awesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <title>Cabinet Lucie International</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Skip link pour l'accessibilité -->
  <a href="#main-content" class="skip-link">Aller au contenu principal</a>

  <!-- Language switcher -->
  <style>
    .language-switcher {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin: 0.5rem;
    }
    .lang-btn {
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      font-weight: bold;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: #333;
      border-radius: 4px;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    .lang-btn svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
    .lang-btn.active, .lang-btn:hover {
      background-color: #1e40af;
      color: white;
    }
  </style>
  <div class="language-switcher" role="group" aria-label="Language switcher">
    <button onclick="switchLanguage('fr')" class="lang-btn active" data-lang="fr" aria-pressed="true" aria-label="Français">
      <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <rect width="213.3" height="480" fill="#0055A4"/>
        <rect x="213.3" width="213.3" height="480" fill="#FFFFFF"/>
        <rect x="426.6" width="213.4" height="480" fill="#EF4135"/>
      </svg>
      FR
    </button>
    <button onclick="switchLanguage('en')" class="lang-btn" data-lang="en" aria-pressed="false" aria-label="English">
      <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <rect width="640" height="480" fill="#012169"/>
        <path fill="#FFF" d="M0 0l640 480M640 0L0 480" stroke-width="60"/>
        <path fill="#C8102E" d="M0 0l640 480M640 0L0 480" stroke-width="40"/>
        <path fill="#FFF" d="M320 0v480M0 240h640" stroke-width="80"/>
        <path fill="#C8102E" d="M320 0v480M0 240h640" stroke-width="50"/>
      </svg>
      EN
    </button>
  </div>

  <nav role="navigation" aria-label="Navigation principale">
    <img src="images/logo.jpg" alt="Logo Cabinet Lucie International" class="logo">
    <button id="nav-accueil" class="active" aria-label="Aller à la section Accueil" aria-current="page">Accueil</button>
    <button id="nav-apropos" aria-label="Aller à la section À propos">À propos</button>
    <button id="nav-services" aria-label="Aller à la section Services">Services</button>
    <button id="nav-neuro-synchronisateur" aria-label="Aller à la section Neuro-Synchronisateur">Neuro-Synchronisateur</button>
    <button id="nav-ressources" aria-label="Aller à la section Ressources">Ressources</button>
    <button id="nav-actualites" aria-label="Aller à la section Actualités">Actualités</button>
    <button id="nav-contact" aria-label="Aller à la section Contact">Contact</button>
    <button id="nav-espace-client" aria-label="Aller à la section Espace Client">Espace Client</button>
  </nav>
