// Navigation management for multi-page site
class NavManager {
  constructor() {
    this.navLinks = document.querySelectorAll('nav a');
    this.currentPage = this.getCurrentPage();
    this.setActiveNav();
  }

  getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    return page;
  }

  setActiveNav() {
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('.html', '').replace('./', '');
      const isActive = href === this.currentPage || (this.currentPage === 'index' && href === 'accueil');
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  }
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', () => {
  new NavManager();
});
