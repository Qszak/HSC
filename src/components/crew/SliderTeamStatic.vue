<template>
  <div class="static" v-for="(coach, index) in coachData" :key="index">
    <CoachCards 
      :coachName="coach.name" 
      :coachPosition="coach.position" 
      :imgSrc="coach.imgSrc" 
      :imgAlt="coach.imgAlt" 
    />
  </div>
</template>

<script>
import CoachCards from '../CoachCards/CoachCards.vue';

export default {
name: 'SwiperTeamStatic',
components: {
  CoachCards
},
data() {
  return {
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
        skills: "Personal",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Filipa Krasińskiego"
      },
      {
        name: "Sandra Cieślik-Kulej",
        position: "Trener Personalny",
        skills: "personal",
        imgSrc: "/images/MKulej.png",
        imgAlt: "Zdjęcie Sandry Cieślik-Kulej"
      },
    ]
  };
}
};
</script>

<style scoped>
.static {
  width: calc(100svw - var(--scrollbarWidth));
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
