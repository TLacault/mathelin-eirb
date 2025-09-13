<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <img src="@/assets/logo.jpg" alt="Logo" class="nav-logo-img" />
          <h1 class="club-name">Mathelin'eirb</h1>
        </div>

        <div class="nav-menu" :class="{ active: mobileMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMobileMenu">
            Accueil
          </router-link>
          <router-link to="/membres" class="nav-link" @click="closeMobileMenu">
            Membres
          </router-link>
        </div>

        <div class="nav-social">
          <a
            href="#"
            class="social-link telegram"
            title="Rejoignez notre Telegram"
          >
            <i class="fab fa-telegram"></i>
          </a>
        </div>

        <div class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 mathelin'eirb - Club étudiant</p>
        <p>🦕 Créé avec passion par Matheline et ses amis 🦕</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

@font-face {
  font-family: "Jurassic Park";
  src: url("@/assets/font/Jurassic_Park.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.6;
}

:root {
  /* Prehistoric/Jungle Color Palette */
  --primary-green: #2d5016;
  --secondary-green: #4a7c59;
  --accent-green: #6b8e23;
  --jungle-green: #228b22;
  --dino-brown: #8b4513;
  --dino-orange: #ff8c00;
  --dino-red: #dc143c;
  --earth-brown: #a0522d;
  --sky-blue: #87ceeb;
  --text-dark: #2c3e50;
  --text-light: #ffffff;
  --bg-light: #f5f5dc;
  --shadow-color: rgba(0, 0, 0, 0.2);
}

#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-dark);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, var(--bg-light) 0%, #e6f3ff 100%);
}

/* Navigation Styles */
.navbar {
  background: linear-gradient(
    90deg,
    var(--primary-green) 0%,
    var(--secondary-green) 100%
  );
  box-shadow: 0 4px 20px var(--shadow-color);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-logo-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--text-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.nav-logo-img:hover {
  transform: scale(1.1) rotate(5deg);
}

.club-name {
  font-family: "Jurassic Park", cursive;
  font-size: 2.2rem;
  font-weight: normal;
  color: var(--text-light);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-link.router-link-exact-active {
  background: var(--dino-orange);
  box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
}

.nav-social {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--dino-orange);
  color: var(--text-light);
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 6px 20px rgba(255, 140, 0, 0.4);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--text-light);
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }

  .club-name {
    font-size: 1.4rem;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: var(--primary-green);
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    transition: left 0.3s ease;
    gap: 1rem;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-link {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    width: 80%;
    text-align: center;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
}

/* Main Content */
.main-content {
  flex: 1;
  min-height: calc(100vh - 140px);
}

/* Footer */
.footer {
  background: var(--primary-green);
  color: var(--text-light);
  text-align: center;
  padding: 1.5rem 0;
  margin-top: auto;
}

.footer-content p {
  margin: 0.5rem 0;
  font-weight: 600;
}

/* Smooth Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
