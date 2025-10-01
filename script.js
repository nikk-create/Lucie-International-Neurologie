// ===== CONFIGURATION ET VARIABLES GLOBALES =====
const CONFIG = {
  ANIMATION_DURATION: 600,
  STORAGE_KEYS: {
    PREFERENCES: 'neuro_preferences',
    VISITED_SECTIONS: 'neuro_visited_sections',
    USER_SESSION: 'neuro_user_session',
    NEWSLETTER_SUBSCRIBERS: 'neuro_newsletter',
    USERS: 'neuro_users',
    APPOINTMENTS: 'neuro_appointments'
  },
  ERROR_MESSAGES: {
    ELEMENT_NOT_FOUND: 'Élément non trouvé',
    SERVICE_LOAD_ERROR: 'Erreur lors du chargement des services',
    NETWORK_ERROR: 'Erreur de connexion réseau',
    PAYMENT_ERROR: 'Erreur de paiement',
    AUTH_ERROR: 'Erreur d\'authentification'
  },
  STRIPE_PUBLIC_KEY: 'pk_test_51EXAMPLE...', // Replace with actual test key
  PAYMENT_AMOUNTS: {
    formation: 29900, // €299
    casque: 9900    // €99
  }
};

// ===== GESTION DE LA NAVIGATION =====
class NavigationManager {
  constructor() {
    this.navButtons = document.querySelectorAll('nav button');
    this.sections = [
      document.getElementById('accueil-section'),
      document.getElementById('apropos-section'),
      document.getElementById('services-section'),
      document.getElementById('neuro-synchronisateur-section'),
      document.getElementById('ressources-section'),
      document.getElementById('actualites-section'),
      document.getElementById('rendezvous-section'),
      document.getElementById('contact-section'),
      document.getElementById('espace-client-section'),
      document.getElementById('bilan-section'),
      document.getElementById('temoignages-section')
    ];
    this.currentIndex = 0;
    this.isTransitioning = false;
    this.debounceTimer = null;

    this.init();
  }

  init() {
    // Navigation par clic
    this.navButtons.forEach((btn, i) => {
      btn.addEventListener('click', () => this.showSection(i));
      btn.addEventListener('keydown', (e) => this.handleKeyDown(e, i));
    });

    // Navigation au clavier (flèches)
    document.addEventListener('keydown', (e) => this.handleGlobalKeyDown(e));

    // Restaurer la dernière section visitée
    this.restoreLastSection();
  }

  showSection(index, direction = 'forward') {
    if (this.isTransitioning || index === this.currentIndex) return;

    this.isTransitioning = true;
    const currentSection = this.sections[this.currentIndex];
    const newSection = this.sections[index];

    if (!currentSection || !newSection) {
      this.showError(CONFIG.ERROR_MESSAGES.ELEMENT_NOT_FOUND);
      return;
    }

    // Animation de sortie
    currentSection.classList.remove('fade-in');
    currentSection.classList.add('fade-out');

    // Animation d'entrée après délai
    setTimeout(() => {
      currentSection.classList.add('hidden');
      currentSection.classList.remove('fade-out');

      newSection.classList.remove('hidden', 'fade-out');
      newSection.classList.add('fade-in');

      // Mettre à jour l'état
      this.updateActiveButton(index);
      this.currentIndex = index;
      this.saveCurrentSection(index);

      // Focus sur le titre de la nouvelle section pour l'accessibilité
      this.focusSectionTitle(newSection);

      this.isTransitioning = false;
    }, CONFIG.ANIMATION_DURATION);
  }

  updateActiveButton(index) {
    this.navButtons.forEach((btn, i) => {
      const isActive = i === index;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  }

  focusSectionTitle(section) {
    const title = section.querySelector('h1, h2, h3');
    if (title) {
      title.setAttribute('tabindex', '-1');
      title.focus();
      title.addEventListener('blur', () => title.removeAttribute('tabindex'), { once: true });
    }
  }

  handleKeyDown(e, index) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.showSection(index);
    }
  }

  handleGlobalKeyDown(e) {
    // Navigation avec les flèches seulement si pas d'input focus
    if (document.activeElement.tagName === 'INPUT') return;

    if (e.key === 'ArrowLeft' && this.currentIndex > 0) {
      e.preventDefault();
      this.showSection(this.currentIndex - 1, 'backward');
    } else if (e.key === 'ArrowRight' && this.currentIndex < this.navButtons.length - 1) {
      e.preventDefault();
      this.showSection(this.currentIndex + 1, 'forward');
    }
  }

  saveCurrentSection(index) {
    try {
      localStorage.setItem(CONFIG.STORAGE_KEYS.VISITED_SECTIONS, JSON.stringify({
        lastSection: index,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.warn('Impossible de sauvegarder la section:', error);
    }
  }

  restoreLastSection() {
    try {
      const saved = localStorage.getItem(CONFIG.STORAGE_KEYS.VISITED_SECTIONS);
      if (saved) {
        const data = JSON.parse(saved);
        // Restaurer seulement si moins de 24h
        if (Date.now() - data.timestamp < 24 * 60 * 60 * 1000) {
          this.showSection(data.lastSection);
        }
      }
    } catch (error) {
      console.warn('Impossible de restaurer la section:', error);
    }
  }

  showError(message) {
    this.showNotification(message, 'error');
  }

  showSuccess(message) {
    this.showNotification(message, 'success');
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), CONFIG.ANIMATION_DURATION);
    }, 3000);
  }
}

// --- Services : affichage dynamique des cartes ---
const servicesData = {
  fr: [
    {
      title: "Coaching Individuel",
      description: "Développement personnel, gestion du stress, confiance en soi.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      page: "service3.html"
    },
    {
      title: "Coaching Scolaire et Universitaire",
      description: "Mémoire, concentration, préparation aux examens.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      page: "service4.html"
    },
    {
      title: "Coaching en Entreprise",
      description: "Leadership, performance, communication.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      page: "service5.html"
    },
    {
      title: "Formations et Ateliers",
      description: "Apprentissages pratiques en neurosciences appliquées.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
      page: "service6.html"
    },
    {
      title: "Accompagnement Spécialisé",
      description: "Troubles spécifiques : dyslexie, bégaiement, difficultés de concentration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
      page: "service1.html"
    }
  ],
  en: [
    {
      title: "Individual Coaching",
      description: "Personal development, stress management, self-confidence.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      page: "service3.html"
    },
    {
      title: "School and University Coaching",
      description: "Memory, concentration, exam preparation.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      page: "service4.html"
    },
    {
      title: "Corporate Coaching",
      description: "Leadership, performance, communication.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      page: "service5.html"
    },
    {
      title: "Training and Workshops",
      description: "Practical learning in applied neuroscience.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
      page: "service6.html"
    },
    {
      title: "Specialized Support",
      description: "Specific disorders: dyslexia, stuttering, concentration difficulties.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
      page: "service1.html"
    }
  ]
};

const servicesList = document.getElementById('services-list');
const serviceDetails = document.getElementById('service-details');
const detailTitle = document.getElementById('detail-title');
const detailImage = document.getElementById('detail-image');
const detailDescription = document.getElementById('detail-description');

// Affiche la liste des services
function renderServices() {
  const currentServices = servicesData.fr;
  servicesList.innerHTML = '';
  currentServices.forEach((srv, idx) => {
    let paymentBtn = '';
    if (idx >= 3) {
      paymentBtn = `<button class="btn-payment" onclick="initPayment('formation')">Payer maintenant (€299)</button>`;
    } else if (idx === 5) {
      paymentBtn = `<button class="btn-payment" onclick="initPayment('casque')">Payer maintenant (€99)</button>`;
    }
    const card = document.createElement('div');
    card.className = 'card fade-in';
    card.innerHTML = `
      <img src="${srv.image}" alt="${srv.title}" loading="lazy" />
      <h3>${srv.title}</h3>
      <p>${srv.description}</p>
      ${paymentBtn}
    `;
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-payment')) return;
      showServiceDetails(idx);
    });
    servicesList.appendChild(card);
  });
  servicesList.classList.remove('hidden');
  serviceDetails.classList.add('hidden');
}

// Redirige vers la page dédiée du service
function showServiceDetails(idx) {
  const currentServices = servicesData.fr;
  const srv = currentServices[idx];
  if (srv && srv.page) {
    window.location.href = srv.page;
  }
}

// Bouton retour aux services
window.showServicesList = function() {
  renderServices();
};

// Multilingual switcher
function switchLanguage(lang) {
  setLanguage(lang);
  // Re-render services with new language
  if (servicesList) renderServices();
  // Update other dynamic content if needed
  updatePageLanguage();
}

// Initialisation des services au chargement
if (servicesList) renderServices();

// --- Bilan : confirmation après soumission et calcul des totaux ---
const bilanForm = document.getElementById('bilanForm');
if (bilanForm) {
  bilanForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const confirmation = document.getElementById('confirmation');
    if (confirmation) {
      confirmation.style.display = 'block';
      setTimeout(() => { confirmation.style.display = 'none'; }, 3500);
    }
    bilanForm.reset();
    // Reset totals after form reset
    calculateAllTotals();
  });

  // Reset button functionality
  const resetBtn = document.getElementById('btn-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      bilanForm.reset();
      calculateAllTotals();
    });
  }

  // Calculate totals on radio button change
  const radioButtons = bilanForm.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => {
    radio.addEventListener('change', calculateAllTotals);
  });

  // Initial calculation
  calculateAllTotals();
}

function calculateAllTotals() {
  // Mémoire: q1 to q8
  const totalMemoire = calculateSectionTotal(['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']);
  document.getElementById('totalMemoire').value = totalMemoire;

  // Condition Physique: q9 to q22
  const totalPhysique = calculateSectionTotal(['q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20', 'q21', 'q22']);
  document.getElementById('totalPhysique').value = totalPhysique;

  // Personnalité: q23 to q43
  const totalPersonnalite = calculateSectionTotal(['q23', 'q24', 'q25', 'q26', 'q27', 'q28', 'q29', 'q30', 'q31', 'q32', 'q33', 'q34', 'q35', 'q36', 'q37', 'q38', 'q39', 'q40', 'q41', 'q42', 'q43']);
  document.getElementById('totalPersonnalite').value = totalPersonnalite;

  // Traits de Caractère: q44 to q50
  const totalTraits = calculateSectionTotal(['q44', 'q45', 'q46', 'q47', 'q48', 'q49', 'q50']);
  document.getElementById('totalTraits').value = totalTraits;
}

function calculateSectionTotal(questionNames) {
  let total = 0;
  questionNames.forEach(name => {
    const selectedRadio = document.querySelector(`input[name="${name}"]:checked`);
    if (selectedRadio && selectedRadio.value === 'oui') {
      total++;
    }
  });
  return total;
}

// --- Contact : gestion du formulaire ---
// Enhanced form validation function
function validateForm(form, fields) {
  let isValid = true;
  fields.forEach(field => {
    const input = form.querySelector(`[name="${field.name}"]`);
    if (input) {
      if (field.required && !input.value.trim()) {
        showFieldError(input, 'Ce champ est requis');
        isValid = false;
      } else if (field.type === 'email' && input.value && !field.regex.test(input.value)) {
        showFieldError(input, 'Adresse email invalide');
        isValid = false;
      } else {
        clearFieldError(input);
      }
    }
  });
  return isValid;
}

function showFieldError(input, message) {
  let error = input.parentNode.querySelector('.error-message');
  if (!error) {
    error = document.createElement('span');
    error.className = 'error-message';
    input.parentNode.appendChild(error);
  }
  error.textContent = message;
  input.classList.add('error');
}

function clearFieldError(input) {
  const error = input.parentNode.querySelector('.error-message');
  if (error) error.remove();
  input.classList.remove('error');
}

// Simulate API call
async function simulateSubmit(data, endpoint) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, 1500);
  });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const fields = [
      { name: 'name', required: true },
      { name: 'email', required: true, type: 'email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { name: 'phone', required: false },
      { name: 'message', required: true }
    ];

    if (!validateForm(contactForm, fields)) {
      window.navigationManager?.showError('Erreur lors de l\'envoi du formulaire');
      return;
    }

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Envoyer...';
    submitBtn.disabled = true;

    try {
      await simulateSubmit(data, '/contact');
      window.navigationManager?.showSuccess('Message envoyé avec succès');
      contactForm.reset();
    } catch (error) {
      window.navigationManager?.showError('Erreur lors de l\'envoi du formulaire');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      window.navigationManager?.showError('Adresse email invalide');
      return;
    }

    const submitBtn = newsletterForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'S\'inscrire...';
    submitBtn.disabled = true;

    try {
      // Simulate Mailchimp signup
      const subscribers = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.NEWSLETTER_SUBSCRIBERS) || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem(CONFIG.STORAGE_KEYS.NEWSLETTER_SUBSCRIBERS, JSON.stringify(subscribers));
      }
      window.navigationManager?.showSuccess('Inscription à la newsletter réussie');
      newsletterForm.reset();
    } catch (error) {
      window.navigationManager?.showError('Erreur lors de l\'inscription');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Rendez-vous form
const rendezvousForm = document.getElementById('rendezvousForm');
if (rendezvousForm) {
  // Set min date to today
  const dateInput = document.getElementById('rv-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  rendezvousForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const fields = [
      { name: 'nom', required: true },
      { name: 'email', required: true, type: 'email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { name: 'phone', required: false },
      { name: 'service', required: true },
      { name: 'date', required: true },
      { name: 'time', required: true },
      { name: 'message', required: false }
    ];

    if (!validateForm(rendezvousForm, fields)) {
      window.navigationManager?.showError('Veuillez corriger les erreurs dans le formulaire');
      return;
    }

    const formData = new FormData(rendezvousForm);
    const data = Object.fromEntries(formData);
    data.timestamp = Date.now();

    const submitBtn = rendezvousForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Envoyer...';
    submitBtn.disabled = true;

    try {
      // Store in localStorage
      const appointments = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.APPOINTMENTS) || '[]');
      appointments.push(data);
      localStorage.setItem(CONFIG.STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));

      // Show confirmation
      showAppointmentConfirmation(data);
      window.navigationManager?.showSuccess('Demande de rendez-vous envoyée avec succès');
      rendezvousForm.reset();
    } catch (error) {
      window.navigationManager?.showError('Erreur lors de l\'envoi de la demande');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

function showAppointmentConfirmation(data) {
  const confirmationDiv = document.getElementById('rv-confirmation');
  if (confirmationDiv) {
    confirmationDiv.innerHTML = `
      <h3>Demande de rendez-vous confirmée</h3>
      <p><strong>Nom:</strong> ${data.nom}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Heure:</strong> ${data.time}</p>
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
      <p>Nous vous contacterons bientôt pour confirmer votre rendez-vous.</p>
    `;
    confirmationDiv.classList.remove('hidden');
    setTimeout(() => {
      confirmationDiv.classList.add('hidden');
    }, 10000); // Show for 10 seconds
  }
}

// Espace Client login and register
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const logoutBtn = document.getElementById('logoutBtn');
const clientDashboard = document.getElementById('client-dashboard');
const clientNameSpan = document.getElementById('client-name');
const loginFormContainer = document.getElementById('login-form-container');
const registerFormContainer = document.getElementById('register-form-container');
const showRegisterBtn = document.getElementById('show-register-btn');
const showLoginBtn = document.getElementById('show-login-btn');

function updateClientUI(loggedIn, email = '') {
  if (loggedIn) {
    loginFormContainer.classList.add('hidden');
    registerFormContainer.classList.add('hidden');
    logoutBtn.classList.remove('hidden');
    clientDashboard.classList.remove('hidden');
    clientNameSpan.textContent = email;
  } else {
    loginFormContainer.classList.remove('hidden');
    registerFormContainer.classList.add('hidden');
    logoutBtn.classList.add('hidden');
    clientDashboard.classList.add('hidden');
    clientNameSpan.textContent = '';
  }
}

// Toggle to register form
if (showRegisterBtn) {
  showRegisterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginFormContainer.classList.add('hidden');
    registerFormContainer.classList.remove('hidden');
  });
}

// Toggle to login form
if (showLoginBtn) {
  showLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerFormContainer.classList.add('hidden');
    loginFormContainer.classList.remove('hidden');
  });
}

// Register form
if (registerForm) {
  registerForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (!name || !email || !password || !confirmPassword) {
      window.navigationManager?.showError('Tous les champs sont requis');
      return;
    }

    if (password !== confirmPassword) {
      window.navigationManager?.showError('Les mots de passe ne correspondent pas');
      return;
    }

    if (password.length < 6) {
      window.navigationManager?.showError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      window.navigationManager?.showError('Adresse email invalide');
      return;
    }

    const submitBtn = registerForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Inscription...';
    submitBtn.disabled = true;

    try {
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.USERS) || '[]');
      const existingUser = users.find(user => user.email === email);

      if (existingUser) {
        window.navigationManager?.showError('Un compte avec cet email existe déjà');
        return;
      }

      // Add new user
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem(CONFIG.STORAGE_KEYS.USERS, JSON.stringify(users));

      // Auto-login after registration
      const userSession = { email, loggedIn: true, timestamp: Date.now() };
      localStorage.setItem(CONFIG.STORAGE_KEYS.USER_SESSION, JSON.stringify(userSession));

      window.navigationManager?.showSuccess('Inscription réussie');
      updateClientUI(true, email);
      registerForm.reset();
    } catch (error) {
      window.navigationManager?.showError('Erreur lors de l\'inscription');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      window.navigationManager?.showError('Champs requis manquants');
      return;
    }

    const submitBtn = loginForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Connexion...';
    submitBtn.disabled = true;

    // Simulate auth (in production, use real backend)
    setTimeout(() => {
      // Check against stored users
      const users = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.USERS) || '[]');
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        const userSession = { email, loggedIn: true, timestamp: Date.now() };
        localStorage.setItem(CONFIG.STORAGE_KEYS.USER_SESSION, JSON.stringify(userSession));
        window.navigationManager?.showSuccess('Connexion réussie');
        updateClientUI(true, email);
        loginForm.reset();
      } else {
        window.navigationManager?.showError('Email ou mot de passe incorrect');
      }
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(CONFIG.STORAGE_KEYS.USER_SESSION);
    window.navigationManager?.showSuccess('Déconnexion réussie');
    updateClientUI(false);
  });
}

// Check auth on load
const savedSession = localStorage.getItem(CONFIG.STORAGE_KEYS.USER_SESSION);
if (savedSession) {
  const session = JSON.parse(savedSession);
  if (Date.now() - session.timestamp < 24 * 60 * 60 * 1000) { // 24h session
    updateClientUI(true, session.email);
  } else {
    localStorage.removeItem(CONFIG.STORAGE_KEYS.USER_SESSION);
    updateClientUI(false);
  }
} else {
  updateClientUI(false);
}

// Preinscription form (for services)
function showPreinscriptionForm(service) {
  // Create modal or section
  const modal = document.createElement('div');
  modal.className = 'modal preinscription-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <h3>Préinscription</h3>
      <p>Intéressé par ce service ? Laissez-nous vos coordonnées et nous vous contacterons bientôt.</p>
      <form id="preinscriptionForm">
        <input type="text" name="name" placeholder="Votre nom" required>
        <input type="email" name="email" placeholder="Votre email" required>
        <input type="text" name="service" value="${service}" readonly>
        <button type="submit">S'inscrire</button>
      </form>
      <button onclick="this.parentElement.parentElement.remove()">Fermer</button>
    </div>
  `;
  document.body.appendChild(modal);

  const preForm = document.getElementById('preinscriptionForm');
  preForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fields = [
      { name: 'name', required: true },
      { name: 'email', required: true, type: 'email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
    ];
    if (validateForm(preForm, fields)) {
      const data = Object.fromEntries(new FormData(preForm));
      // Simulate
      await simulateSubmit(data, '/preinscription');
      window.navigationManager?.showSuccess('Préinscription réussie');
      modal.remove();
    }
  });
}

// Payment with Stripe simulation
let stripe;
async function loadStripe() {
  if (!stripe) {
    const { loadStripe } = await import('https://js.stripe.com/v3/');
    stripe = await loadStripe(CONFIG.STRIPE_PUBLIC_KEY);
  }
  return stripe;
}

async function initPayment(type) {
  try {
    const stripeInstance = await loadStripe();
    if (!stripeInstance) {
      window.navigationManager?.showError(CONFIG.ERROR_MESSAGES.PAYMENT_ERROR);
      return;
    }

    const amount = CONFIG.PAYMENT_AMOUNTS[type];
    const items = [{ price: 'price_123', quantity: 1 }]; // Mock price ID

    // In production, create checkout session via backend
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    });

    const { id: sessionId } = await response.json();

    const { error } = await stripeInstance.redirectToCheckout({ sessionId });
    if (error) {
      window.navigationManager?.showError(error.message);
    }
  } catch (error) {
    window.navigationManager?.showError(CONFIG.ERROR_MESSAGES.PAYMENT_ERROR);
  }
}

// Video integration - play on view
function initVideos() {
  const videos = document.querySelectorAll('.youtube-video');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target.querySelector('iframe');
        if (iframe) {
          iframe.src += '?autoplay=1&mute=0';
        }
        observer.unobserve(entry.target);
      }
    });
  });
  videos.forEach(video => observer.observe(video));
}

// ===== FONCTIONS GLOBALES =====
let navigationManager; // Global navigation manager instance

window.showSection = function(index) {
  if (navigationManager) {
    navigationManager.showSection(index);
  }
};

// ===== INITIALISATION DE L'APPLICATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialiser le gestionnaire de navigation
  navigationManager = new NavigationManager();
  window.navigationManager = navigationManager; // Make it globally accessible

  // Initialize videos
  initVideos();

  // Améliorer l'accessibilité des cartes de services
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Service ${index + 1}: ${card.querySelector('h3')?.textContent || ''}`);

    // Navigation au clavier pour les cartes
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Lazy loading des images
  const images = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  // Gestionnaire d'erreurs global
  window.addEventListener('error', (e) => {
    console.error('Erreur JavaScript:', e.error);
    window.navigationManager?.showError('Une erreur inattendue s\'est produite. Veuillez rafraîchir la page.');
  });

  // Gestionnaire d'erreurs de réseau
  window.addEventListener('offline', () => {
    window.navigationManager?.showError('Connexion perdue. Vérifiez votre connexion internet.');
  });

  window.addEventListener('online', () => {
    window.navigationManager?.showSuccess('Connexion rétablie.');
  });

  // Améliorer les performances avec requestAnimationFrame pour les animations
  let animationId;
  const optimizedAnimations = () => {
    const elements = document.querySelectorAll('.card, nav button, .btn-back, .btn-payment');
    elements.forEach(el => {
      el.style.willChange = 'transform';
    });

    // Nettoyer après les animations
    setTimeout(() => {
      elements.forEach(el => {
        el.style.willChange = 'auto';
      });
    }, 1000);

    animationId = requestAnimationFrame(optimizedAnimations);
  };

  // Démarrer les animations optimisées
  optimizedAnimations();

  // Nettoyer au déchargement
  window.addEventListener('beforeunload', () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    // Nettoyer les timers
    if (navigationManager?.debounceTimer) {
      clearTimeout(navigationManager.debounceTimer);
    }
  });

  // Re-render services after language init
  if (servicesList) renderServices();
});
