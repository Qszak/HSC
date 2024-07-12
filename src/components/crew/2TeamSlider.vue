<template>
     <div class="filter-buttons">
            <button class="all" @click="filterTeam('all')">Cała kadra</button>
            <button class="personal" @click="filterTeam('personal')">Trenerzy personalni</button>
            <button class="diet" @click="filterTeam('diet')">Dietetycy</button>
            <button class="medical" @click="filterTeam('medical')">Trenerzy medyczni</button>
            <button class="combat" @click="filterTeam('combat')">Trenerzy sportów walki</button>
            <button class="fizjo" @click="filterTeam('fizjo')">Fizjoterapeuci</button>
        </div>
<div class="team-slider">
<MKulej v-show="isVisible('MKulej')" data-teams="personal,medical,combat"/>
<JKulej v-show="isVisible('JKulej')" data-teams="personal"/>
<FKrasinski v-show="isVisible('FKrasinski')" data-teams="personal"/>
<SCieslik v-show="isVisible('SCieslik')" data-teams="personal"/>
<ASpetany v-show="isVisible('ASpetany')" data-teams="combat"/>
<DWarmillo v-show="isVisible('DWarmillo')" data-teams="personal,combat"/>
<KZmijewska v-show="isVisible('KZmijewska')" data-teams="personal,medical"/>
<MFlejterski v-show="isVisible('MFlejterski')" data-teams="personal,medical,combat"/>
<PMikulski v-show="isVisible('PMikulski')" data-teams="combat"/>
<TMitrosz v-show="isVisible('TMitrosz')" data-teams="personal"/>
<TRudolf v-show="isVisible('TRudolf')" data-teams="personal"/>

</div>

</template>

<script>
import ASpetany from '../CoachCards/ASpetany.vue';
import DWarmillo from '../CoachCards/DWarmillo.vue';
import FKrasinski from '../CoachCards/FKrasinski.vue';
import JKulej from '../CoachCards/JKulej.vue';
import KZmijewska from '../CoachCards/KZmijewska.vue';
import MFlejterski from '../CoachCards/MFlejterski.vue';
import MKulej from '../CoachCards/MKulej.vue';
import PMikulski from '../CoachCards/PMikulski.vue';

import SCieslik from '../CoachCards/SCieslik.vue';
import TMitrosz from '../CoachCards/TMitrosz.vue';
import TRudolf from '../CoachCards/TRudolf.vue';

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
    },
    data() {
    return {
      filter: 'all',
      teamMembers: {
        MKulej: 'personal,medical,combat',
        JKulej: 'personal',
        FKrasinski: 'personal',
        SCieslik: 'personal',
        ASpetany: 'combat',
        DWarmillo: 'personal,combat',
        KZmijewska: 'personal,medical',
        MFlejterski: 'personal,medical,combat',
        PMikulski: 'combat',
        TMitrosz: 'personal',
        TRudolf: 'personal',
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
padding: var(--space-150, 0.75rem) var(--space-100, 0.5rem);
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: var(--radius-rounded, 62.5rem);
background: var(--Surface-Brand, #E30613);
color: var(--Surface-Primary, #FFF);
text-align: center;

/* Action/Small/Bold */
font-family: Montserrat;
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: 1rem; /* 133.333% */
text-transform: uppercase;

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


</style>