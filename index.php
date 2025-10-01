<?php include 'header.php'; ?>

<main id="main-content" role="main">
    <!-- Accueil -->
    <section id="accueil-section" class="hero-section" role="region" aria-labelledby="accueil-heading">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-text">
            <h1 id="accueil-heading" class="hero-title">Cabinet Lucie International</h1>
            <h2 class="hero-subtitle">Coaching & Neurosciences Appliquées</h2>
            <p class="hero-description">Avec Dr. Hermann Degla, améliorez votre cerveau et transformez votre vie grâce aux dernières avancées en neurosciences.</p>
            <div class="hero-features">
              <div class="feature-item">
                <i class="fas fa-brain"></i>
                <span>Neurosciences Appliquées</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-leaf"></i>
                <span>Solutions Naturelles</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-heart"></i>
                <span>Accompagnement Personnalisé</span>
              </div>
            </div>
            <div class="cta-buttons">
              <button class="btn-cta primary" onclick="showSection(5)">Faire un bilan gratuit</button>
              <button class="btn-cta secondary" onclick="showSection(1)">Découvrir nos services</button>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-stats">
              <div class="stat">
                <div class="stat-number">5000+</div>
                <div class="stat-label">Patients accompagnés</div>
              </div>
              <div class="stat">
                <div class="stat-number">20+</div>
                <div class="stat-label">Années d'expérience</div>
              </div>
              <div class="stat">
                <div class="stat-number">98%</div>
                <div class="stat-label">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-preview">
        <div class="container">
          <div class="about-grid">
            <div class="about-text">
              <h3>Notre approche révolutionnaire</h3>
              <p>Expert en neurosciences appliquées et en coaching cérébral, nous avons mis au point des méthodes naturelles parmi les plus efficaces du marché.</p>
              <p>Notre travail est véritablement à la pointe des médecines naturelles et alternatives. Des milliers de personnes améliorent leur vie et leur santé jour après jour avec nos méthodes naturelles.</p>
              <a href="#" onclick="showSection(7)" class="learn-more-link">En savoir plus sur notre approche <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="about-image">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80" alt="Neurosciences appliquées" />
            </div>
          </div>
        </div>
      </div>

      <div class="services-preview">
        <div class="container">
          <h3>Nos domaines d'expertise</h3>
          <div class="services-grid">
            <div class="service-preview-card" onclick="showSection(1)">
              <i class="fas fa-user"></i>
              <h4>Coaching Individuel</h4>
              <p>Accompagnement personnalisé pour votre développement</p>
            </div>
            <div class="service-preview-card" onclick="showSection(1)">
              <i class="fas fa-graduation-cap"></i>
              <h4>Coaching Scolaire</h4>
              <p>Soutien aux élèves et étudiants</p>
            </div>
            <div class="service-preview-card" onclick="showSection(1)">
              <i class="fas fa-building"></i>
              <h4>Coaching Entreprise</h4>
              <p>Formation et coaching en entreprise</p>
            </div>
            <div class="service-preview-card" onclick="showSection(1)">
              <i class="fas fa-brain"></i>
              <h4>Accompagnement Spécialisé</h4>
              <p>Solutions adaptées à vos besoins</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter signup -->
      <div class="newsletter-section">
        <div class="container">
          <h3>Restez informé</h3>
          <p>Inscrivez-vous à notre newsletter pour recevoir les dernières actualités en neurosciences et coaching.</p>
          <form class="newsletter-form wpforms-form" id="newsletter-form">
            <input type="email" placeholder="Votre email" required>
            <button type="submit" class="btn-cta">S'inscrire</button>
          </form>
        </div>
      </div>
    </section>

    <!-- À propos -->
    <section id="apropos-section" class="hidden" role="region" aria-labelledby="apropos-heading">
      <h2 id="apropos-heading">À propos</h2>

      <!-- Logos du cabinet -->
      <div class="cabinet-logos">
        <h3>Nos Affiliations</h3>
        <div class="logos-grid">
          <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=200&q=80" alt="Association Médicale Française" />
          <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=200&q=80" alt="Société Française de Neurologie" />
          <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=200&q=80" alt="Ordre des Médecins" />
          <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=200&q=80" alt="Certification Qualité" />
        </div>
      </div>

      <!-- Médecin en chef -->
      <div class="chief-doctor">
        <h3>Médecin en Chef</h3>
        <div class="doctor-card">
          <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" alt="Dr. Hermann Degla" />
          <div class="doctor-details">
            <h4>Dr. Hermann Degla</h4>
            <p><strong>Poste :</strong> Neurologue et Neurocoach certifié</p>
            <p><strong>Études :</strong> MD en Neurologie, Université de Paris. Spécialisation en Neurosciences Appliquées.</p>
            <p>Le Dr. Hermann Degla vous accompagne dans l'évaluation et l'amélioration de vos capacités cognitives. Avec plus de 20 ans d'expérience, il a traité plus de 5000 patients et fondé son cabinet en 2004.</p>
            <div class="stats">
              <div class="stat-item">
                <h3>5000+</h3>
                <p>Patients traités</p>
              </div>
              <div class="stat-item">
                <h3>20</h3>
                <p>Années d'expérience</p>
              </div>
              <div class="stat-item">
                <h3>2004</h3>
                <p>Année de fondation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Équipe -->
      <div class="team-section">
        <h3>Notre Équipe</h3>
        <div class="team-grid">
          <div class="team-member">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80" alt="Dr. Marie Dubois" />
            <h4>Dr. Marie Dubois</h4>
            <p><strong>Poste :</strong> Neurologue</p>
            <p><strong>Études :</strong> MD en Neurologie, Université de Paris. Formation en Imagerie Cérébrale.</p>
          </div>
          <div class="team-member">
            <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80" alt="Sophie Martin" />
            <h4>Sophie Martin</h4>
            <p><strong>Poste :</strong> Infirmière spécialisée</p>
            <p><strong>Études :</strong> Diplôme d'État d'Infirmière, Formation complémentaire en Neurologie.</p>
          </div>
          <div class="team-member">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" alt="Dr. Pierre Leroy" />
            <h4>Dr. Pierre Leroy</h4>
            <p><strong>Poste :</strong> Psychologue</p>
            <p><strong>Études :</strong> Doctorat en Psychologie Clinique, Spécialisation en Santé Mentale.</p>
          </div>
          <div class="team-member">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" alt="Alice Bernard" />
            <h4>Alice Bernard</h4>
            <p><strong>Poste :</strong> Assistante médicale</p>
            <p><strong>Études :</strong> BTS Métiers de la Santé, Formation en Administration Médicale.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services-section" class="hidden" role="region" aria-labelledby="services-heading">
      <h2 id="services-heading">Nos Services</h2>
      <div id="services-list" class="grid"></div>

      <div id="service-details" class="hidden">
        <button class="btn-back" onclick="showServicesList()">← Retour aux services</button>
        <h3 id="detail-title"></h3>
        <img id="detail-image" src="" alt="" />
        <div id="detail-description"></div>
      </div>
    </section>

    <!-- Neuro-Synchronisateur -->
    <section id="neuro-synchronisateur-section" class="hidden" role="region" aria-labelledby="neuro-heading">
      <h2 id="neuro-heading">Le Neuro-Synchronisateur</h2>
      <div class="neuro-sync-content">
        <div class="neuro-sync-intro">
          <h3>Technologie Révolutionnaire</h3>
          <p>Le Neuro-Synchronisateur est un dispositif innovant qui utilise les ondes cérébrales pour harmoniser les hémisphères gauche et droit du cerveau, favorisant ainsi un état de cohérence mentale optimale.</p>
          <div class="neuro-sync-features">
            <div class="feature">
              <i class="fas fa-sync"></i>
              <h4>Synchronisation Hémisphérique</h4>
              <p>Harmonise les deux hémisphères cérébraux pour une meilleure intégration cognitive.</p>
            </div>
            <div class="feature">
              <i class="fas fa-brain"></i>
              <h4>Optimisation Neuronale</h4>
              <p>Améliore les connexions synaptiques et la plasticité cérébrale.</p>
            </div>
            <div class="feature">
              <i class="fas fa-peace"></i>
              <h4>Réduction du Stress</h4>
              <p>Diminue l'activité du système nerveux sympathique pour un état de relaxation profonde.</p>
            </div>
          </div>
        </div>
        <div class="neuro-sync-benefits">
          <h3>Bénéfices</h3>
          <ul>
            <li>Amélioration de la concentration et de la mémoire</li>
            <li>Réduction du stress et de l'anxiété</li>
            <li>Meilleure prise de décision</li>
            <li>Augmentation de la créativité</li>
            <li>Optimisation des performances cognitives</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Ressources -->
    <section id="ressources-section" class="hidden" role="region" aria-labelledby="ressources-heading">
      <h2 id="ressources-heading">Ressources</h2>
      <div class="resources-content">
        <div class="resource-categories">
          <div class="resource-category">
            <h3>Articles Scientifiques</h3>
            <div class="resource-list">
              <div class="resource-item">
                <h4>Les Neurosciences Appliquées au Coaching</h4>
                <p>Découvrez comment les dernières découvertes en neurosciences révolutionnent le coaching personnel.</p>
                <a href="#" class="resource-link">Lire l'article</a>
              </div>
              <div class="resource-item">
                <h4>Plasticité Cérébrale et Développement Personnel</h4>
                <p>Comment votre cerveau peut se reprogrammer pour atteindre vos objectifs.</p>
                <a href="#" class="resource-link">Lire l'article</a>
              </div>
            </div>
          </div>
          <div class="resource-category">
            <h3>Vidéos Éducatives</h3>
            <div class="resource-list">
              <div class="resource-item">
                <h4>Comprendre le Fonctionnement du Cerveau</h4>
                <p>Une vidéo explicative sur les mécanismes cérébraux fondamentaux.</p>
                <a href="#" class="resource-link">Voir la vidéo</a>
              </div>
            </div>
          </div>
          <div class="resource-category">
            <h3>Outils Pratiques</h3>
            <div class="resource-list">
              <div class="resource-item">
                <h4>Questionnaire d'Auto-Évaluation</h4>
                <p>Évaluez votre état cognitif actuel avec notre questionnaire détaillé.</p>
                <a href="#" onclick="showSection(5)" class="resource-link">Faire le test</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Actualités & Événements -->
    <section id="actualites-section" class="hidden" role="region" aria-labelledby="actualites-heading">
      <h2 id="actualites-heading">Actualités & Événements</h2>
      <div class="news-events-content">
        <div class="news-grid">
          <div class="news-item">
            <div class="news-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="Conférence neurosciences" />
            </div>
            <div class="news-content">
              <h3>Conférence sur les Neurosciences Appliquées</h3>
              <p class="news-date">15 Mars 2024</p>
              <p>Découvrez les dernières avancées en neurosciences et leur application pratique dans le coaching et le développement personnel.</p>
              <a href="#" class="news-link">En savoir plus</a>
            </div>
          </div>
          <div class="news-item">
            <div class="news-image">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80" alt="Atelier coaching" />
            </div>
            <div class="news-content">
              <h3>Atelier de Coaching Cérébral</h3>
              <p class="news-date">22 Avril 2024</p>
              <p>Participez à notre atelier pratique sur les techniques de coaching basées sur les neurosciences.</p>
              <a href="#" class="news-link">S'inscrire</a>
            </div>
          </div>
        </div>
        <div class="upcoming-events">
          <h3>Événements à Venir</h3>
          <div class="event-list">
            <div class="event-item">
              <div class="event-date">
                <span class="day">15</span>
                <span class="month">Mai</span>
              </div>
              <div class="event-details">
                <h4>Webinaire: Le Cerveau et le Stress</h4>
                <p>Apprenez à gérer le stress grâce aux neurosciences.</p>
              </div>
            </div>
            <div class="event-item">
              <div class="event-date">
                <span class="day">10</span>
                <span class="month">Juin</span>
              </div>
              <div class="event-details">
                <h4>Formation Coaching Entreprise</h4>
                <p>Programme complet pour les professionnels du coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bilan -->
    <section id="bilan-section" class="hidden" role="region" aria-labelledby="bilan-heading">
      <h2 id="bilan-heading">BILAN D'ÉVALUATION</h2>
      <form id="bilanForm" class="wpforms-form">
        <div class="bilan-content">
          <div class="personal-info">
            <h3>Informations personnelles</h3>
            <div class="form-row">
              <label for="nom">Nom *</label>
              <input type="text" id="nom" name="nom" required aria-required="true">
            </div>
            <div class="form-row">
              <label for="prenom">Prénom *</label>
              <input type="text" id="prenom" name="prenom" required aria-required="true">
            </div>
            <div class="form-row">
              <label for="age">Âge *</label>
              <input type="number" id="age" name="age" min="1" max="120" required aria-required="true">
            </div>
            <div class="form-row">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required aria-required="true">
            </div>
            <div class="form-row">
              <label for="sexe">Sexe</label>
              <select id="sexe" name="sexe">
                <option value="">Choisir</option>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div class="form-row">
              <label for="taille">Taille (m)</label>
              <input type="number" id="taille" name="taille" step="0.01" min="0.5" max="3">
            </div>
            <div class="form-row">
              <label for="poids">Poids (Kg)</label>
              <input type="number" id="poids" name="poids" min="1" max="300">
            </div>
            <div class="form-row">
              <label for="priseCharge">Êtes-vous sous prise en charge médicale ?</label>
              <select id="priseCharge" name="priseCharge">
                <option value="">Choisir</option>
                <option value="oui">Oui</option>
                <option value="non">Non</option>
              </select>
            </div>
            <div class="form-row">
              <label for="medicaments">Si oui, quels médicaments prenez-vous ou avez-vous pris dernièrement ?</label>
              <textarea id="medicaments" name="medicaments" rows="3"></textarea>
            </div>
            <div class="form-row">
              <label for="dernierRDV">Votre dernier rendez-vous chez votre médecin traitant</label>
              <input type="date" id="dernierRDV" name="dernierRDV">
            </div>
            <div class="form-row">
              <label for="symptomes">De quoi aviez-vous souffert récemment ?</label>
              <textarea id="symptomes" name="symptomes" rows="3"></textarea>
            </div>
          </div>

          <h3>1ère partie</h3>
        <p>Instruction : Répondez à chaque question en cochant la case « oui » ou « non » selon que vous êtes d'accord ou non avec l'énoncé. Si vous hésitez pour une réponse, tenez compte de votre état le plus courant. Par exemple, si vous n'êtes pas en forme aujourd'hui parce que vous avez mal dormi, répondez sur la base de votre condition habituelle.</p>

        <h4>1.A.</h4>
        <h5>MEMOIRE ET CAPACITE A CONCENTRER SON ATTENTION</h5>
        <table>
          <tr><th></th><th>Oui</th><th>Non</th></tr>
          <tr><td>En général, j'ai les idées claires</td><td><input type="radio" name="q1" value="oui"></td><td><input type="radio" name="q1" value="non"></td></tr>
          <tr><td>Je me concentre facilement</td><td><input type="radio" name="q2" value="oui"></td><td><input type="radio" name="q2" value="non"></td></tr>
          <tr><td>Je réfléchis beaucoup.</td><td><input type="radio" name="q3" value="oui"></td><td><input type="radio" name="q3" value="non"></td></tr>
          <tr><td>J'ai l'esprit rapide</td><td><input type="radio" name="q4" value="oui"></td><td><input type="radio" name="q4" value="non"></td></tr>
          <tr><td>Je fais tant de choses à la fois que je me disperse.</td><td><input type="radio" name="q5" value="oui"></td><td><input type="radio" name="q5" value="non"></td></tr>
          <tr><td>J'apprécie les débats animés.</td><td><input type="radio" name="q6" value="oui"></td><td><input type="radio" name="q6" value="non"></td></tr>
          <tr><td>J'ai beaucoup d'imagination</td><td><input type="radio" name="q7" value="oui"></td><td><input type="radio" name="q7" value="non"></td></tr>
          <tr><td>Je suis facilement critique envers moi-même</td><td><input type="radio" name="q8" value="oui"></td><td><input type="radio" name="q8" value="non"></td></tr>
        </table>
        <div class="total-row">
          <label>NOMBRE TOTAL DE OUI (Mémoire)</label>
          <input type="number" id="totalMemoire" readonly>
        </div>

        <h5>CONDITION PHYSIQUE</h5>
        <table>
          <tr><th></th><th>Oui</th><th>Non</th></tr>
          <tr><td>La plupart du temps, j'ai beaucoup d'énergie.</td><td><input type="radio" name="q9" value="oui"></td><td><input type="radio" name="q9" value="non"></td></tr>
          <tr><td>J'ai souvent une tension artérielle élevée.</td><td><input type="radio" name="q10" value="oui"></td><td><input type="radio" name="q10" value="non"></td></tr>
          <tr><td>J'ai connu des périodes où je débordais d'énergie.</td><td><input type="radio" name="q11" value="oui"></td><td><input type="radio" name="q11" value="non"></td></tr>
          <tr><td>Je suis insomniaque.</td><td><input type="radio" name="q12" value="oui"></td><td><input type="radio" name="q12" value="non"></td></tr>
          <tr><td>Bouger me revigore</td><td><input type="radio" name="q13" value="oui"></td><td><input type="radio" name="q13" value="non"></td></tr>
          <tr><td>Je n'ai généralement pas besoin de café pour démarrer le matin</td><td><input type="radio" name="q14" value="oui"></td><td><input type="radio" name="q14" value="non"></td></tr>
          <tr><td>Mes veines sont extrêmement visibles</td><td><input type="radio" name="q15" value="oui"></td><td><input type="radio" name="q15" value="non"></td></tr>
          <tr><td>Ma température corporelle est plutôt élevée.</td><td><input type="radio" name="q16" value="oui"></td><td><input type="radio" name="q16" value="non"></td></tr>
          <tr><td>Je ne m'arrête pas de travailler quand je mange</td><td><input type="radio" name="q17" value="oui"></td><td><input type="radio" name="q17" value="non"></td></tr>
          <tr><td>Je fais l'amour dès que l'occasion s'en présente</td><td><input type="radio" name="q18" value="oui"></td><td><input type="radio" name="q18" value="non"></td></tr>
          <tr><td>Je suis soupe au lait</td><td><input type="radio" name="q19" value="oui"></td><td><input type="radio" name="q19" value="non"></td></tr>
          <tr><td>Je mange uniquement parce qu'il le faut.</td><td><input type="radio" name="q20" value="oui"></td><td><input type="radio" name="q20" value="non"></td></tr>
          <tr><td>J'aime les films d'action.</td><td><input type="radio" name="q21" value="oui"></td><td><input type="radio" name="q21" value="non"></td></tr>
          <tr><td>Je me sens en pleine forme après avoir fait de l'exercice.</td><td><input type="radio" name="q22" value="oui"></td><td><input type="radio" name="q22" value="non"></td></tr>
        </table>
        <div class="total-row">
          <label>NOMBRE TOTAL DE OUI (Condition Physique)</label>
          <input type="number" id="totalPhysique" readonly>
        </div>

        <h5>PERSONNALITE</h5>
        <table>
          <tr><th></th><th>Oui</th><th>Non</th></tr>
          <tr><td>Je suis dominateur</td><td><input type="radio" name="q23" value="oui"></td><td><input type="radio" name="q23" value="non"></td></tr>
          <tr><td>Je n'ai pas toujours conscience de ce jour</td><td><input type="radio" name="q24" value="oui"></td><td><input type="radio" name="q24" value="non"></td></tr>
          <tr><td>J'ai souvent du mal à écouter les autres car j'ai tendance à vouloir imposer mes idées.</td><td><input type="radio" name="q25" value="oui"></td><td><input type="radio" name="q25" value="non"></td></tr>
          <tr><td>J'ai été plus d'une fois mêlé à des bagarres.</td><td><input type="radio" name="q26" value="oui"></td><td><input type="radio" name="q26" value="non"></td></tr>
          <tr><td>Je regarde plutôt vers l'avenir.</td><td><input type="radio" name="q27" value="oui"></td><td><input type="radio" name="q27" value="non"></td></tr>
          <tr><td>Parfois, j'échafaude des théories.</td><td><input type="radio" name="q28" value="oui"></td><td><input type="radio" name="q28" value="non"></td></tr>
          <tr><td>Les autres me voient plutôt comme un cérébral.</td><td><input type="radio" name="q29" value="oui"></td><td><input type="radio" name="q29" value="non"></td></tr>
          <tr><td>Je suis porté au rêve et au fantasme.</td><td><input type="radio" name="q30" value="oui"></td><td><input type="radio" name="q30" value="non"></td></tr>
          <tr><td>J'aime les livres d'histoires et autres ouvrages documentaires.</td><td><input type="radio" name="q31" value="oui"></td><td><input type="radio" name="q31" value="non"></td></tr>
          <tr><td>J'admire les gens ingénieux</td><td><input type="radio" name="q32" value="oui"></td><td><input type="radio" name="q32" value="non"></td></tr>
          <tr><td>J'ai parfois du mal à voir venir les gens qui feront des histoires</td><td><input type="radio" name="q33" value="oui"></td><td><input type="radio" name="q33" value="non"></td></tr>
          <tr><td>En principe, je ne me laisse pas avoir par ceux qui demandent mon aide.</td><td><input type="radio" name="q34" value="oui"></td><td><input type="radio" name="q34" value="non"></td></tr>
          <tr><td>Les autres me voient plutôt comme un esprit novateur.</td><td><input type="radio" name="q35" value="oui"></td><td><input type="radio" name="q35" value="non"></td></tr>
          <tr><td>On trouve parfois que j'ai de drôles d'idées, mais je peux toujours les justifier.</td><td><input type="radio" name="q36" value="oui"></td><td><input type="radio" name="q36" value="non"></td></tr>
          <tr><td>Je suis souvent agité ou irrité.</td><td><input type="radio" name="q37" value="oui"></td><td><input type="radio" name="q37" value="non"></td></tr>
          <tr><td>Un rien me contrarie ou me rend anxieux.</td><td><input type="radio" name="q38" value="oui"></td><td><input type="radio" name="q38" value="non"></td></tr>
          <tr><td>J'ai des fantasmes de toute puissance.</td><td><input type="radio" name="q39" value="oui"></td><td><input type="radio" name="q39" value="non"></td></tr>
          <tr><td>J'adore dépenser de l'argent.</td><td><input type="radio" name="q40" value="oui"></td><td><input type="radio" name="q40" value="non"></td></tr>
          <tr><td>Dans mes relations avec les autres, j'aime bien dormir</td><td><input type="radio" name="q41" value="oui"></td><td><input type="radio" name="q41" value="non"></td></tr>
          <tr><td>Je suis très dur avec moi-même.</td><td><input type="radio" name="q42" value="oui"></td><td><input type="radio" name="q42" value="non"></td></tr>
          <tr><td>Je réagis agressivement à la critique et suis facilement sur la défensive.</td><td><input type="radio" name="q43" value="oui"></td><td><input type="radio" name="q43" value="non"></td></tr>
        </table>
        <div class="total-row">
          <label>NOMBRE TOTAL DE OUI (Personnalité)</label>
          <input type="number" id="totalPersonnalite" readonly>
        </div>

        <h5>TRAITS DE CARACTERE</h5>
        <table>
          <tr><th></th><th>Oui</th><th>Non</th></tr>
          <tr><td>Certains trouvent que j'ai la tête dure.</td><td><input type="radio" name="q44" value="oui"></td><td><input type="radio" name="q44" value="non"></td></tr>
          <tr><td>La plupart des gens me voient comme quelqu'un qui va au bout de ce qu'il entreprend</td><td><input type="radio" name="q45" value="oui"></td><td><input type="radio" name="q45" value="non"></td></tr>
          <tr><td>Pour certains, je suis irrationnel.</td><td><input type="radio" name="q46" value="oui"></td><td><input type="radio" name="q46" value="non"></td></tr>
          <tr><td>Je suis prêt à tout pour atteindre mon but.</td><td><input type="radio" name="q47" value="oui"></td><td><input type="radio" name="q47" value="non"></td></tr>
          <tr><td>La religion m'intéresse</td><td><input type="radio" name="q48" value="oui"></td><td><input type="radio" name="q48" value="non"></td></tr>
          <tr><td>L'incompétence me met en colère.</td><td><input type="radio" name="q49" value="oui"></td><td><input type="radio" name="q49" value="non"></td></tr>
          <tr><td>Je suis exigent envers moi comme envers les autres.</td><td><input type="radio" name="q50" value="oui"></td><td><input type="radio" name="q50" value="non"></td></tr>
          <tr><td>NOMBRE TOTAL DE OUI (Traits de Caractère)</td><td><input type="number" id="totalTraits" readonly></td></tr>
        </table>

        <div style="margin-top: 2rem; text-align: center;">
          <button type="button" id="btn-reset" class="btn-submit" style="background: #dc3545; margin-right: 1rem;">Réinitialiser</button>
          <button type="submit" class="btn-submit">Soumettre le bilan</button>
        </div>
      </form>
    </section>

    <!-- Témoignages -->
    <section id="temoignages-section" class="hidden" role="region" aria-labelledby="temoignages-heading">
      <h2 id="temoignages-heading">Témoignages</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <blockquote>"Le Dr. Degla a transformé ma vie avec son approche personnalisée basée sur les neurosciences."</blockquote>
          <div class="testimonial-author">Marie L., 45 ans</div>
        </div>
        <div class="testimonial-card">
          <blockquote>"Un professionnel exceptionnel, je recommande vivement ses méthodes de coaching."</blockquote>
          <div class="testimonial-author">Paul K., 52 ans</div>
        </div>
        <div class="testimonial-card">
          <blockquote>"Grâce à ses conseils, j'ai amélioré ma mémoire et ma concentration de façon spectaculaire."</blockquote>
          <div class="testimonial-author">Sophie M., 38 ans</div>
        </div>
      </div>
    </section>

    <!-- Espace Client -->
    <section id="espace-client-section" class="hidden" role="region" aria-labelledby="espace-client-heading">
      <h2 id="espace-client-heading">Espace Client</h2>
      <div class="client-space-content">
        <div class="login-form">
          <h3>Connexion à votre espace</h3>
          <form id="loginForm" class="wpforms-form">
            <div class="form-group">
              <label for="username">Email</label>
              <input type="email" id="username" name="username" required>
            </div>
            <div class="form-group">
              <label for="password">Mot de passe</label>
              <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="btn-submit">Se connecter</button>
          </form>
          <p class="forgot-password"><a href="#">Mot de passe oublié ?</a></p>
          <p class="register-link">Pas encore de compte ? <a href="#">S'inscrire</a></p>
        </div>
        <div class="client-features">
          <h3>Accès réservé</h3>
          <ul>
            <li>Suivi de vos consultations</li>
            <li>Résultats de vos bilans</li>
            <li>Ressources exclusives</li>
            <li>Historique de vos séances</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact-section" class="hidden" role="region" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contactez-nous</h2>
      <div class="contact-container">
        <div class="contact-form">
          <h3>Envoyez-nous un message</h3>
          <form id="contactForm" class="wpforms-form">
            <div class="form-group">
              <label for="name">Nom complet *</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Téléphone</label>
              <input type="tel" id="phone" name="phone">
            </div>
            <div class="form-group">
              <label for="subject">Sujet</label>
              <select id="subject" name="subject">
                <option value="">Choisissez un sujet</option>
                <option value="consultation">Demande de consultation</option>
                <option value="bilan">Bilan cognitif</option>
                <option value="coaching">Coaching en neuroscience</option>
                <option value="formation">Formation</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn-submit">Envoyer le message</button>
          </form>
        </div>
        <div class="contact-info">
          <h3>Informations de contact</h3>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <strong>Adresse</strong><br>
              Cabinet Lucie International<br>
              123 Avenue de la Santé<br>
              75000 Paris, France
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <div>
              <strong>Téléphone</strong><br>
              <a href="tel:+2290196964648">+229 01 96 96 4648</a><br>
              <a href="tel:+2290163906162">+229 01 63 90 6162</a><br>
              <a href="tel:+2290191493636">+229 01 91 49 3636</a><br>
              <a href="tel:+2290142166862">+229 01 42 16 6862</a><br>
              <a href="tel:+33758387534">+33 7 58 38 75 34</a>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <div>
              <strong>Email</strong><br>
              contact@cabinetlucie.com<br>
              info@cabinetlucie.com
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <div>
              <strong>Horaires d'ouverture</strong><br>
              Lundi - Vendredi: 9h00 - 18h00<br>
              Samedi: 9h00 - 12h00<br>
              Dimanche: Fermé
            </div>
          </div>
          <div class="social-media">
            <h4>Suivez-nous</h4>
            <a href="#" class="social-link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="map-container">
        <h3>Notre localisation</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1640992800000!5m2!1sfr!2sfr"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  </main>

<?php include 'footer.php'; ?>
