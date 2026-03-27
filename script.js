/* ==============================
   CABINET LUCIE INTERNATIONAL
   script.js
   ============================== */

// ── CANVAS HERO ANIMATION ──────────────────────────────────────────
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');

let nodes = [], W, H;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', () => { resize(); initNodes(); });

function initNodes() {
  nodes = [];
  const count = Math.min(60, Math.floor(W * H / 18000));
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
      r: Math.random() * 2 + 1
    });
  }
}
initNodes();

function draw() {
  ctx.clearRect(0, 0, W, H);
  // connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
      const d = Math.sqrt(dx*dx + dy*dy);
      if (d < 150) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(13,184,160,${(1 - d/150) * .18})`;
        ctx.lineWidth = 1;
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }
  // nodes
  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(13,184,160,.55)';
    ctx.fill();
    n.x += n.vx; n.y += n.vy;
    if (n.x < 0 || n.x > W) n.vx *= -1;
    if (n.y < 0 || n.y > H) n.vy *= -1;
  });
  requestAnimationFrame(draw);
}
draw();

// ── NAVBAR SCROLL ──────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── BURGER MENU ────────────────────────────────────────────────────
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navMenu.classList.toggle('open');
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.nav-menu a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── SMOOTH SCROLL ──────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── REVEAL ON SCROLL ───────────────────────────────────────────────
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

// ── COUNTER ANIMATION ──────────────────────────────────────────────
function animateCount(el) {
  const target = parseInt(el.dataset.to);
  const suffix = el.nextElementSibling?.classList.contains('hstat-lbl') ? '' : '';
  const duration = 1800;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const value = Math.floor(ease * target);
    el.textContent = value >= 1000 ? (value).toLocaleString('fr-FR') : value;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target >= 1000 ? target.toLocaleString('fr-FR') : target;
  };
  requestAnimationFrame(step);
}

const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hstat-num[data-to]').forEach(el => counterIO.observe(el));

// ── TABS (Neuro-Synchronisateur) ───────────────────────────────────
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.neuro-content');
    parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    parent.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const pane = document.getElementById('tab-' + btn.dataset.tab);
    if (pane) pane.classList.add('active');
  });
});

// ── TESTIMONIALS SLIDER ────────────────────────────────────────────
const track = document.getElementById('temoTrack');
const prevBtn = document.getElementById('temoPrev');
const nextBtn = document.getElementById('temoNext');
const dotsContainer = document.getElementById('temoDots');

if (track) {
  const slides = track.querySelectorAll('.temo');
  let current = 0;
  let autoTimer;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'temo-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Témoignage ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(n) {
    current = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.temo-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current));
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5500);
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Touch swipe
  let startX = 0;
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  });

  resetAuto();
}

// ── BILAN COGNITIF WIZARD ──────────────────────────────────────────
const bilanForm = document.getElementById('bilanForm');
const bilanPrev = document.getElementById('bilanPrev');
const bilanNext = document.getElementById('bilanNext');
const bilanSubmit = document.getElementById('bilanSubmit');
const stepInds = document.querySelectorAll('.bstep-ind');
const stepContents = document.querySelectorAll('.bstep-content');
let currentStep = 1;
const totalSteps = 5;

function updateBilanUI() {
  stepContents.forEach((s, i) => {
    s.classList.toggle('active', i + 1 === currentStep);
  });
  stepInds.forEach((s, i) => {
    const step = i + 1;
    s.classList.toggle('active', step === currentStep);
    s.classList.toggle('done', step < currentStep);
  });

  bilanPrev.style.display = currentStep > 1 && currentStep < totalSteps ? 'inline-flex' : 'none';
  bilanNext.style.display = currentStep < totalSteps - 1 ? 'inline-flex' : 'none';
  bilanSubmit.style.display = currentStep === totalSteps - 1 ? 'inline-flex' : 'none';

  if (currentStep === totalSteps) {
    bilanPrev.style.display = 'none';
    bilanNext.style.display = 'none';
    bilanSubmit.style.display = 'none';
  }
}

function validateStep(step) {
  const content = document.getElementById('bstep' + step);
  if (!content) return true;
  const required = content.querySelectorAll('[required]');
  for (const el of required) {
    if (el.type === 'radio') {
      const name = el.name;
      const checked = content.querySelector(`input[name="${name}"]:checked`);
      if (!checked) {
        showToast('⚠️ Veuillez répondre à toutes les questions');
        return false;
      }
    } else if (!el.value.trim()) {
      el.focus();
      showToast('⚠️ Veuillez remplir tous les champs obligatoires');
      return false;
    }
  }
  return true;
}

bilanNext?.addEventListener('click', () => {
  if (!validateStep(currentStep)) return;
  if (currentStep < totalSteps - 1) { currentStep++; updateBilanUI(); }
});

bilanPrev?.addEventListener('click', () => {
  if (currentStep > 1) { currentStep--; updateBilanUI(); }
});

bilanForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateStep(currentStep)) return;
  currentStep = totalSteps;
  updateBilanUI();
  showBilanResults();
});

function showBilanResults() {
  const data = new FormData(bilanForm);
  // Score calculations
  const memFields = ['m1','m2','m3','m4','m5','m6','m7','m8'];
  const physFields = ['p1','p2','p3','p4','p5','p6','p7','p8'];
  const charFields = ['c1','c2','c3','c4','c5','c6','c7','c8'];

  const score = (fields) => {
    let s = 0;
    fields.forEach(f => s += parseInt(data.get(f) || 0));
    return Math.round((s / fields.length) * 100);
  };

  const memScore = score(memFields);
  const physScore = score(physFields);
  const charScore = score(charFields);
  const globalScore = Math.round((memScore + physScore + charScore) / 3);

  const label = globalScore >= 75 ? 'Excellent' : globalScore >= 55 ? 'Bon' : globalScore >= 35 ? 'À améliorer' : 'À renforcer';
  const color = globalScore >= 75 ? '#0db8a0' : globalScore >= 55 ? '#1a6cf0' : globalScore >= 35 ? '#f39c12' : '#c0392b';

  const recos = [];
  if (memScore < 60) recos.push('Un accompagnement en coaching scolaire ou individuel pour booster votre mémoire et concentration');
  if (physScore < 60) recos.push('Des séances de gestion du stress et de récupération énergétique avec le Neuro-Synchronisateur');
  if (charScore < 60) recos.push('Un travail sur la gestion émotionnelle et le développement de l\'intelligence relationnelle');
  if (globalScore >= 70) recos.push('Votre profil est solide. Des sessions de coaching avancé pour aller encore plus loin !');

  const container = document.getElementById('bilanResults');
  container.innerHTML = `
    <div class="bilan-results-card">
      <div style="width:100px;height:100px;border-radius:50%;background:conic-gradient(${color} ${globalScore}%, var(--mid) 0%);
        display:flex;align-items:center;justify-content:center;margin:0 auto 1.2rem;
        box-shadow: inset 0 0 0 14px var(--card), 0 0 40px ${color}40;
        font-family:var(--ff-serif);font-size:1.5rem;font-weight:700;color:white;">
        ${globalScore}%
      </div>
      <h3>Résultat : <span style="color:${color}">${label}</span></h3>
      <p>Bilan établi pour <strong style="color:white">${data.get('prenom') || ''} ${data.get('nom') || ''}</strong></p>
      <div class="score-grid">
        <div class="score-item">
          <div class="score-circle" style="--pct:${memScore}%;background:conic-gradient(#1a6cf0 ${memScore}%, var(--mid) 0%)">${memScore}%</div>
          <h4>Mémoire & Concentration</h4>
        </div>
        <div class="score-item">
          <div class="score-circle" style="--pct:${physScore}%;background:conic-gradient(#0db8a0 ${physScore}%, var(--mid) 0%)">${physScore}%</div>
          <h4>Énergie & Physique</h4>
        </div>
        <div class="score-item">
          <div class="score-circle" style="--pct:${charScore}%;background:conic-gradient(#7c3af5 ${charScore}%, var(--mid) 0%)">${charScore}%</div>
          <h4>Personnalité & Caractère</h4>
        </div>
      </div>
      <div class="reco-box">
        <h4><i class="fas fa-lightbulb" style="color:var(--teal)"></i> Recommandations personnalisées</h4>
        <ul>${recos.map(r => `<li><i class="fas fa-check-circle"></i> ${r}</li>`).join('')}</ul>
      </div>
      <a href="#contact" class="btn-primary" style="display:inline-flex;margin:0 auto">
        <i class="fas fa-calendar-check"></i> Prendre rendez-vous avec Dr. Degla
      </a>
    </div>
  `;
  container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

// ── CONTACT FORM ───────────────────────────────────────────────────
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('[type="submit"]');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
  btn.disabled = true;
  setTimeout(() => {
    showToast('✅ Message envoyé ! Dr. Degla vous recontactera très bientôt.');
    this.reset();
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer ma demande';
    btn.disabled = false;
  }, 1500);
});

// ── NEWSLETTER FORM ────────────────────────────────────────────────
document.getElementById('nlForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  showToast('📬 Merci ! Vous êtes abonné(e) à notre newsletter.');
  this.reset();
});

// ── TOAST ──────────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}
window.showToast = showToast;

// ── ACTIVE NAV LINKS ON SCROLL ─────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

const navIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.opacity = a.getAttribute('href') === '#' + entry.target.id ? '1' : '';
        a.style.color = a.getAttribute('href') === '#' + entry.target.id ? 'white' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navIO.observe(s));
