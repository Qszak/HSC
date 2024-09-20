<template>
  <div class="filter-buttons">
    <button 
      :class="{ active: filter === 'all' }" 
      @click="filterTeam('all')">Cała kadra</button>
    <button 
      :class="{ active: filter === 'personal' }" 
      @click="filterTeam('personal')">Trenerzy personalni</button>
    <button 
      :class="{ active: filter === 'medical' }" 
      @click="filterTeam('medical')">Trenerzy medyczni</button>
    <button 
      :class="{ active: filter === 'motor' }" 
      @click="filterTeam('motor')">Trenerzy motoryczni</button>
    <button 
      :class="{ active: filter === 'combat' }" 
      @click="filterTeam('combat')">Trenerzy sportów walki</button>
    <button 
      :class="{ active: filter === 'office' }" 
      @click="filterTeam('office')">Gabinet</button>
  </div>

  <div class="team-slider">
    <CoachCards 
      v-for="coach in filteredCoaches" 
      :key="coach.name" 
      :coachName="coach.name" 
      :coachPosition="coach.position" 
      :coachSkill="coach.skills"
      :imgSrc="coach.imgSrc" 
      :imgAlt="coach.imgAlt" 
    />
  </div>
</template>

<script>
import CoachCards from '../CoachCards/CoachCards.vue';

export default {
  name: 'TeamFilter',
  components: {
    CoachCards,
  },
  data() {
    return {
      filter: 'all', // Domyślny filtr
      coachData: [
      {
        name: "Michal Kulej",
        position: "Trener Personalny",
        skills: "personal, medical, combat, motor",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Michała Kuleja"
    },
    {
        name: "Jakub Kulej",
        position: "Trener Personalny",
        skills: "personal, combat",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Jakuba Kuleja"
    },
    {
        name: "Filip Krasiński",
        position: "Trener Personalny",
        skills: "personal",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Filipa Krasińskiego"
    },
    {
        name: "Klaudia Żmijewska",
        position: "Trener Personalny",
        skills: "personal, medical",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Klaudii Żmijewskiej"
    },
    {
        name: "Mateusz Flejterski",
        position: "Trener Personalny",
        skills: "personal, medical, combat, motor",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Mateusza Flejterskiego"
    },
    {
        name: "Tomasz Rudolf",
        position: "Trener Personalny",
        skills: "personal",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Tomasza Rudolfa"
    },
    {
        name: "Sandra Cieślik-Kulej",
        position: "Trener Personalny",
        skills: "personal",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Sandry Cieślik-Kulej"
    },
    {
        name: "Adrian Spetany",
        position: "Trener Kickboxingu",
        skills: "combat",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Adriana Spętanego"
    },
    {
        name: "Kamil Łata",
        position: "Trener BJJ (dla dzieci)",
        skills: "combat",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Kamila Łaty"
    },
    {
        name: "Dominik Warmiłło",
        position: "Trener Personalny",
        skills: "personal, combat",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Dominika Warmiłło"
    },
    {
        name: "Patryk Mikulski",
        position: "Trener MMA",
        skills: "combat",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Patryka Mikulskiego"
    },
    {
        name: "Tomasz Mitrosz",
        position: "Trener Personalny",
        skills: "personal",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Tomasza Mitrosza"
    },
    {
        name: "Grzegorz Skołuda",
        position: "Trener Personalny",
        skills: "personal, combat",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Grzegorza Skołudy"
    },
    {
        name: "Przemysław Gąska",
        position: "Trener Personalny",
        skills: "personal",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Przemysława Gąski"
    },
    {
        name: "Marcin Woźniak",
        position: "Trener Personalny",
        skills: "personal",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Marcina Woźniaka"
    },
    {
        name: "Tomasz Wroński",
        position: "Trener Personalny",
        skills: "personal, motor",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Tomasza Wrońskiego"
    },
    {
        name: "Marcin Bachórz",
        position: "Trener Kickboxingu",
        skills: "combat",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Marcina Bachórz"
    },
    {
        name: "Vladyslav Filenko",
        position: "Trener BJJ",
        skills: "combat",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Vladyslava Filenko"
    },
    {
        name: "Łukasz Szefner",
        position: "Fizjoterapeuta",
        skills: "office",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Łukasza Szefnera"
    },
    {
        name: "Natalia Zieniewicz",
        position: "Hipnoterapeutka",
        skills: "office",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Natalii Zieniewicz"
    },
      ]
    };
  },
  computed: {
    filteredCoaches() {
      if (this.filter === 'all') {
        return this.coachData;
      }
      return this.coachData.filter(coach => 
        coach.skills.includes(this.filter)
      );
    }
  },
  methods: {
    filterTeam(skill) {
      this.filter = skill;
    }
  }
};
</script>

<style scoped>

@media (max-width: 640px) {
  
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

@media (min-width: 640px) and (max-width: 960px) {
  
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

  @media (min-width: 960px) {
  
  .filter-buttons {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 1.5rem var(--space-300, 1.5rem);
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