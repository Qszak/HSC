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
import { coachData } from '@/data/coachData';
import CoachCards from '../CoachCards/CoachCards.vue';


export default {
  name: 'TeamFilter',
  components: {
    CoachCards,
  },
  data() {
    return {
      filter: 'all',
      coachData,
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