<template>
  <div class="members-page">
    <!-- Header Section -->
    <section class="members-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">
            Nos Membres <span class="dino-emoji">🦕</span>
          </h1>
          <p class="page-subtitle">
            Découvrez la famille préhistorique de mathelin'eirb !
          </p>
          <div class="members-stats">
            <div class="stat">
              <span class="stat-number">{{ members.length }}</span>
              <span class="stat-label">Membres</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ activeMembers }}</span>
              <span class="stat-label">Actifs</span>
            </div>
            <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Sourires</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Search and Filter -->
    <section class="search-section">
      <div class="container">
        <div class="search-bar">
          <div class="search-input-container">
            <i class="fas fa-search"></i>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher un membre..."
              class="search-input"
            />
          </div>
          <div class="filter-buttons">
            <button
              v-for="filter in filters"
              :key="filter.key"
              @click="setActiveFilter(filter.key)"
              :class="['filter-btn', { active: activeFilter === filter.key }]"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Members Grid -->
    <section class="members-grid-section">
      <div class="container">
        <div class="members-grid">
          <div
            v-for="(member, index) in filteredMembers"
            :key="member.id"
            class="member-card"
            :style="{ 'animation-delay': index * 0.1 + 's' }"
            @click="selectMember(member)"
          >
            <div class="member-card-background">
              <img
                :src="getProfilePicture(member.profilePicture)"
                :alt="member.firstName"
                class="member-profile-pic"
              />
              <div class="member-overlay"></div>
            </div>

            <div class="member-content">
              <div class="member-info-section">
                <div class="member-header">
                  <h3 class="member-name">{{ member.firstName }}</h3>
                  <div class="member-status" :class="member.status"></div>
                </div>

                <p class="member-role">{{ member.role }}</p>

                <div class="member-details">
                  <div class="detail-item" v-if="member.year">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Année {{ member.year }}</span>
                  </div>
                  <div class="detail-item" v-if="member.clubs.length">
                    <i class="fas fa-users"></i>
                    <span>{{ member.clubs.join(", ") }}</span>
                  </div>
                </div>

                <div class="member-tags">
                  <span
                    v-for="tag in member.roleTags"
                    :key="tag"
                    class="tag"
                    :class="getTagClass(tag)"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredMembers.length === 0" class="empty-state">
          <div class="empty-icon">🦕</div>
          <h3>Aucun membre trouvé</h3>
          <p>Essayez de modifier vos critères de recherche</p>
        </div>
      </div>
    </section>

    <!-- Member Modal -->
    <div v-if="selectedMember" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>

        <div class="modal-member">
          <div class="modal-avatar">
            <div class="avatar-placeholder large">
              <i class="fas fa-user"></i>
            </div>
          </div>

          <div class="modal-info">
            <h2>{{ selectedMember.firstName }}</h2>
            <p class="modal-role">{{ selectedMember.role }}</p>
            <p class="modal-description">{{ selectedMember.description }}</p>

            <div class="modal-details">
              <div class="detail-row" v-if="selectedMember.year">
                <i class="fas fa-graduation-cap"></i>
                <span>Année {{ selectedMember.year }}</span>
              </div>
              <div class="detail-row" v-if="selectedMember.major">
                <i class="fas fa-book"></i>
                <span>{{ selectedMember.major }}</span>
              </div>
              <div class="detail-row" v-if="selectedMember.hometown">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ selectedMember.hometown }}</span>
              </div>
              <div class="detail-row" v-if="selectedMember.clubs.length">
                <i class="fas fa-users"></i>
                <span>{{ selectedMember.clubs.join(", ") }}</span>
              </div>
            </div>

            <div class="modal-interests">
              <h4>Centres d'intérêt</h4>
              <div class="interests-grid">
                <span
                  v-for="interest in selectedMember.interests"
                  :key="interest"
                  class="interest-tag"
                >
                  {{ interest }}
                </span>
              </div>
            </div>

            <div class="modal-social">
              <a href="#" class="social-btn telegram">
                <i class="fab fa-telegram"></i>
                Contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MembersView",
  data() {
    return {
      searchQuery: "",
      activeFilter: "all",
      selectedMember: null,
      filters: [
        { key: "all", label: "Tous" },
        { key: "active", label: "Actifs" },
        { key: "favorite", label: "Favoris" },
        { key: "founding", label: "Fondateurs" },
      ],
      members: [
        {
          id: 1,
          firstName: "Matheline",
          role: "Fondatrice & Présidente",
          year: 3,
          major: "Informatique",
          hometown: "Paris",
          status: "active",
          profilePicture: "dinausor.png",
          roleTags: ["Fondateur", "Président"],
          clubs: ["mathelin'eirb", "BDE", "Informatique"],
          interests: [
            "Leadership",
            "Organisation",
            "Voyages",
            "Photographie",
            "Musique",
          ],
          description:
            "Créatrice du club mathelin'eirb, Matheline est une leader née qui a su rassembler une communauté d'amis passionnés. Toujours prête pour une nouvelle aventure !",
        },
        {
          id: 2,
          firstName: "Alexandre",
          role: "Vice-Président",
          year: 3,
          major: "Génie Civil",
          hometown: "Lyon",
          status: "active",
          profilePicture: "dinausor.png",
          roleTags: ["Vice-Président", "Logistique"],
          clubs: ["mathelin'eirb", "Sport", "Génie Civil"],
          interests: ["Sport", "Voyages", "Cuisine", "Cinéma"],
          description:
            "Alexandre est le cerveau logistique du club. Il s'assure que tous nos événements se déroulent parfaitement !",
        },
        {
          id: 3,
          firstName: "Sophie",
          role: "Trésorière",
          year: 2,
          major: "Comptabilité",
          hometown: "Marseille",
          status: "active",
          profilePicture: "dinausor.png",
          roleTags: ["Trésorier", "Gestion"],
          clubs: ["mathelin'eirb", "Comptabilité", "Danse"],
          interests: ["Lecture", "Danse", "Art", "Nature"],
          description:
            "Sophie veille sur les finances du club avec une précision chirurgicale. Rien ne lui échappe !",
        },
        {
          id: 4,
          firstName: "Thomas",
          role: "Responsable Communication",
          year: 2,
          major: "Design Graphique",
          hometown: "Toulouse",
          status: "active",
          profilePicture: "dinausor.png",
          roleTags: ["Communication", "Design"],
          clubs: ["mathelin'eirb", "Design", "Photographie"],
          interests: ["Design", "Photographie", "Musique", "Tech"],
          description:
            "Thomas donne vie à nos idées grâce à ses talents créatifs. Notre identité visuelle lui doit tout !",
        },
        {
          id: 5,
          firstName: "Emma",
          role: "Responsable Événements",
          year: 1,
          major: "Psychologie",
          hometown: "Nantes",
          status: "active",
          profilePicture: "dinausor.png",
          roleTags: ["Animation", "Événements"],
          clubs: ["mathelin'eirb", "Théâtre", "Psychologie"],
          interests: ["Psychologie", "Théâtre", "Musique", "Lecture"],
          description:
            "Emma apporte une énergie créative incroyable à tous nos événements. Elle sait comment animer une soirée !",
        },
        {
          id: 6,
          firstName: "Lucas",
          role: "Membre Actif",
          year: 2,
          major: "Éducation Physique",
          hometown: "Bordeaux",
          status: "active",
          profilePicture: "dinausor.png",
          roleTags: ["Sport", "Bien-être"],
          clubs: ["mathelin'eirb", "Sport", "Nutrition"],
          interests: ["Sport", "Nutrition", "Voyages", "Cinéma"],
          description:
            "Lucas est notre coach sportif personnel. Il nous motive à rester en forme tout en s'amusant !",
        },
        {
          id: 7,
          firstName: "Camille",
          role: "Membre Actif",
          year: 3,
          major: "Histoire de l'Art",
          hometown: "Strasbourg",
          status: "active",
          profilePicture: "dinausor.png",
          roleTags: ["Culture", "Arts"],
          clubs: ["mathelin'eirb", "Histoire", "Musées"],
          interests: ["Art", "Histoire", "Musées", "Voyages"],
          description:
            "Camille nous fait découvrir des trésors culturels cachés. Chaque sortie avec elle est une découverte !",
        },
        {
          id: 8,
          firstName: "Maxime",
          role: "Membre Actif",
          year: 2,
          major: "Informatique",
          hometown: "Rennes",
          status: "active",
          profilePicture: "dinausor.png",
          roleTags: ["Tech", "Innovation"],
          clubs: ["mathelin'eirb", "Gaming", "Informatique"],
          interests: ["Programmation", "Gaming", "Tech", "Science"],
          description:
            "Maxime est notre geek officiel. Il nous aide avec tous nos besoins technologiques !",
        },
        {
          id: 9,
          firstName: "Léa",
          role: "Membre Actif",
          year: 1,
          major: "Langues Étrangères",
          hometown: "Montpellier",
          status: "active",
          profilePicture: "dinausor.png",
          roleTags: ["International", "Langues"],
          clubs: ["mathelin'eirb", "Langues", "International"],
          interests: ["Langues", "Voyages", "Culture", "Musique"],
          description:
            "Léa nous ouvre les portes du monde avec ses connaissances linguistiques et culturelles !",
        },
        {
          id: 10,
          firstName: "Antoine",
          role: "Membre Actif",
          year: 2,
          major: "Musique",
          hometown: "Nice",
          status: "active",
          profilePicture: "dinausor.png",
          roleTags: ["Musique", "Spectacle"],
          clubs: ["mathelin'eirb", "Musique", "DJ"],
          interests: ["Musique", "Concert", "Composition", "Sport"],
          description:
            "Antoine anime nos soirées avec ses talents musicaux. Il est notre DJ officiel !",
        },
      ],
    };
  },
  computed: {
    activeMembers() {
      return this.members.filter((member) => member.status === "active").length;
    },
    filteredMembers() {
      let filtered = this.members;

      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (member) =>
            member.firstName.toLowerCase().includes(query) ||
            member.role.toLowerCase().includes(query) ||
            member.clubs.some((club) => club.toLowerCase().includes(query)) ||
            member.roleTags.some((tag) => tag.toLowerCase().includes(query)) ||
            member.interests.some((interest) =>
              interest.toLowerCase().includes(query)
            )
        );
      }

      // Apply category filter
      switch (this.activeFilter) {
        case "active":
          filtered = filtered.filter((member) => member.status === "active");
          break;
        case "favorite":
          // For now, show all active members as we removed the favorite system
          filtered = filtered.filter((member) => member.status === "active");
          break;
        case "founding":
          filtered = filtered.filter((member) =>
            member.roleTags.includes("Fondateur")
          );
          break;
      }

      return filtered;
    },
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    },
    selectMember(member) {
      this.selectedMember = member;
    },
    closeModal() {
      this.selectedMember = null;
    },
    getProfilePicture(pictureName) {
      return require(`@/assets/pfp/${pictureName}`);
    },
    getTagClass(tag) {
      const tagClasses = {
        Fondateur: "tag-founder",
        Président: "tag-president",
        "Vice-Président": "tag-vice-president",
        Trésorier: "tag-treasurer",
        Communication: "tag-communication",
        Design: "tag-design",
        Animation: "tag-animation",
        Événements: "tag-events",
        Sport: "tag-sport",
        "Bien-être": "tag-wellness",
        Culture: "tag-culture",
        Arts: "tag-arts",
        Tech: "tag-tech",
        Innovation: "tag-innovation",
        International: "tag-international",
        Langues: "tag-languages",
        Musique: "tag-music",
        Spectacle: "tag-spectacle",
        Logistique: "tag-logistics",
        Gestion: "tag-management",
      };
      return tagClasses[tag] || "tag-default";
    },
  },
};
</script>

<style scoped>
/* Header Section */
.members-header {
  background: linear-gradient(
    135deg,
    var(--primary-green) 0%,
    var(--secondary-green) 100%
  );
  color: var(--text-light);
  padding: 4rem 0 3rem;
  text-align: center;
}

.page-title {
  font-family: "Jurassic Park", cursive;
  font-size: 3.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.page-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.members-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat {
  text-align: center;
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
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Search Section */
.search-section {
  padding: 2rem 0;
  background: var(--bg-light);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.search-bar {
  display: flex;
  gap: 2rem;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.search-input-container {
  position: relative;
  flex: 1;
}

.search-input-container i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--secondary-green);
  font-size: 1.1rem;
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid var(--secondary-green);
  border-radius: 50px;
  font-size: 1.1rem;
  background: white;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--dino-orange);
  box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid var(--secondary-green);
  background: white;
  color: var(--secondary-green);
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--dino-orange);
  border-color: var(--dino-orange);
  color: white;
  transform: translateY(-2px);
}

/* Members Grid */
.members-grid-section {
  padding: 3rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  justify-items: center;
  align-items: start;
}

.member-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  animation: slideInUp 0.6s ease-out both;
  position: relative;
  aspect-ratio: 3/4;
  width: 100%;
  max-width: 280px;
}

.member-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.member-card-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.member-profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(45, 80, 22, 0.5) 30%,
    rgba(74, 124, 89, 0.4) 70%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 2;
}

.member-content {
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0;
  color: white;
}

.member-info-section {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.3) 80%,
    transparent 100%
  );
  padding: 2rem 1.5rem 1.5rem;
  margin-top: auto;
}

.member-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
}

.member-name {
  font-family: "Jurassic Park", cursive;
  font-size: 1.8rem;
  font-weight: normal;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
}

.member-status {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid white;
  flex-shrink: 0;
}

.member-status.active {
  background: #4caf50;
}

.member-status.inactive {
  background: #ccc;
}

.member-role {
  color: var(--dino-orange);
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.member-details {
  margin-bottom: 0.8rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.detail-item i {
  color: var(--dino-orange);
  width: 14px;
  flex-shrink: 0;
}

.member-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.tag {
  padding: 0.3rem 0.7rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.tag-founder {
  background: rgba(255, 215, 0, 0.9) !important;
  color: #8b4513 !important;
}
.tag-president {
  background: rgba(255, 107, 107, 0.9) !important;
  color: white !important;
}
.tag-vice-president {
  background: rgba(78, 205, 196, 0.9) !important;
  color: white !important;
}
.tag-treasurer {
  background: rgba(69, 183, 209, 0.9) !important;
  color: white !important;
}
.tag-communication {
  background: rgba(150, 206, 180, 0.9) !important;
  color: white !important;
}
.tag-design {
  background: rgba(138, 43, 226, 0.9) !important;
  color: white !important;
}
.tag-animation {
  background: rgba(255, 234, 167, 0.9) !important;
  color: #8b4513 !important;
}
.tag-events {
  background: rgba(255, 140, 0, 0.9) !important;
  color: white !important;
}
.tag-sport {
  background: rgba(116, 185, 255, 0.9) !important;
  color: white !important;
}
.tag-wellness {
  background: rgba(76, 175, 80, 0.9) !important;
  color: white !important;
}
.tag-culture {
  background: rgba(162, 155, 254, 0.9) !important;
  color: white !important;
}
.tag-arts {
  background: rgba(233, 30, 99, 0.9) !important;
  color: white !important;
}
.tag-tech {
  background: rgba(108, 92, 231, 0.9) !important;
  color: white !important;
}
.tag-innovation {
  background: rgba(33, 150, 243, 0.9) !important;
  color: white !important;
}
.tag-international {
  background: rgba(253, 121, 168, 0.9) !important;
  color: white !important;
}
.tag-languages {
  background: rgba(156, 39, 176, 0.9) !important;
  color: white !important;
}
.tag-music {
  background: rgba(253, 203, 110, 0.9) !important;
  color: #8b4513 !important;
}
.tag-spectacle {
  background: rgba(255, 152, 0, 0.9) !important;
  color: white !important;
}
.tag-logistics {
  background: rgba(96, 125, 139, 0.9) !important;
  color: white !important;
}
.tag-management {
  background: rgba(63, 81, 181, 0.9) !important;
  color: white !important;
}
.tag-default {
  background: rgba(74, 124, 89, 0.9) !important;
  color: white !important;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--secondary-green);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

.empty-state h3 {
  font-family: "Jurassic Park", cursive;
  font-size: 1.8rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: slideInUp 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: var(--dino-orange);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: var(--dino-red);
  transform: scale(1.1);
}

.modal-member {
  text-align: center;
}

.modal-info h2 {
  font-family: "Jurassic Park", cursive;
  font-size: 2.5rem;
  font-weight: normal;
  color: var(--primary-green);
  margin: 1rem 0 0.5rem;
}

.modal-role {
  color: var(--dino-orange);
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.modal-description {
  color: var(--text-dark);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.modal-details {
  margin-bottom: 2rem;
}

.detail-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--secondary-green);
}

.detail-row i {
  color: var(--dino-orange);
  width: 20px;
}

.modal-interests h4 {
  font-family: "Jurassic Park", cursive;
  color: var(--primary-green);
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: normal;
}

.interests-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.interest-tag {
  padding: 0.5rem 1rem;
  background: var(--accent-green);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.modal-social {
  display: flex;
  justify-content: center;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.social-btn.telegram {
  background: var(--dino-orange);
  color: white;
}

.social-btn.telegram:hover {
  background: var(--dino-red);
  transform: translateY(-2px);
}

/* Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .members-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .search-bar {
    flex-direction: column;
    gap: 1rem;
  }

  .filter-buttons {
    flex-wrap: wrap;
    justify-content: center;
  }

  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .member-card {
    aspect-ratio: 3/4;
    max-width: 250px;
  }

  .member-info-section {
    padding: 1.5rem 1rem 1rem;
  }

  .modal-content {
    width: 95%;
    padding: 1.5rem;
  }

  .modal-info h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .member-info-section {
    padding: 1.2rem 0.8rem 0.8rem;
  }

  .member-name {
    font-size: 1.5rem;
  }

  .member-role {
    font-size: 1rem;
  }

  .detail-item {
    font-size: 0.8rem;
  }

  .tag {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }

  .member-tags {
    justify-content: center;
  }
}
</style>
