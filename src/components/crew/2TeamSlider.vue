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
        :class="{ active: filter === 'combat' }" 
        @click="filterTeam('combat')">Trenerzy sportów walki</button>
      <button 
        :class="{ active: filter === 'fizjo' }" 
        @click="filterTeam('fizjo')">Fizjoterapeuci</button>
        <button 
        :class="{ active: filter === 'others' }" 
        @click="filterTeam('others')">Pozostali</button>
    </div>
<div class="team-slider">
<MKulej v-show="isVisible('MKulej')" data-teams="personal,medical,combat"/>
<JKulej v-show="isVisible('JKulej')" data-teams="personal, combat"/>
<FKrasinski v-show="isVisible('FKrasinski')" data-teams="personal"/>
<SCieslik v-show="isVisible('SCieslik')" data-teams="personal"/>
<ASpetany v-show="isVisible('ASpetany')" data-teams="combat"/>
<DWarmillo v-show="isVisible('DWarmillo')" data-teams="personal,combat"/>
<KZmijewska v-show="isVisible('KZmijewska')" data-teams="personal,medical"/>
<MFlejterski v-show="isVisible('MFlejterski')" data-teams="personal,medical,combat"/>
<PMikulski v-show="isVisible('PMikulski')" data-teams="combat"/>
<TMitrosz v-show="isVisible('TMitrosz')" data-teams="personal"/>
<TRudolf v-show="isVisible('TRudolf')" data-teams="personal"/>
<LSzefner v-show="isVisible('LSzefner')" data-teams="fizjo"/>
<NZieniewicz v-show="isVisible('NZieniewicz')" data-teams="others"/>
<PGaska v-show="isVisible('PGaska')" data-teams="personal"/>
<KLata v-show="isVisible('KLata')" data-teams="others"/>
<TWronski v-show="isVisible('TWronski')" data-teams="personal"/>
<GSkoluda v-show="isVisible('GSkoluda')" data-teams="personal, combat"/>
<MWozniak v-show="isVisible('MWozniak')" data-teams="personal"/>
<VFilenko v-show="isVisible('VFilenko')" data-teams="combat"/>
<MBachorz v-show="isVisible('MBachorz')" data-teams="combat"/>

</div>

</template>

<script>
import ASpetany from '../CoachCards/ASpetany.vue';
import DWarmillo from '../CoachCards/DWarmillo.vue';
import FKrasinski from '../CoachCards/FKrasinski.vue';
import GSkoluda from '../CoachCards/GSkoluda.vue';
import JKulej from '../CoachCards/JKulej.vue';
import KLata from '../CoachCards/KLata.vue';
import KZmijewska from '../CoachCards/KZmijewska.vue';
import LSzefner from '../CoachCards/LSzefner.vue';
import MFlejterski from '../CoachCards/MFlejterski.vue';
import MKulej from '../CoachCards/MKulej.vue';
import MWozniak from '../CoachCards/MWozniak.vue';
import NZieniewicz from '../CoachCards/NZieniewicz.vue';
import PGaska from '../CoachCards/PGaska.vue';
import PMikulski from '../CoachCards/PMikulski.vue';
import MBachorz from '../CoachCards/MBachorz.vue';
import SCieslik from '../CoachCards/SCieslik.vue';
import TMitrosz from '../CoachCards/TMitrosz.vue';
import TRudolf from '../CoachCards/TRudolf.vue';
import TWronski from '../CoachCards/TWronski.vue';
import VFilenko from '../CoachCards/VFilenko.vue';

export default {
    name: 'TeamSlider',
    components: {
        MKulej,
        JKulej,
        FKrasinski,
        SCieslik,
        ASpetany,
        DWarmillo,
        KZmijewska,
        MFlejterski,
        PMikulski,
        TMitrosz,
        TRudolf,
        LSzefner,
        NZieniewicz,
        PGaska,
        KLata,
        TWronski,
        GSkoluda,
        MWozniak,
        VFilenko,
        MBachorz,
    },
    data() {
    return {
      filter: 'all',
      teamMembers: {
        MKulej: 'personal,medical,combat',
        JKulej: 'personal,combat',
        FKrasinski: 'personal',
        SCieslik: 'personal',
        ASpetany: 'combat',
        DWarmillo: 'personal,combat',
        KZmijewska: 'personal,medical',
        MFlejterski: 'personal,medical,combat',
        PMikulski: 'combat',
        TMitrosz: 'personal',
        TRudolf: 'personal',
        LSzefner: 'fizjo',
        NZieniewicz: 'others',
        PGaska: 'personal',
        KLata: 'others',
        TWronski: 'personal',
        GSkoluda: 'personal,combat',
        MWozniak: 'personal',
        VFilenko: 'combat',
        MBachorz: 'combat',
      }
    }
  },
  methods: {
    filterTeam(filter) {
      this.filter = filter;
    },
    isVisible(member) {
      if (this.filter === 'all') return true;
      const teams = this.teamMembers[member].split(',');
      return teams.includes(this.filter);
    }
  }
}

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