<template>
    <div>
      <div class="filter-buttons">
        <button :class="{ active: filter === 'all' }" @click="filterTeam('all')">Cała kadra</button>
        <button :class="{ active: filter === 'personal' }" @click="filterTeam('personal')">Trenerzy personalni</button>
        <button :class="{ active: filter === 'medical' }" @click="filterTeam('medical')">Trenerzy medyczni</button>
        <button :class="{ active: filter === 'combat' }" @click="filterTeam('combat')">Trenerzy sportów walki</button>
        <button :class="{ active: filter === 'fizjo' }" @click="filterTeam('fizjo')">Fizjoterapeuci</button>
        <button :class="{ active: filter === 'others' }" @click="filterTeam('others')">Pozostali</button>
      </div>
      <div class="team-slider">
        <CoachCard
          v-for="(info, name) in filteredTeamMembers"
          :key="name"
          :name="name"
          :position="info.position"
          :image="info.image"
          :profileUrl="info.profileUrl"
        />
      </div>
    </div>
  </template>
  
  <script>
  import CoachCard from '../CoachCards/CoachCard.vue';
  
  export default {
    name: 'TeamSlider2',
    components: {
      CoachCard
    },
    data() {
      return {
        filter: 'all',
        teamMembers: {
          MKulej: { position: 'Trener Personalny', image: '/images/MKulej.png', profileUrl: '/kadra/michal-kulej', teams: 'personal,medical,combat' },
          JKulej: { position: 'Trener Personalny', image: '/images/MKulej.png', profileUrl: '/kadra/jakub-kulej', teams: 'personal,combat' },
          FKrasinski: { position: 'Trener Personalny', image: '/images/MKulej.png', profileUrl: '/kadra/filip-krasinski', teams: 'personal' },
          SCieslik: { position: 'Trener Personalny', image: '/images/MKulej.png', profileUrl: '/kadra/sandra-cieslik-kulej', teams: 'personal' },
          // Dodaj resztę trenerów tutaj
        }
      };
    },
    computed: {
      filteredTeamMembers() {
        const filter = this.filter;
        const teamMembers = this.teamMembers;
        return Object.fromEntries(
          Object.entries(teamMembers).filter(([name, info]) => {
            if (filter === 'all') return true;
            const teams = info.teams.split(',');
            return teams.includes(filter);
          })
        );
      }
    },
    methods: {
      filterTeam(filter) {
        this.filter = filter;
      }
    }
  };
  </script>
  
  <style scoped>

@media (max-width: 480px) {
  
  .filter-buttons {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      gap: 1rem var(--space-200, 1rem);
      align-self: stretch;
      flex-wrap: wrap;
  }
  
  button {
    display: flex;
    
    padding: var(--space-150, 0.75rem) var(--space-200, 1rem);
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: var(--radius-rounded, 62.5rem);
    border: 2px solid var(--Border-Primary, #181818);
    color: var(--Text-Primary, #181818);
    text-align: center;
    font-family: "Montserrat";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem; /* 200% */
    letter-spacing: 0.02rem;
    transform: 0.3s ease;
    cursor: pointer;
  
  }
  
  button.active {
    background: var(--Surface-Brand, #E30613);
    color: var(--Surface-Primary, #FFF);
    border-color: #E30613;
  }
  .team-slider {
      display: flex;
      padding: 2.5rem 0rem;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      gap: 2rem;
      align-self: stretch;
      flex-wrap: wrap;
  }
  }
  
  @media (min-width: 481px) {
    
    .filter-buttons {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 1rem var(--space-200, 1rem);
        align-self: stretch;
        flex-wrap: wrap;
    }
    
    button {
      display: flex;
      
      padding: var(--space-150, 0.75rem) var(--space-200, 1rem);
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      border-radius: var(--radius-rounded, 62.5rem);
      border: 2px solid var(--Border-Primary, #181818);
      color: var(--Text-Primary, #181818);
      text-align: center;
      font-family: "Montserrat";
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2rem; /* 200% */
      letter-spacing: 0.02rem;
      transform: 0.3s ease;
      cursor: pointer;
    
    }
    
    button.active {
      background: var(--Surface-Brand, #E30613);
      color: var(--Surface-Primary, #FFF);
      border-color: #E30613;
    }
    .team-slider {
      display: flex;
      padding: 2.5rem 0rem;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      gap: 2rem;
      align-self: stretch;
      flex-wrap: wrap;
    }
    }
  
  </style>
  