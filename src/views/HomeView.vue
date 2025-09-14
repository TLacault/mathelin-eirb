<template>
  <div class="home">
    <!-- Hero Section with Event Banner -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-dinos">
          <span class="dino dino-1">🦕</span>
          <span class="dino dino-2">🦖</span>
          <span class="dino dino-3">🦕</span>
          <span class="dino dino-4">🦖</span>
        </div>
        <div class="floating-lights">
          <div class="light light-1"></div>
          <div class="light light-2"></div>
          <div class="light light-3"></div>
          <div class="light light-4"></div>
          <div class="light light-5"></div>
          <div class="light light-6"></div>
        </div>
      </div>

      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="highlight">Mathelin'eirb</span>
            </h1>
            <p class="hero-subtitle">
              Meilleur Club de l'Enseirb >>><br />Aucun débat possible 🦕
            </p>
          </div>

          <!-- Event Banner -->
          <div class="event-banner" v-if="nextEvent">
            <div class="event-content">
              <h2 class="event-title">Prochain Événement</h2>
              <h3 class="event-name">{{ nextEvent.name }}</h3>
              <p class="event-description">{{ nextEvent.description }}</p>
              <div class="event-details">
                <div class="event-info">
                  <i class="fas fa-calendar"></i>
                  <span>{{ formatDate(nextEvent.date) }}</span>
                </div>
                <div class="event-info">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>{{ nextEvent.location }}</span>
                </div>
              </div>
            </div>

            <!-- Countdown Timer -->
            <div class="countdown-container">
              <div class="countdown">
                <div class="time-unit">
                  <span class="time-value">{{ countdown.days }}</span>
                  <span class="time-label">Jours</span>
                </div>
                <div class="time-unit">
                  <span class="time-value">{{ countdown.hours }}</span>
                  <span class="time-label">Heures</span>
                </div>
                <div class="time-unit">
                  <span class="time-value">{{ countdown.minutes }}</span>
                  <span class="time-label">Minutes</span>
                </div>
                <div class="time-unit">
                  <span class="time-value">{{ countdown.seconds }}</span>
                  <span class="time-label">Secondes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Club Introduction -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h2 class="section-title">
              Notre Histoire <span class="dino-emoji">🦕</span>
            </h2>
            <p class="intro-paragraph">
              Créé par la formidable <strong>Matheline</strong>, mathelin'eirb
              est bien plus qu'un simple club étudiant. C'est une famille de 20
              amis passionnés qui partagent la même école et la même soif
              d'aventure !
            </p>
            <p class="intro-paragraph">
              Bien que notre mascotte officielle soit l'abeille de l'école, nous
              avons adopté notre propre mascotte : un magnifique dinosaure ! 🦖
              Notre club respire l'esprit préhistorique, l'aventure jurassique
              et l'exploration de nouvelles terres.
            </p>
            <div class="stats">
              <div class="stat-item">
                <div class="stat-background-light"></div>
                <span class="stat-number">20</span>
                <span class="stat-label">Membres Actifs</span>
              </div>
              <div class="stat-item">
                <div class="stat-background-light"></div>
                <span class="stat-number">1</span>
                <span class="stat-label">Année d'Existence</span>
              </div>
              <div class="stat-item">
                <div class="stat-background-light"></div>
                <span class="stat-number">∞</span>
                <span class="stat-label">Aventures</span>
              </div>
            </div>
          </div>
          <div class="intro-image">
            <img
              src="@/assets/logo.jpg"
              alt="Photo du groupe Mathelin'eirb"
              class="group-photo"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section class="news-section">
      <div class="container">
        <h2 class="section-title">
          Dernieres Actualites <span class="dino-emoji">📰</span>
        </h2>
        <div class="news-grid">
          <article
            class="news-card"
            v-for="(news, index) in latestNews"
            :key="index"
          >
            <div class="news-image">
              <img
                src="@/assets/background_1.jpg"
                alt="News image"
                class="news-banner-img"
              />
              <div class="news-image-overlay"></div>
            </div>
            <div class="news-content">
              <span class="news-date">{{ formatDate(news.date) }}</span>
              <h3 class="news-title">{{ news.title }}</h3>
              <p class="news-excerpt">{{ news.excerpt }}</p>
              <a href="#" class="news-link"
                >Lire la suite <i class="fas fa-arrow-right"></i
              ></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Rejoignez l'Aventure !</h2>
          <p>
            Venez découvrir notre communauté et participez à nos événements
            préhistoriques !
          </p>
          <div class="cta-buttons">
            <router-link to="/membres" class="btn btn-primary">
              <i class="fas fa-users"></i>
              Voir les Membres
            </router-link>
            <a href="#" class="btn btn-secondary">
              <i class="fab fa-telegram"></i>
              Rejoindre Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      nextEvent: {
        name: "Soiree Jurassique",
        description:
          "Une soirée mémorable avec des jeux, de la musique et des surprises préhistoriques !",
        date: new Date("2025-09-20T19:00:00"),
        location: "Tous chez Alexis ouaiii",
      },
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      latestNews: [
        {
          title: "Nouveau membre : Bienvenue à notre nouvelle recrue !",
          excerpt:
            "Nous sommes ravis d'accueillir un nouveau membre dans notre famille préhistorique...",
          date: new Date("2025-02-20"),
          image: "placeholder",
        },
        {
          title: "Soirée de fin de semestre réussie !",
          excerpt:
            "Notre dernière soirée a été un succès total avec plus de 80% de participation...",
          date: new Date("2025-02-15"),
          image: "placeholder",
        },
        {
          title: "Organisation du prochain événement",
          excerpt:
            "Les préparatifs pour la Soirée Jurassique 2024 sont en cours. Beaucoup de surprises vous attendent...",
          date: new Date("2025-02-10"),
          image: "placeholder",
        },
      ],
    };
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const eventTime = this.nextEvent.date.getTime();
      const timeLeft = eventTime - now;

      if (timeLeft > 0) {
        this.countdown.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        this.countdown.hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.countdown.minutes = Math.floor(
          (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.countdown.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      } else {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    },
    formatDate(date) {
      return date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(45, 80, 22, 0.8), rgba(74, 124, 89, 0.8)),
    url("@/assets/background_2.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
}

.floating-dinos {
  position: absolute;
  width: 100%;
  height: 100%;
}

.dino {
  position: absolute;
  font-size: 3rem;
  animation: float 6s ease-in-out infinite;
}

.dino-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.dino-2 {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.dino-3 {
  top: 40%;
  left: 80%;
  animation-delay: 4s;
}

.dino-4 {
  bottom: 20%;
  left: 30%;
  animation-delay: 1s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Floating Lights */
.floating-lights {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.light {
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, var(--dino-orange) 0%, transparent 70%);
  border-radius: 50%;
  animation: twinkle 3s ease-in-out infinite;
  box-shadow: 0 0 20px var(--dino-orange);
}

.light-1 {
  top: 15%;
  left: 20%;
  animation-delay: 0s;
}

.light-2 {
  top: 25%;
  right: 25%;
  animation-delay: 0.5s;
}

.light-3 {
  top: 45%;
  left: 15%;
  animation-delay: 1s;
}

.light-4 {
  top: 65%;
  right: 20%;
  animation-delay: 1.5s;
}

.light-5 {
  top: 35%;
  left: 75%;
  animation-delay: 2s;
}

.light-6 {
  bottom: 25%;
  left: 60%;
  animation-delay: 2.5s;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-text {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-family: "Jurassic Park", cursive;
  font-size: 4rem;
  font-weight: normal;
  color: var(--text-light);
  margin-bottom: -1rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  animation: slideInDown 1s ease-out;
}

.highlight {
  color: var(--dino-orange);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  font-size: clamp(5rem, 10vw, 10rem);
  letter-spacing: 5px;
}

.hero-subtitle {
  font-size: 2rem;
  color: var(--text-light);
  opacity: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInUp 1s ease-out 0.3s both;
}

/* Event Banner */
.event-banner {
  background: rgba(255, 255, 255, 0.2);
  outline: 1px solid white;
  border-radius: 20px;
  padding: 3rem;
  /* box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2); */
  backdrop-filter: blur(10px);
  animation: slideInUp 1s ease-out 0.6s both;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 5rem;
}

.event-content {
  text-align: left;
}

.event-title {
  color: var(--text-light);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.event-name {
  color: var(--text-dark);
  font-size: 5rem;
  font-weight: normal;
  margin-bottom: 1rem;
  font-family: "Jurassic Park", cursive;
}

.event-description {
  color: var(--text-light);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.event-details {
  display: flex;
  gap: 2rem;
}

.event-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-weight: 600;
}

.event-info i {
  color: var(--dino-orange);
}

/* Countdown */
.countdown-container {
  text-align: center;
}

.countdown {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.time-unit {
  background: linear-gradient(135deg, var(--dino-orange), var(--dino-red));
  border-radius: 15px;
  padding: 1rem;
  color: var(--text-light);
  box-shadow: 0 10px 20px rgba(255, 140, 0, 0.3);
}

.time-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  font-family: "Inter", sans-serif;
}

.time-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Sections */
.intro-section,
.news-section,
.cta-section {
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-family: "Jurassic Park", cursive;
  font-size: 5rem;
  font-weight: normal;
  color: var(--primary-green);
  margin-bottom: 3rem;
  position: relative;
}

.dino-emoji {
  font-size: 2rem;
  margin-left: 1rem;
  animation: bounce 2s infinite;
}

.group-photo {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.group-photo:hover {
  transform: scale(1.02);
}

/* Introduction */
.intro-section {
  background: linear-gradient(
      rgba(245, 245, 220, 0.9),
      rgba(245, 245, 220, 0.9)
    ),
    url("@/assets/background_1.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.intro-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.intro-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-background-light {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 140, 0, 0.1) 0%,
    transparent 70%
  );
  animation: rotate 8s linear infinite;
  pointer-events: none;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.stat-number {
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: var(--dino-orange);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-weight: 600;
  color: var(--secondary-green);
}

/* News Section */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.news-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: slideInUp 0.6s ease-out;
}

.news-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.news-image {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.news-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.news-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(45, 80, 22, 0.7) 0%,
    rgba(74, 124, 89, 0.5) 50%,
    rgba(107, 142, 35, 0.7) 100%
  );
}

.news-content {
  padding: 2rem;
}

.news-date {
  color: var(--dino-orange);
  font-weight: 600;
  font-size: 0.9rem;
}

.news-title {
  font-family: "Jurassic Park", cursive;
  font-size: 2rem;
  font-weight: normal;
  color: var(--primary-green);
  margin: 1rem 0;
  line-height: 1.4;
}

.news-excerpt {
  color: var(--text-dark);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.news-link {
  color: var(--dino-orange);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.news-link:hover {
  color: var(--dino-red);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(
    135deg,
    var(--primary-green),
    var(--secondary-green)
  );
  color: var(--text-light);
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  font-family: "Jurassic Park", cursive;
  font-size: 3rem;
  font-weight: normal;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background: var(--dino-orange);
  color: var(--text-light);
}

.btn-primary:hover {
  background: var(--dino-red);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(255, 140, 0, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--text-light);
  border: 2px solid var(--text-light);
}

.btn-secondary:hover {
  background: var(--text-light);
  color: var(--primary-green);
  transform: translateY(-3px);
}

/* Animations */
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .event-banner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .countdown {
    grid-template-columns: repeat(2, 1fr);
  }

  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .dino {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .event-banner {
    padding: 2rem;
  }

  .event-name {
    font-size: 4rem;
  }

  .countdown {
    grid-template-columns: 1fr;
  }

  .time-value {
    font-size: 1.5rem;
  }
}
</style>
